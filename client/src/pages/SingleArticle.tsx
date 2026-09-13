import { useParams, Link } from "react-router-dom"
import useArticle from "../hooks/useArticle"
import { useEffect } from "react"
import { ImSad2 } from "react-icons/im"
import { FaBookOpen, FaTag, FaArrowLeft } from "react-icons/fa"

const SingleArticle = () => {
    const { id } = useParams()
    const { getArticleById, articleById } = useArticle()

    useEffect(() => {
        if (!id) return
        getArticleById(id)
    }, [id])

    if (!articleById) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center my-10">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-lg space-y-4">
                    <ImSad2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Article Not Found
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Couldn't locate this article. Please explore another article.
                    </p>
                    <Link to="/articles">
                        <button className="w-full mt-2 py-3 px-4 bg-emerald-600 text-white font-semibold text-sm rounded-xl transition-all shadow-sm">
                            Back to Articles
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8 pb-12 max-w-4xl mx-auto">
            {/* Back Navigation */}
            <Link to="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
                <FaArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Articles</span>
            </Link>

            {/* Article Header Card */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <FaTag className="w-3 h-3" />
                        {articleById.category || "General Fitness"}
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                    {articleById.title}
                </h1>
            </div>

            {/* Article Content Sections */}
            <div className="space-y-6">
                {articleById.content?.sections?.map((section: any, index: number) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3"
                    >
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="p-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg">
                                <FaBookOpen className="w-4 h-4" />
                            </span>
                            {section.heading}
                        </h2>
                        <p className="text-slate-700 dark:text-zinc-300 text-base leading-relaxed whitespace-pre-line">
                            {section.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SingleArticle
