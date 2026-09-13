import { useEffect } from 'react'
import useTrainingLogs from '../hooks/useTrainingLogs'
import { Link } from 'react-router-dom'
import { FaClipboardList, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { FiPlusCircle } from 'react-icons/fi'

const TrainingLogComponent = () => {
    const { getAllTrainingLogs, allTrainingLogs } = useTrainingLogs()

    useEffect(() => {
        getAllTrainingLogs()
    }, [])

    if (!allTrainingLogs.length) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center my-10">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-lg space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                        <FaClipboardList className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        No Training Logs Found
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        You haven't recorded any workout logs yet.
                    </p>
                    <Link to="/my-journey">
                        <button className="w-full mt-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2">
                            <FiPlusCircle className="w-4 h-4" />
                            <span>Log Workout Session</span>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8 pb-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
                            <FaClipboardList className="w-5 h-5" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            My Workout Logs
                        </h1>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
                        View historical training summaries and AI coach performance analysis.
                    </p>
                </div>
                <Link to="/my-journey">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer">
                        <FiPlusCircle className="w-4 h-4" />
                        <span>Log Session</span>
                    </button>
                </Link>
            </div>

            {/* Logs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allTrainingLogs.map((log) => (
                    <div 
                        key={log.id}
                        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    Workout Log
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
                                    <FaCalendarAlt className="w-3 h-3" />
                                    {log.createdAt.slice(0, 10)}
                                </span>
                            </div>

                            <p className="text-sm text-slate-700 dark:text-zinc-300 line-clamp-4 italic bg-slate-50 dark:bg-zinc-800/40 p-3.5 rounded-2xl border border-slate-100 dark:border-zinc-800">
                                "{log.workoutSummary}"
                            </p>
                        </div>

                        <Link to={`/training-logs/${log.id}`}>
                            <button className="w-full py-3 px-4 bg-slate-900 dark:bg-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white dark:text-zinc-900 font-semibold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                                <span>View Log & AI Feedback</span>
                                <FaArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrainingLogComponent
