import axios from 'axios';
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FiAlertTriangle } from 'react-icons/fi';

const MySubscription = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { subscriptionId } = useAuth()
    const Backend_URL = import.meta.env.VITE_API_URL;

    const cancelSubscription = async (e: FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true);

            const reposne = await axios.post(`${Backend_URL}/stripe/cancel-payment`, { subscriptionId }, { withCredentials: true })

            if (reposne.data.message === "Subscription canceled successfully") {
                navigate("/message-page", {
                    state: { messageToShow: "cancelled" }
                })
                return
            }
        } catch (error) {
            console.error("Couldn't cancel subscription", error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center gap-3 py-3 px-4 bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl text-sm">
                <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                <span>Cancelling subscription. Please wait...</span>
            </div>
        )
    }

    return (
        <form onSubmit={cancelSubscription}>
            <button 
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/60 rounded-xl border border-red-200 dark:border-red-900/50 transition-all cursor-pointer"
            >
                <FiAlertTriangle className="w-4 h-4" />
                Cancel Membership
            </button>
        </form>
    )
}

export default MySubscription
