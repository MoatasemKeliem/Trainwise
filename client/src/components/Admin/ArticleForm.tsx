import { useState, type FormEvent } from 'react'
import { articleCaetgory } from '../../utils'
import type { IArticleAdmin } from '../../model/Admin/IArticleAdmin'
import useArticleAdmin from '../../hooks/Admin/useArticleAdmin'
import { FiBookOpen, FiCheckCircle } from 'react-icons/fi'

const ArticleForm = () => {
    const [createArticle, setCreateArticle] = useState<IArticleAdmin>({
        title: "",
        category: "general_fitness"
    })
    const { generateArticle } = useArticleAdmin()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await generateArticle(createArticle)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-xl">
                <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Generating AI Fitness Article</h2>
                <p className="text-sm text-slate-500 dark:text-zinc-400 mt-2 max-w-sm">
                    Drafting research-backed sections, headings, and expert tips...
                </p>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200 dark:border-zinc-800">
                <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl">
                    <FiBookOpen className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Create AI Article
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Generate expert fitness, nutrition, and exercise publications for subscribers.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                        Article Topic / Title *
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={createArticle.title}
                        onChange={(e) => setCreateArticle({ ...createArticle, title: e.target.value })}
                        placeholder="e.g. Optimal Protein Distribution for Muscle Growth"
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                </div>

                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                        Article Category
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {articleCaetgory.map((option) => {
                            const isChecked = createArticle.category === option.value
                            return (
                                <label
                                    key={option.value}
                                    className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                                        isChecked
                                            ? "bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400 ring-2 ring-purple-500/30"
                                            : "bg-slate-50 dark:bg-zinc-800/60 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="category"
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={() => setCreateArticle({ ...createArticle, category: option.value as IArticleAdmin["category"] })}
                                        className="sr-only"
                                    />
                                    <span className="text-base">{option.icon}</span>
                                    <span>{option.label}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 px-6 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-purple-600/20 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 text-base"
                >
                    <FiCheckCircle className="w-5 h-5" />
                    <span>Generate & Publish Article</span>
                </button>
            </form>
        </div>
    )
}

export default ArticleForm
