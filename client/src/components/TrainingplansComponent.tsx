import { useEffect } from 'react'
import useTrainingPlan from '../hooks/useTrainingPlan'
import { Link } from 'react-router-dom'
import { FaDumbbell, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { FiPlusCircle } from 'react-icons/fi'

const TrainingplansComponent = () => {
    const { getAllTrainingPlans, allTrainingPlans } = useTrainingPlan()

    useEffect(() => {
        getAllTrainingPlans()
    }, [])

    if (!allTrainingPlans.length) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center my-10">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-lg space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                        <FaDumbbell className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        No Training Plans Found
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        You haven't generated any AI training routines yet.
                    </p>
                    <Link to="/my-journey">
                        <button className="w-full mt-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2">
                            <FiPlusCircle className="w-4 h-4" />
                            <span>Generate Training Plan</span>
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
                            <FaDumbbell className="w-5 h-5" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            My Training Plans
                        </h1>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
                        View and manage your custom AI-generated workout routines.
                    </p>
                </div>
                <Link to="/my-journey">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer">
                        <FiPlusCircle className="w-4 h-4" />
                        <span>Create New Plan</span>
                    </button>
                </Link>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allTrainingPlans.map((plan) => (
                    <div 
                        key={plan.id}
                        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    Training Routine
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
                                    <FaCalendarAlt className="w-3 h-3" />
                                    {plan.createdAt.slice(0, 10)}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                                {plan.title}
                            </h2>
                        </div>

                        <Link to={`/training-plans/${plan.id}`}>
                            <button className="w-full py-3 px-4 bg-slate-900 dark:bg-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white dark:text-zinc-900 font-semibold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                                <span>View Workout Schedule</span>
                                <FaArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrainingplansComponent
