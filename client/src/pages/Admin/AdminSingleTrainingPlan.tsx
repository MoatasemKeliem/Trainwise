import { useParams, Link } from "react-router-dom"
import useTrainingPlanAdmin from "../../hooks/Admin/useTrainingPlanAdmin"
import { useEffect } from "react"
import { ImSad2 } from "react-icons/im"
import { FaDumbbell, FaCalendarAlt, FaTrashAlt, FaFire, FaQuoteLeft, FaAppleAlt, FaArrowLeft, FaShieldAlt } from "react-icons/fa"

const AdminSingleTrainingPlan = () => {
    const { id } = useParams()
    const { trainingPlansByIdAdmin, getTrainingPlansByIdAdmin, deleteTrainingPlansByIdAdmin } = useTrainingPlanAdmin()

    useEffect(() => {
        if (!id) return
        getTrainingPlansByIdAdmin(id)
    }, [id])

    if (!trainingPlansByIdAdmin) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center my-10">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-lg space-y-4">
                    <ImSad2 className="w-12 h-12 text-purple-500 mx-auto" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Training Plan Not Found
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Couldn't locate this training plan in admin system.
                    </p>
                    <Link to="/admin">
                        <button className="w-full mt-2 py-3 px-4 bg-purple-600 text-white font-semibold text-sm rounded-xl transition-all shadow-sm">
                            Back to Admin Dashboard
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    const { trainingPlan } = trainingPlansByIdAdmin

    return (
        <div className="space-y-8 pb-12">
            {/* Back & Header */}
            <div className="space-y-4">
                <Link to="/admin" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-purple-500 transition-colors">
                    <FaArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Admin Dashboard</span>
                </Link>

                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl">
                                <FaShieldAlt className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                                    ADMIN INSPECTION VIEW
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                                    {trainingPlan?.title}
                                </h1>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 flex items-center gap-2 pt-1">
                            <FaCalendarAlt className="w-3.5 h-3.5 text-purple-500" />
                            <span>Created on {trainingPlan?.createdAt?.slice(0, 10)}</span>
                        </p>
                    </div>

                    <button
                        onClick={() => { deleteTrainingPlansByIdAdmin(String(id)) }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 dark:bg-red-950/40 hover:bg-red-500 hover:text-white text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-xs shrink-0"
                    >
                        <FaTrashAlt className="w-3.5 h-3.5" />
                        <span>Delete Plan (Admin)</span>
                    </button>
                </div>
            </div>

            {/* Weeks & Days Schedule */}
            <div className="space-y-8">
                {trainingPlan?.plan?.map((weekItem) => (
                    <div key={weekItem.week} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-1.5 rounded-xl bg-purple-600 text-white font-extrabold text-sm uppercase tracking-wider">
                                {weekItem.week}
                            </span>
                            <div className="h-px bg-slate-200 dark:border-zinc-800 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {weekItem.days.map((dayItem) => (
                                <div
                                    key={dayItem.day}
                                    className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                                                {dayItem.day}
                                            </h3>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
                                                {dayItem.exercises?.length > 0 ? `${dayItem.exercises.length} Exercises` : "Rest Day"}
                                            </span>
                                        </div>

                                        {dayItem.exercises?.length > 0 ? (
                                            <div className="space-y-2.5">
                                                {dayItem.exercises.map((exercise, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center justify-between p-3 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-100 dark:border-zinc-800 text-sm"
                                                    >
                                                        <span className="font-semibold text-slate-900 dark:text-zinc-100">
                                                            {exercise.name}
                                                        </span>
                                                        <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs">
                                                            {exercise.sets} sets × {exercise.reps} reps
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/30 text-center text-xs text-slate-500 dark:text-zinc-400">
                                                Rest Day
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800 text-xs">
                                        {dayItem.caloriesBurned && (
                                            <div className="flex items-center gap-2 p-2.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl font-medium">
                                                <FaFire className="w-4 h-4 shrink-0" />
                                                <span>Est. Calories Burned: <strong>{dayItem.caloriesBurned} kcal</strong></span>
                                            </div>
                                        )}
                                        {dayItem.motivation && (
                                            <div className="flex items-start gap-2 p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl font-medium leading-relaxed">
                                                <FaQuoteLeft className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                                <span>{dayItem.motivation}</span>
                                            </div>
                                        )}
                                        {dayItem.nutritionTips && (
                                            <div className="flex items-start gap-2 p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl font-medium leading-relaxed">
                                                <FaAppleAlt className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                                <span>{dayItem.nutritionTips}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminSingleTrainingPlan
