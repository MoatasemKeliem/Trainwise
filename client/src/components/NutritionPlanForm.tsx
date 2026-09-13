import { useState, type FormEvent } from "react"
import type { INutritionPlan } from "../model/IPlans"
import { gender, level, goal, style, dietaryPreferences, activityLevel } from "../utils"
import useGenerate from "../hooks/useGenerate"
import { FaUtensils } from "react-icons/fa"
import { FiCheckCircle } from "react-icons/fi"

const NutritionPlanForm = () => {
    const { generateNutritionPlan } = useGenerate()
    const [loading, setLoading] = useState(false)
    const [createNutrition, setCreateNutrition] = useState<INutritionPlan>({
        gender: "male",
        age: 18,
        heightCm: 160,
        weightKg: 80,
        title: "",
        experienceLevel: "beginner",
        goal: "general_fitness",
        workoutDaysPerWeek: 3,
        style: "mixed",
        mealsPerDay: 3,
        dietaryPreferences: "",
        allergies: "",
        activetyLevel: "light"
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setLoading(true)
        try {
            await generateNutritionPlan(createNutrition)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-xl">
                <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Calculating Macro Targets & Meals</h2>
                <p className="text-sm text-slate-500 dark:text-zinc-400 mt-2 max-w-sm">
                    Customizing meal timings, daily caloric breakdown, and snack suggestions...
                </p>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-8">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200 dark:border-zinc-800">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                    <FaUtensils className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Create AI Nutrition Plan
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Configure your dietary goals and daily macro preferences.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Title */}
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                        Plan Title *
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={createNutrition.title}
                        onChange={(e) => setCreateNutrition({ ...createNutrition, title: e.target.value })}
                        placeholder="e.g. Lean Muscle Gain Meal Plan"
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                </div>

                {/* Gender */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Gender
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                        {gender.map((option) => {
                            const isChecked = createNutrition.gender === option.value
                            return (
                                <label
                                    key={option.value}
                                    className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border text-sm font-semibold cursor-pointer transition-all ${
                                        isChecked
                                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/30"
                                            : "bg-slate-50 dark:bg-zinc-800/60 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={() => setCreateNutrition({ ...createNutrition, gender: option.value })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Age, Height, Weight */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Age
                        </label>
                        <input
                            type="number"
                            min={1}
                            name="age"
                            value={createNutrition.age}
                            onChange={(e) => setCreateNutrition({ ...createNutrition, age: Number(e.target.value) })}
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Height (CM)
                        </label>
                        <input
                            type="number"
                            min={1}
                            name="heightCm"
                            value={createNutrition.heightCm}
                            onChange={(e) => setCreateNutrition({ ...createNutrition, heightCm: Number(e.target.value) })}
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Weight (KG)
                        </label>
                        <input
                            type="number"
                            min={1}
                            name="weightKg"
                            value={createNutrition.weightKg}
                            onChange={(e) => setCreateNutrition({ ...createNutrition, weightKg: Number(e.target.value) })}
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        />
                    </div>
                </div>

                {/* Experience Level */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Experience Level
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {level.map((option) => {
                            const isChecked = createNutrition.experienceLevel === option.value
                            return (
                                <label
                                    key={option.value}
                                    className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border text-sm font-semibold cursor-pointer transition-all ${
                                        isChecked
                                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/30"
                                            : "bg-slate-50 dark:bg-zinc-800/60 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="experienceLevel"
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={() => setCreateNutrition({ ...createNutrition, experienceLevel: option.value as INutritionPlan["experienceLevel"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Goal */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Primary Goal
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {goal.map((option) => {
                            const isChecked = createNutrition.goal === option.value
                            return (
                                <label
                                    key={option.value}
                                    className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border text-sm font-semibold cursor-pointer transition-all ${
                                        isChecked
                                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/30"
                                            : "bg-slate-50 dark:bg-zinc-800/60 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="goal"
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={() => setCreateNutrition({ ...createNutrition, goal: option.value as INutritionPlan["goal"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Workout Days & Meals Per Day Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Workout Days Per Week
                        </label>
                        <input
                            type="number"
                            min={1}
                            max={7}
                            name="workoutDaysPerWeek"
                            value={createNutrition.workoutDaysPerWeek}
                            onChange={(e) => setCreateNutrition({ ...createNutrition, workoutDaysPerWeek: Number(e.target.value) })}
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Meals Per Day (Optional)
                        </label>
                        <input
                            type="number"
                            min={1}
                            max={7}
                            name="mealsPerDay"
                            value={createNutrition.mealsPerDay}
                            onChange={(e) => setCreateNutrition({ ...createNutrition, mealsPerDay: Number(e.target.value) })}
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        />
                    </div>
                </div>

                {/* Style */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Style (Optional)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {style.map((option) => {
                            const isChecked = createNutrition.style === option.value
                            return (
                                <label
                                    key={option.value}
                                    className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border text-sm font-semibold cursor-pointer transition-all ${
                                        isChecked
                                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/30"
                                            : "bg-slate-50 dark:bg-zinc-800/60 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="style"
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={() => setCreateNutrition({ ...createNutrition, style: option.value as INutritionPlan["style"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Activity Level */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Daily Activity Level
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {activityLevel.map((option) => {
                            const isChecked = createNutrition.activetyLevel === option.value
                            return (
                                <label
                                    key={option.value}
                                    className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border text-sm font-semibold cursor-pointer transition-all ${
                                        isChecked
                                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/30"
                                            : "bg-slate-50 dark:bg-zinc-800/60 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="activetyLevel"
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={() => setCreateNutrition({ ...createNutrition, activetyLevel: option.value as INutritionPlan["activetyLevel"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Dietary Restrictions */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Dietary Preferences / Restrictions
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {dietaryPreferences.map((option) => {
                            const isChecked = createNutrition.dietaryPreferences === option.value
                            return (
                                <label
                                    key={option.value}
                                    className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                                        isChecked
                                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/30"
                                            : "bg-slate-50 dark:bg-zinc-800/60 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="dietaryPreferences"
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={() => setCreateNutrition({ ...createNutrition, dietaryPreferences: option.value as INutritionPlan["dietaryPreferences"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-base">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Allergies */}
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                        Food Allergies or Intolerances (Optional)
                    </label>
                    <input
                        type="text"
                        name="allergies"
                        value={createNutrition.allergies}
                        onChange={(e) => setCreateNutrition({ ...createNutrition, allergies: e.target.value })}
                        placeholder="e.g. Peanuts, Dairy, Shellfish..."
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 text-base"
                >
                    <FiCheckCircle className="w-5 h-5" />
                    <span>Generate Nutrition Plan</span>
                </button>
            </form>
        </div>
    )
}

export default NutritionPlanForm
