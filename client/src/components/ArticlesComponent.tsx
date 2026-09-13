import { useEffect } from 'react'
import useArticle from '../hooks/useArticle'
import { Link } from 'react-router-dom'
import { FaBookOpen, FaCalendarAlt, FaArrowRight, FaTag } from 'react-icons/fa'

const ArticlesComponent = () => {
    const { getAllArticles, allArticles } = useArticle()

    useEffect(() => {
        getAllArticles()
    }, [])

    if (!allArticles.length) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center my-10">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-lg space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                        <FaBookOpen className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        No Articles Available
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Check back soon for new expert fitness & nutrition publications.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8 pb-10">
            {/* Header */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                        <FaBookOpen className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Expert Fitness Articles
                        </h1>
                        <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
                            Insights, exercise science, and nutrition strategies from industry experts.
                        </p>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allArticles.map((article) => (
                    <div 
                        key={article.id}
                        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    <FaTag className="w-3 h-3" />
                                    {article.category || "General"}
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
                                    <FaCalendarAlt className="w-3 h-3" />
                                    {article.createdAt?.slice(0, 10)}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                                {article.content?.title || article.title}
                            </h2>
                        </div>

                        <Link to={`/articles/${article.id}`}>
                            <button className="w-full py-3 px-4 bg-slate-900 dark:bg-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white dark:text-zinc-900 font-semibold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                                <span>Read Full Article</span>
                                <FaArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArticlesComponent
