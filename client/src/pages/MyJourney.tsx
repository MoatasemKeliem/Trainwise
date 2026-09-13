import { useState } from "react"
import NutritionPlanForm from "../components/NutritionPlanForm"
import TrainingPlanForm from "../components/TrainingPlanForm"
import TrainingLogForm from "../components/TrainingLogForm"
import { FaDumbbell, FaUtensils, FaClipboardList } from "react-icons/fa"

const MyJourney = () => {
    const [plan, setPlan] = useState("training-plan")

    return (
        <div className="space-y-8 pb-12">
            {/* Header Title */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    AI Creator Studio
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Build Your Custom Journey
                </h1>
                <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400">
                    Select a tool below to generate workouts, custom macros, or record your training performance.
                </p>
            </div>

            {/* Tab Controller Pills */}
            <div className="flex items-center justify-center">
                <div className="inline-flex items-center gap-1.5 p-1.5 bg-slate-200/80 dark:bg-zinc-900 border border-slate-300/60 dark:border-zinc-800 rounded-2xl max-w-full overflow-x-auto">
                    <button
                        type="button"
                        onClick={() => setPlan("training-plan")}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                            plan === "training-plan"
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <FaDumbbell className="w-4 h-4" />
                        <span>Training Plan</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setPlan("nutrition-plan")}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                            plan === "nutrition-plan"
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <FaUtensils className="w-4 h-4" />
                        <span>Nutrition Plan</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setPlan("training-log")}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                            plan === "training-log"
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <FaClipboardList className="w-4 h-4" />
                        <span>Training Log</span>
                    </button>
                </div>
            </div>

            {/* Active Creator Component */}
            <div className="max-w-4xl mx-auto">
                {plan === "training-plan" ? (
                    <TrainingPlanForm />
                ) : plan === "nutrition-plan" ? (
                    <NutritionPlanForm />
                ) : plan === "training-log" ? (
                    <TrainingLogForm />
                ) : (
                    <TrainingPlanForm />
                )}
            </div>
        </div>
    )
}

export default MyJourney
