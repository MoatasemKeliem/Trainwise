import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../components/CheckOutForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { stripePromise } from "../utils";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { FiLock, FiShield } from "react-icons/fi";

const Subscription = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const Backend_URL = import.meta.env.VITE_API_URL;
  const { priceId } = useParams();
  const isPremiumPlan = priceId === "price_1SaEYU03YBWNs0AckJVboo3e";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const createSetupIntent = async () => {
      try {
        const response = await axios.post(
          `${Backend_URL}/stripe/create-subscription`,
          { priceId },
          { withCredentials: true },
        );

        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Couldn't create SetupIntent", error);
      }
    };

    createSetupIntent();
  }, [Backend_URL, priceId]);

  if (!clientSecret) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="p-8 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-xl flex flex-col items-center gap-4 text-center max-w-sm">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Setting Up Checkout</h2>
          <p className="text-xs text-slate-500 dark:text-zinc-400">Connecting securely to Stripe...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-10 max-w-5xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-200 dark:border-zinc-800">
          <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
            <FiShield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Checkout & Activation
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
              {isPremiumPlan ? "Premium Plan ($19.99/mo)" : "Basic Plan ($9.99/mo)"}
            </p>
          </div>
        </div>

        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Summary */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Included in Your Membership
              </h2>
              
              {loading ? (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
                  <div className="w-8 h-8 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm font-medium text-slate-700 dark:text-zinc-300">Processing payment safely...</p>
                </div>
              ) : (
                <ul className="space-y-3 text-sm text-slate-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Instantly generate tailored AI training plans</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Generate nutrition plans tailored to your target macros</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Track workouts and meals with instant AI coach feedback</span>
                  </li>
                  {isPremiumPlan && (
                    <li className="flex items-start gap-2.5 font-medium text-slate-900 dark:text-white">
                      <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>Read weekly articles to inspire, motivate, and optimize training</span>
                    </li>
                  )}
                </ul>
              )}

              <div className="pt-4 border-t border-slate-200 dark:border-zinc-700/60 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
                <FiLock className="w-4 h-4 text-emerald-500" />
                <span>256-bit SSL encrypted & powered by Stripe</span>
              </div>
            </div>

            {/* Right: Payment Element */}
            <div className="lg:col-span-7">
              <CheckOutForm setLoading={setLoading} loading={loading} />
            </div>
          </div>
        </Elements>
      </div>
    </div>
  );
};

export default Subscription;
