import { Link } from 'react-router-dom'
import { FaStar, FaCheck, FaArrowRight, FaDumbbell, FaUtensils, FaClipboardList, FaBookOpen } from "react-icons/fa";
import image from "../assets/hero-image.jpg"
import { IoMdFitness } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { FiZap, FiShield } from 'react-icons/fi';

const LandingPage = () => {
    return (
        <div className="space-y-20 sm:space-y-28 pb-12">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-3xl bg-zinc-950 text-white min-h-[550px] sm:min-h-[620px] flex items-center shadow-2xl">
                {/* Background Image with Dark Gradient Mask */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={image} 
                        alt="Fitness athlete training hero background" 
                        className="w-full h-full object-cover object-center opacity-45 scale-105 transform transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-3xl px-6 sm:px-12 py-12 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                        <FiZap className="w-3.5 h-3.5" />
                        <span>NEXT-GEN AI FITNESS PLATFORM</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
                        Take Your Fitness Journey To The <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Next Level</span>
                    </h1>

                    <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
                        Personalized AI training plans, expert nutrition strategies, workout tracking, and intelligent real-time feedback in seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        <Link to="/register" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/25 active:scale-95 text-base">
                            <span>Join Now</span>
                            <FaArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/pricing" className="inline-flex items-center justify-center px-6 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold rounded-2xl border border-zinc-700/80 backdrop-blur-md transition-all text-base">
                            See Pricing
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-6 max-w-md">
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold text-white">10k+</p>
                            <p className="text-xs text-zinc-400">Active Athletes</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                <span className="text-2xl sm:text-3xl font-extrabold text-white">4.9</span>
                                <FaStar className="w-4 h-4 text-amber-400 fill-amber-400" />
                            </div>
                            <p className="text-xs text-zinc-400">User Rating</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold text-white">3+</p>
                            <p className="text-xs text-zinc-400">Smart Features</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Cards */}
            <section className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        Why Trainwise
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
                        Built For High Performance
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <FiShield className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Affordable Plans</h3>
                        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                            Access premium-grade AI coaching and macro planning at a fraction of personal trainer costs.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <LuBrainCircuit className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI-Powered Intelligence</h3>
                        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                            Engineered with advanced algorithms to structure exercises and adjust nutrition as you progress.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <IoMdFitness className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Personalized Fitness</h3>
                        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                            Custom workouts tailored specifically to your experience level, available equipment, and goal schedule.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonial Feature Card */}
            <section className="bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-zinc-800 relative overflow-hidden">
                <div className="max-w-3xl relative z-10 space-y-6">
                    <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-5 h-5 fill-amber-400" />
                        ))}
                    </div>

                    <blockquote className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                        "Feels like having a personal coach in my pocket 24/7."
                    </blockquote>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        I've tried many fitness apps, but Trainwise is by far the best. The app generates fitness plans that actually fit my lifestyle. The training log is my favorite feature — being able to track my workouts and receive AI-powered feedback has helped me understand my progress and stay motivated every single week.
                    </p>

                    <div className="pt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500 text-zinc-950 font-bold flex items-center justify-center text-sm">
                            JD
                        </div>
                        <div>
                            <p className="font-bold text-sm text-white">Alex M.</p>
                            <p className="text-xs text-slate-400">Dedicated Member & Powerlifter</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Journey Grid */}
            <section className="space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Your Complete Fitness Suite
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 mt-2 text-sm sm:text-base">
                        Everything you need to plan, track, and achieve your strength and physique goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit mb-4">
                                <FaDumbbell className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Training Plans</h3>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> AI-generated workouts</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> Personalized to goals</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> Adaptive progression</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit mb-4">
                                <FaUtensils className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Nutrition Plans</h3>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> AI-based meal plans</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> Goal-focused macros</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> Easy to follow recipes</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit mb-4">
                                <FaClipboardList className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Training Logs</h3>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> Log workouts & meals</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> AI performance analysis</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> Real-time recommendations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit mb-4">
                                <FaBookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Fitness Articles</h3>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> Expert insights & science</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> Training & nutrition guides</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-emerald-500 w-3 h-3 shrink-0" /> Regular updates</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final Banner CTA */}
                <div className="bg-emerald-600 dark:bg-emerald-600/90 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
                    <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                        Ready To Transform Your Training?
                    </h3>
                    <p className="text-emerald-100 max-w-xl mx-auto text-sm sm:text-base">
                        Start generating personalized workouts and macro plans in under 60 seconds.
                    </p>
                    <div>
                        <Link to="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-950 hover:bg-zinc-900 text-white font-bold rounded-2xl transition-all shadow-lg active:scale-95">
                            <span>Get Started Now</span>
                            <FaArrowRight className="w-4 h-4 text-emerald-400" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage
