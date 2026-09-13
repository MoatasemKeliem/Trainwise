import { useEffect } from 'react'
import useTrainingPlan from '../hooks/useTrainingPlan'
import useNutrition from '../hooks/useNutrition';
import useTrainingLogs from '../hooks/useTrainingLogs';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaUtensils, FaClipboardList, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';

const RenderPlansDashboard = () => {
    const { getAllTrainingPlans, allTrainingPlans } = useTrainingPlan();
    const { getAllNutritionPlans, allNutrition } = useNutrition();
    const { getAllTrainingLogs, allTrainingLogs } = useTrainingLogs();

    useEffect(() => {
        getAllTrainingPlans()
        getAllNutritionPlans()
        getAllTrainingLogs()
    }, [])

    const trainingPlan = allTrainingPlans[0]
    const nutritionPlan = allNutrition[0]
    const trainingLog = allTrainingLogs[0]

    if (!trainingLog && !nutritionPlan && !trainingPlan) {
        return (
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <FiPlusCircle className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    No Plans or Logs Created Yet
                </h2>
                <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-md mx-auto">
                    Get started by generating your first AI training plan, custom nutrition program, or workout log.
                </p>
                <div>
                    <Link to="/my-journey" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm">
                        <span>Start My Journey</span>
                        <FaArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Your Latest Overview
                </h2>
                <Link to="/my-journey" className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
                    <span>Create New</span>
                    <FaArrowRight className="w-3 h-3" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Latest Training Plan */}
                {trainingPlan ? (
                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                                    <FaDumbbell className="w-5 h-5" />
                                </div>
                                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
                                    <FaCalendarAlt className="w-3 h-3" />
                                    {trainingPlan?.createdAt?.slice(0, 10)}
                                </span>
                            </div>
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 uppercase tracking-wider">
                                Training Routine
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2">
                                {trainingPlan?.title}
                            </h3>
                        </div>

                        <Link to={`/training-plans/${trainingPlan?.id}`}>
                            <button className="w-full py-2.5 px-4 bg-slate-100 dark:bg-zinc-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-zinc-200 font-semibold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                                <span>View Training Plan</span>
                                <FaArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="bg-slate-50 dark:bg-zinc-900/50 border border-dashed border-slate-200 dark:border-zinc-800 rounded-3xl p-6 text-center flex flex-col items-center justify-center space-y-3">
                        <FaDumbbell className="w-6 h-6 text-slate-400" />
                        <p className="text-xs text-slate-500">No training plan active</p>
                        <Link to="/my-journey" className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                            + Create Training Plan
                        </Link>
                    </div>
                )}

                {/* Latest Nutrition Plan */}
                {nutritionPlan ? (
                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                                    <FaUtensils className="w-5 h-5" />
                                </div>
                                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
                                    <FaCalendarAlt className="w-3 h-3" />
                                    {nutritionPlan?.createdAt?.slice(0, 10)}
                                </span>
                            </div>
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 uppercase tracking-wider">
                                Nutrition Guide
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2">
                                {nutritionPlan?.title}
                            </h3>
                        </div>

                        <Link to={`/nutritions/${nutritionPlan?.id}`}>
                            <button className="w-full py-2.5 px-4 bg-slate-100 dark:bg-zinc-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-zinc-200 font-semibold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                                <span>View Nutrition Plan</span>
                                <FaArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="bg-slate-50 dark:bg-zinc-900/50 border border-dashed border-slate-200 dark:border-zinc-800 rounded-3xl p-6 text-center flex flex-col items-center justify-center space-y-3">
                        <FaUtensils className="w-6 h-6 text-slate-400" />
                        <p className="text-xs text-slate-500">No nutrition plan created</p>
                        <Link to="/my-journey" className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                            + Create Nutrition Plan
                        </Link>
                    </div>
                )}

                {/* Latest Training Log */}
                {trainingLog ? (
                    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                                    <FaClipboardList className="w-5 h-5" />
                                </div>
                                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
                                    <FaCalendarAlt className="w-3 h-3" />
                                    {trainingLog?.createdAt?.slice(0, 10)}
                                </span>
                            </div>
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 uppercase tracking-wider">
                                Workout Log Entry
                            </span>
                            <p className="text-sm text-slate-600 dark:text-zinc-300 line-clamp-3 italic">
                                "{trainingLog?.workoutSummary}"
                            </p>
                        </div>

                        <Link to={`/training-logs/${trainingLog?.id}`}>
                            <button className="w-full py-2.5 px-4 bg-slate-100 dark:bg-zinc-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-zinc-200 font-semibold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                                <span>View Training Log</span>
                                <FaArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="bg-slate-50 dark:bg-zinc-900/50 border border-dashed border-slate-200 dark:border-zinc-800 rounded-3xl p-6 text-center flex flex-col items-center justify-center space-y-3">
                        <FaClipboardList className="w-6 h-6 text-slate-400" />
                        <p className="text-xs text-slate-500">No workout logs recorded</p>
                        <Link to="/my-journey" className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                            + Log Workout Session
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RenderPlansDashboard
