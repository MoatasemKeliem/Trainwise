import { useParams, Link } from "react-router-dom"
import useNutritionPlanAdmin from "../../hooks/Admin/useNutritionPlanAdmin"
import { useEffect } from "react"
import { ImSad2 } from "react-icons/im"
import { FaUtensils, FaCalendarAlt, FaTrashAlt, FaArrowLeft, FaCookie, FaGlassMartiniAlt, FaLightbulb, FaSmile, FaShieldAlt } from "react-icons/fa"

const AdminSingleNutritionPlan = () => {
    const { getNutritionPlanByIdAdmin, nutritionPlansByIdAdmin, deleteNutritionPlanByIdAdmin } = useNutritionPlanAdmin()
    const { id } = useParams()

    useEffect(() => {
        if (!id) return
        getNutritionPlanByIdAdmin(id)
    }, [id])

    if (!nutritionPlansByIdAdmin) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center my-10">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-lg space-y-4">
                    <ImSad2 className="w-12 h-12 text-purple-500 mx-auto" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Nutrition Plan Not Found
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Couldn't locate this nutrition plan in admin system.
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

    const { meals } = nutritionPlansByIdAdmin
    const weekPlan = Object.entries(meals || {}).filter(([weeks]) => weeks.startsWith("week"))

    const dailyEstimates = meals?.daily_estimates || {
        calories: 0,
        macros: { protein: 0, carbs: 0, fat: 0 }
    }

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
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
                                    ADMIN NUTRITION INSPECTION
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                                    {nutritionPlansByIdAdmin.title}
                                </h1>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 flex items-center gap-2 pt-1">
                            <FaCalendarAlt className="w-3.5 h-3.5 text-purple-500" />
                            <span>Created on {nutritionPlansByIdAdmin.createdAt?.slice(0, 10)}</span>
                        </p>
                    </div>

                    <button
                        onClick={() => { deleteNutritionPlanByIdAdmin(String(id)) }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 dark:bg-red-950/40 hover:bg-red-500 hover:text-white text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-xs shrink-0"
                    >
                        <FaTrashAlt className="w-3.5 h-3.5" />
                        <span>Delete Nutrition Plan</span>
                    </button>
                </div>
            </div>

            {/* Daily Macro Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-zinc-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-zinc-800 space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                    Daily Macro Estimates
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    <div className="bg-zinc-800/60 p-4 rounded-2xl border border-zinc-700/60">
                        <p className="text-xs text-zinc-400">Calories</p>
                        <p className="text-2xl font-black text-white mt-1">{dailyEstimates.calories} <span className="text-xs font-normal text-zinc-400">kcal</span></p>
                    </div>
                    <div className="bg-zinc-800/60 p-4 rounded-2xl border border-zinc-700/60">
                        <p className="text-xs text-emerald-400 font-semibold">Protein</p>
                        <p className="text-2xl font-black text-white mt-1">{dailyEstimates.macros?.protein} <span className="text-xs font-normal text-zinc-400">g</span></p>
                    </div>
                    <div className="bg-zinc-800/60 p-4 rounded-2xl border border-zinc-700/60">
                        <p className="text-xs text-amber-400 font-semibold">Carbs</p>
                        <p className="text-2xl font-black text-white mt-1">{dailyEstimates.macros?.carbs} <span className="text-xs font-normal text-zinc-400">g</span></p>
                    </div>
                    <div className="bg-zinc-800/60 p-4 rounded-2xl border border-zinc-700/60">
                        <p className="text-xs text-blue-400 font-semibold">Fat</p>
                        <p className="text-2xl font-black text-white mt-1">{dailyEstimates.macros?.fat} <span className="text-xs font-normal text-zinc-400">g</span></p>
                    </div>
                </div>
            </div>

            {/* Weekly Breakdown */}
            <div className="space-y-8">
                {weekPlan.map(([weekNumber, weekData]) => (
                    <div key={weekNumber} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-1.5 rounded-xl bg-purple-600 text-white font-extrabold text-sm uppercase tracking-wider">
                                {weekNumber}
                            </span>
                            <div className="h-px bg-slate-200 dark:border-zinc-800 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(weekData as any).map(([day, dayMeals]) => (
                                <div
                                    key={day}
                                    className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm space-y-4"
                                >
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-zinc-800 capitalize flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                                        {day}
                                    </h3>

                                    <div className="space-y-4">
                                        {(dayMeals as any[]).map((meal, idx) => (
                                            <div
                                                key={idx}
                                                className="p-4 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-100 dark:border-zinc-800 space-y-2 text-sm"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                                                        {meal.meal}
                                                    </h4>
                                                    {meal.calories && (
                                                        <span className="px-2.5 py-0.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs">
                                                            {meal.calories} kcal
                                                        </span>
                                                    )}
                                                </div>

                                                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-zinc-300 space-y-1">
                                                    {meal.items?.map((item: string, itemIdx: number) => (
                                                        <li key={itemIdx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
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

export default AdminSingleNutritionPlan
