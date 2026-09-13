import { useState, type FormEvent } from "react"
import type { ITrainingPlan } from "../model/IPlans"
import { gender, goal, level, preferredWorkoutType, style } from "../utils"
import useGenerate from "../hooks/useGenerate"
import { FaDumbbell } from "react-icons/fa"
import { FiCheckCircle } from "react-icons/fi"

const TrainingPlanForm = () => {
    const { generateTrainingPlan } = useGenerate()
    const [loading, setLoading] = useState(false)
    const [createTraining, setCreateTraining] = useState<ITrainingPlan>({
        gender: "male",
        age: 18,
        heightCm: 160,
        weightKg: 80,
        title: "",
        experienceLevel: "beginner",
        goal: "general_fitness",
        workoutDaysPerWeek: 3,
        preferredWorkoutType: "mixed",
        style: "mixed",
        injuries: "",
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await generateTrainingPlan(createTraining)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-xl">
                <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Generating AI Training Plan</h2>
                <p className="text-sm text-slate-500 dark:text-zinc-400 mt-2 max-w-sm">
                    Analyzing target metrics, exercise volume, and optimal recovery schedules...
                </p>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-8">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200 dark:border-zinc-800">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                    <FaDumbbell className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Create AI Training Plan
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Fill out your fitness profile to receive a tailored routine.
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
                        value={createTraining.title}
                        onChange={(e) => setCreateTraining({ ...createTraining, title: e.target.value })}
                        placeholder="e.g. 12-Week Hypertrophy Routine"
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                </div>

                {/* Gender Chip Selector */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Gender
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                        {gender.map((option) => {
                            const isChecked = createTraining.gender === option.value
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
                                        onChange={() => setCreateTraining({ ...createTraining, gender: option.value })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Age, Height, Weight Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Age
                        </label>
                        <input
                            type="number"
                            min={1}
                            name="age"
                            value={createTraining.age}
                            onChange={(e) => setCreateTraining({ ...createTraining, age: Number(e.target.value) })}
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
                            value={createTraining.heightCm}
                            onChange={(e) => setCreateTraining({ ...createTraining, heightCm: Number(e.target.value) })}
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
                            value={createTraining.weightKg}
                            onChange={(e) => setCreateTraining({ ...createTraining, weightKg: Number(e.target.value) })}
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
                            const isChecked = createTraining.experienceLevel === option.value
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
                                        onChange={() => setCreateTraining({ ...createTraining, experienceLevel: option.value as ITrainingPlan["experienceLevel"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Primary Goal */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Primary Goal
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {goal.map((option) => {
                            const isChecked = createTraining.goal === option.value
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
                                        onChange={() => setCreateTraining({ ...createTraining, goal: option.value as ITrainingPlan["goal"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Available Days Per Week */}
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                        Available Workout Days Per Week
                    </label>
                    <input
                        type="number"
                        min={1}
                        max={7}
                        name="workoutDaysPerWeek"
                        value={createTraining.workoutDaysPerWeek}
                        onChange={(e) => setCreateTraining({ ...createTraining, workoutDaysPerWeek: Number(e.target.value) })}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                </div>

                {/* Preferred Workout Type */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Preferred Workout Environment
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                        {preferredWorkoutType.map((option) => {
                            const isChecked = createTraining.preferredWorkoutType === option.value
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
                                        name="preferredWorkoutType"
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={() => setCreateTraining({ ...createTraining, preferredWorkoutType: option.value as ITrainingPlan["preferredWorkoutType"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Style */}
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Training Style (Optional)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {style.map((option) => {
                            const isChecked = createTraining.style === option.value
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
                                        onChange={() => setCreateTraining({ ...createTraining, style: option.value as ITrainingPlan["style"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-lg">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                {/* Injuries */}
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                        Injuries or Physical Restrictions (Optional)
                    </label>
                    <input
                        type="text"
                        name="injuries"
                        value={createTraining.injuries}
                        onChange={(e) => setCreateTraining({ ...createTraining, injuries: e.target.value })}
                        placeholder="e.g. Lower back pain, shoulder impingement..."
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 text-base"
                >
                    <FiCheckCircle className="w-5 h-5" />
                    <span>Generate Training Plan</span>
                </button>
            </form>
        </div>
    )
}

export default TrainingPlanForm
