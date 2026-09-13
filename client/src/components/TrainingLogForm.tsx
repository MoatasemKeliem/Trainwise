import { useState, type FormEvent } from 'react'
import type { ITrainingLog } from '../model/IPlans'
import useGenerate from '../hooks/useGenerate'
import { FaClipboardList } from 'react-icons/fa'
import { FiCheckCircle } from 'react-icons/fi'

const TrainingLogForm = () => {
    const { generateTrainingLog } = useGenerate()
    const [loading, setLoading] = useState(false)
    const [createTrainingLog, setCreateTrainingLog] = useState<ITrainingLog>({
        workoutSummary: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await generateTrainingLog(createTrainingLog)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-xl">
                <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Analyzing Workout Performance</h2>
                <p className="text-sm text-slate-500 dark:text-zinc-400 mt-2 max-w-sm">
                    Evaluating exercise intensity, volume output, and generating AI coach feedback...
                </p>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-8">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200 dark:border-zinc-800">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                    <FaClipboardList className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Log Workout Session
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Record what you performed today to get instant AI coach feedback & breakdown.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                        Workout & Meal Summary *
                    </label>
                    <textarea
                        name="workoutSummary"
                        rows={6}
                        value={createTrainingLog.workoutSummary}
                        onChange={(e) => setCreateTrainingLog({ ...createTrainingLog, workoutSummary: e.target.value })}
                        placeholder="e.g. Bench press 4x8 @ 80kg, Incline dumbbell press 3x10 @ 28kg, Tricep pushdowns 4x12. Felt strong on bench today!"
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-y"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 text-base"
                >
                    <FiCheckCircle className="w-5 h-5" />
                    <span>Submit Log & Get AI Feedback</span>
                </button>
            </form>
        </div>
    )
}

export default TrainingLogForm
