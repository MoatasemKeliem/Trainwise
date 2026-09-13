import { ImSad2 } from "react-icons/im"
import { Link } from "react-router-dom"
import { FiLock, FiArrowRight } from "react-icons/fi"

const Unauthorized = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[65vh] py-12 px-4 text-center">
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-xl space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
                    <FiLock className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                        Access Restricted
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Sorry, this feature or page is not available for your current account plan.
                    </p>
                </div>

                <div className="pt-2 space-y-3">
                    <Link to="/dashboard" className="block w-full">
                        <button className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2">
                            <span>Go To Your Dashboard</span>
                            <FiArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                    <Link to="/pricing" className="block w-full">
                        <button className="w-full py-3 px-4 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 font-medium text-xs rounded-xl transition-all">
                            Upgrade Membership Plan
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Unauthorized
