import { FaDumbbell, FaBrain, FaChartLine, FaBookOpen } from "react-icons/fa"

const About = () => {
    return (
        <div className="space-y-12 py-6 sm:py-10 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    About Trainwise
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                    Making Fitness Smarter & Accessible
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    Combining athletic training science with artificial intelligence to deliver truly personalized coaching for everyone.
                </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
                <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Trainwise was created to eliminate guesswork from fitness. By analyzing your unique goals, available equipment, experience level, and physical requirements, Trainwise crafts personalized training routines and macro-focused nutrition plans tailored specifically to you.
                </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight text-center">
                    What You Can Achieve With Trainwise
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex items-start gap-4">
                        <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                            <FaBrain className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-base">AI Training & Nutrition Plans</h3>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
                                Tailored exercise splits and meal targets generated in seconds.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex items-start gap-4">
                        <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                            <FaChartLine className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-base">Progress & Log Tracking</h3>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
                                Record daily workouts and nutrition summaries to evaluate performance.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex items-start gap-4">
                        <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                            <FaDumbbell className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-base">Instant AI Coach Feedback</h3>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
                                Receive real-time recommendations and recovery insights after every log.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex items-start gap-4">
                        <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                            <FaBookOpen className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-base">Expert Educational Articles</h3>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
                                Learn from exercise science guides and nutritional breakdowns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="bg-emerald-600 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
                <h2 className="text-2xl font-extrabold">Train Smarter, Stay Consistent</h2>
                <p className="text-emerald-100 text-sm max-w-xl mx-auto">
                    We believe fitness should be personalized, structured, and motivating. Our goal is to empower every athlete to reach their peak potential.
                </p>
            </div>
        </div>
    )
}

export default About
