import { useEffect } from 'react'
import useNutritionPlanAdmin from '../../hooks/Admin/useNutritionPlanAdmin'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa'

const AdminNutritionPlanCMS = () => {
    const { getAllNutritionPlanAdmin, allNutritionPlansAdmin } = useNutritionPlanAdmin()

    useEffect(() => {
        getAllNutritionPlanAdmin()
    }, [])

    if (!allNutritionPlansAdmin || !allNutritionPlansAdmin.length) {
        return (
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 text-center text-slate-500 dark:text-zinc-400 font-medium">
                No user nutrition plans found in database.
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white px-2">
                User Nutrition Plans ({allNutritionPlansAdmin.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allNutritionPlansAdmin.map((plan) => (
                    <div 
                        key={plan.id}
                        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-purple-500/40 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400">
                                    Nutrition Plan
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
                                    <FaCalendarAlt className="w-3 h-3" />
                                    {plan.createdAt?.slice(0, 10)}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                                {plan.title}
                            </h3>

                            <div className="p-3 bg-slate-50 dark:bg-zinc-800/40 rounded-2xl border border-slate-100 dark:border-zinc-800 space-y-1 text-xs text-slate-600 dark:text-zinc-300">
                                <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                                    <FaUser className="w-3 h-3 text-purple-500" />
                                    {plan.user?.name}
                                </p>
                                <p className="text-slate-500 dark:text-zinc-400 truncate">{plan.user?.email}</p>
                            </div>
                        </div>

                        <Link to={`/admin-nutrition-Plan/${plan.id}`}>
                            <button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                                <span>Inspect Nutrition Plan</span>
                                <FaArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminNutritionPlanCMS
