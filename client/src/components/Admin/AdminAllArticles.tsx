import { useEffect } from 'react'
import useArticleAdmin from '../../hooks/Admin/useArticleAdmin'
import { Link } from 'react-router-dom'
import { ImSad2 } from 'react-icons/im'
import { FaCalendarAlt, FaArrowRight, FaTag } from 'react-icons/fa'

const AdminAllArticles = () => {
    const { getAllArticlesAdmin, allAdminArticles } = useArticleAdmin()

    useEffect(() => {
        getAllArticlesAdmin()
    }, [])

    if (!allAdminArticles || !allAdminArticles.length) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center my-10">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-lg space-y-4">
                    <ImSad2 className="w-12 h-12 text-purple-500 mx-auto" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        No Admin Articles Found
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Create your first article using the "Create Article" tab above.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white px-2">
                Published Articles ({allAdminArticles.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allAdminArticles.map((article) => (
                    <div 
                        key={article.id}
                        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:border-purple-500/40 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400">
                                    <FaTag className="w-3 h-3" />
                                    {article.category || "General"}
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
                                    <FaCalendarAlt className="w-3 h-3" />
                                    {article.createdAt?.slice(0, 10)}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                                {article.content?.title || article.title}
                            </h3>
                        </div>

                        <Link to={`/admin-article/${article.id}`}>
                            <button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                                <span>Inspect & Manage Article</span>
                                <FaArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminAllArticles
