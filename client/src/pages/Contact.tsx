import { Link } from "react-router-dom"
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi"

const Contact = () => {
    return (
        <div className="flex items-center justify-center min-h-[75vh] py-8">
            <div className="w-full max-w-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2">
                        <FiMail className="w-7 h-7" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Contact Support
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Have a question or feedback? We'd love to hear from you.
                    </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Your Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <FiUser className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="John Doe"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <FiMail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Message
                        </label>
                        <div className="relative">
                            <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                                <FiMessageSquare className="w-5 h-5" />
                            </div>
                            <textarea
                                rows={5}
                                placeholder="How can we help you?"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-y"
                            ></textarea>
                        </div>
                    </div>

                    <Link to="/" className="block">
                        <button
                            type="button"
                            className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-2xl transition-all shadow-md shadow-emerald-600/20 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                        >
                            <FiSend className="w-4 h-4" />
                            <span>Send Message</span>
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Contact
