import { useEffect } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AlreadySubscribed = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const redirect = setTimeout(() => {
            navigate("/dashboard")
        }, 5000)

        return () => clearTimeout(redirect)
    }, [navigate])

    return (
        <div className="flex flex-col items-center justify-center min-h-[65vh] py-12 px-4 text-center">
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-xl space-y-4">
                <IoMdCheckmarkCircle className="w-16 h-16 text-emerald-500 mx-auto" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Active Membership Confirmed
                </h2>
                <p className="text-sm text-slate-500 dark:text-zinc-400">
                    You already have an active subscription. Enjoy your fitness journey!
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold pt-2">
                    Redirecting to dashboard in 5 seconds...
                </p>
            </div>
        </div>
    )
}

export default AlreadySubscribed
