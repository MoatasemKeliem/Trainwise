import { FaCheck, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="py-8 sm:py-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Transparent Pricing
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-4">
                    Choose Your Fitness Level
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400">
                    Unlock AI-driven personalized workouts, macro nutrition plans, and intelligent training logs.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                {/* Basic Card */}
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 flex flex-col justify-between shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-slate-300 dark:hover:border-zinc-700 transition-all">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Basic</h2>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                                Essential
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-zinc-400 mb-6">
                            Ideal for fitness enthusiasts starting their structured training journey.
                        </p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$9.99</span>
                            <span className="text-sm text-slate-500 dark:text-zinc-400">/ month</span>
                        </div>

                        <ul className="space-y-4 text-sm text-slate-700 dark:text-zinc-300 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="p-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                                    <FaCheck className="w-3.5 h-3.5" />
                                </span>
                                <span>Generate custom training plans</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="p-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                                    <FaCheck className="w-3.5 h-3.5" />
                                </span>
                                <span>Generate personalized nutrition plans</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="p-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                                    <FaCheck className="w-3.5 h-3.5" />
                                </span>
                                <span>Track progress with smart training logs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="p-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                                    <FaCheck className="w-3.5 h-3.5" />
                                </span>
                                <span>Get instant feedback from AI Coach</span>
                            </li>
                        </ul>
                    </div>

                    <Link to="/subscribe/price_1SaEY403YBWNs0AcBhptjUuj" className="block w-full">
                        <button className="w-full py-3.5 px-4 bg-slate-900 dark:bg-zinc-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-zinc-900 font-semibold rounded-2xl transition-all shadow-md active:scale-[0.99] cursor-pointer">
                            Subscribe Now
                        </button>
                    </Link>
                </div>

                {/* Premium Card */}
                <div className="relative bg-white dark:bg-zinc-900 border-2 border-emerald-500 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-emerald-500/10 transition-all">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                        <FaStar className="w-3 h-3" />
                        Most Popular
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4 mt-2">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Premium</h2>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                Full Access
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-zinc-400 mb-6">
                            Complete fitness suite with exclusive expert articles & unlimited AI recommendations.
                        </p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$19.99</span>
                            <span className="text-sm text-slate-500 dark:text-zinc-400">/ month</span>
                        </div>

                        <ul className="space-y-4 text-sm text-slate-700 dark:text-zinc-300 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="p-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                                    <FaCheck className="w-3.5 h-3.5" />
                                </span>
                                <span>Generate custom training plans</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="p-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                                    <FaCheck className="w-3.5 h-3.5" />
                                </span>
                                <span>Generate personalized nutrition plans</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="p-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                                    <FaCheck className="w-3.5 h-3.5" />
                                </span>
                                <span>Track progress with smart training logs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="p-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                                    <FaCheck className="w-3.5 h-3.5" />
                                </span>
                                <span>Get instant feedback from AI Coach</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="p-1 bg-emerald-500 text-slate-950 rounded-lg mt-0.5">
                                    <FaCheck className="w-3.5 h-3.5" />
                                </span>
                                <span className="font-medium text-slate-900 dark:text-white">
                                    Read fitness articles from industry experts
                                </span>
                            </li>
                        </ul>
                    </div>

                    <Link to="/subscribe/price_1SaEYU03YBWNs0AckJVboo3e" className="block w-full">
                        <button className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-2xl transition-all shadow-md shadow-emerald-600/20 active:scale-[0.99] cursor-pointer">
                            Subscribe Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
