import { useNavigate, useParams, Link } from "react-router-dom"
import useTrainingLogs from "../hooks/useTrainingLogs"
import { useEffect } from "react"
import { ImSad2 } from "react-icons/im"
import { FaClipboardList, FaCalendarAlt, FaTrashAlt, FaArrowLeft, FaRobot } from "react-icons/fa"

const SingleTrainingLog = () => {
    const { getTrainingLogById, trainingLogById, deleteTrainingLogById } = useTrainingLogs()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) return
        getTrainingLogById(String(id))
    }, [id])

    if (!trainingLogById) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center my-10">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-lg space-y-4">
                    <ImSad2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Training Log Not Found
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Couldn't locate this training log. Please try logging a new session.
                    </p>
                    <Link to="/training-logs">
                        <button className="w-full mt-2 py-3 px-4 bg-emerald-600 text-white font-semibold text-sm rounded-xl transition-all shadow-sm">
                            Back to Training Logs
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8 pb-12 max-w-4xl mx-auto">
            {/* Back link & Header */}
            <div className="space-y-4">
                <Link to="/training-logs" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
                    <FaArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Training Logs</span>
                </Link>

                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                                <FaClipboardList className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                    LOGGED SESSION
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                                    Workout Log Entry
                                </h1>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 flex items-center gap-2 pt-1">
                            <FaCalendarAlt className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Logged on {trainingLogById.createdAt?.slice(0, 10)}</span>
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            deleteTrainingLogById(String(id));
                            navigate("/training-logs");
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 dark:bg-red-950/40 hover:bg-red-500 hover:text-white text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-xs shrink-0"
                    >
                        <FaTrashAlt className="w-3.5 h-3.5" />
                        <span>Delete Log</span>
                    </button>
                </div>
            </div>

            {/* Workout Summary Card */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    Logged Workout & Nutrition Summary
                </h2>
                <div className="p-5 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-100 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {trainingLogById.workoutSummary}
                </div>
            </div>

            {/* AI Feedback Card */}
            <div className="bg-gradient-to-br from-emerald-950/30 via-zinc-900 to-zinc-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-500 text-slate-950 rounded-2xl shadow-md">
                        <FaRobot className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            AI COACH ANALYSIS & FEEDBACK
                        </span>
                        <h2 className="text-xl font-extrabold text-white tracking-tight mt-1">
                            Performance Insights
                        </h2>
                    </div>
                </div>

                <div className="p-5 bg-zinc-950/80 rounded-2xl border border-zinc-800 text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {trainingLogById.aiFeedback}
                </div>
            </div>
        </div>
    )
}

export default SingleTrainingLog
