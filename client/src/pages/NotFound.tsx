import { Link } from "react-router-dom"
import { FiAlertCircle, FiHome } from "react-icons/fi"

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[65vh] py-12 px-4 text-center">
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-xl space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <FiAlertCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                    <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">404</span>
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                        Page Not Found
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div>
                    <Link to="/" className="block w-full">
                        <button className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2">
                            <FiHome className="w-4 h-4" />
                            <span>Return to Home</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
