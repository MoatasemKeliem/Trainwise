import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import useArticleAdmin from "../../hooks/Admin/useArticleAdmin"
import { ImSad2 } from "react-icons/im"
import { FaBookOpen, FaTag, FaArrowLeft, FaTrashAlt, FaShieldAlt } from "react-icons/fa"

const AdminSingleArticle = () => {
    const { id } = useParams()
    const { getArticleByIdAdmin, adminArticleByID, deleteArticleByIdAdmin } = useArticleAdmin()

    useEffect(() => {
        if (!id) return
        getArticleByIdAdmin(id)
    }, [id])

    if (!adminArticleByID) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center my-10">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 max-w-md w-full shadow-lg space-y-4">
                    <ImSad2 className="w-12 h-12 text-purple-500 mx-auto" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Article Not Found
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">
                        Couldn't locate this article in admin system.
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

    return (
        <div className="space-y-8 pb-12 max-w-4xl mx-auto">
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
                                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                                    <FaTag className="w-3 h-3" />
                                    {adminArticleByID.category || "General"}
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
                                    {adminArticleByID.title}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => { deleteArticleByIdAdmin(String(id)) }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 dark:bg-red-950/40 hover:bg-red-500 hover:text-white text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-xs shrink-0"
                    >
                        <FaTrashAlt className="w-3.5 h-3.5" />
                        <span>Delete Article</span>
                    </button>
                </div>
            </div>

            {/* Sections */}
            <div className="space-y-6">
                {adminArticleByID.content?.sections?.map((section: any, index: number) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3"
                    >
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="p-1.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg">
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

export default AdminSingleArticle
