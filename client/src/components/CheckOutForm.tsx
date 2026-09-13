import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiLock } from "react-icons/fi";

const CheckOutForm = ({ setLoading, loading }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { priceId } = useParams();
  const Backend_URL = import.meta.env.VITE_API_URL;

  if (!priceId) {
    navigate("/pricing");
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe elements or stripe is missing");
      return;
    }

    setLoading(true);

    try {
      const result = await stripe.confirmSetup({
        elements,
        redirect: "if_required",
      });

      if (result.error) {
        console.error("Couldn't pay for subscription", result.error.message);
        return;
      }

      const paymentMethodId = result.setupIntent?.payment_method;

      const reposne = await axios.post(
        `${Backend_URL}/stripe/create-payment`,
        { priceId, paymentMethodId },
        { withCredentials: true },
      );

      if (reposne.data.message === "You already have an actice subscription") {
        navigate("/message-page", {
          state: { messageToShow: "alreadySubscribed" },
        });
        return;
      }

      if (reposne.data.message === "Your payment was successful") {
        navigate("/message-page", {
          state: { messageToShow: "success" },
        });
        return;
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-slate-50 dark:bg-zinc-800/40 p-4 rounded-2xl border border-slate-200 dark:border-zinc-800">
        <PaymentElement />
      </div>

      <button
        type="submit"
        disabled={loading || !stripe}
        className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-semibold rounded-2xl transition-all shadow-md shadow-emerald-600/20 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
      >
        <FiLock className="w-4 h-4" />
        <span>{loading ? "Processing Payment..." : "Complete Order"}</span>
      </button>
    </form>
  );
};

export default CheckOutForm;
