import { useState } from "react"
import AdminUserCMS from "../../components/Admin/AdminUserCMS"
import ArticleForm from "../../components/Admin/ArticleForm"
import AdminTrainingPlanCMS from "../../components/Admin/AdminTrainingPlanCMS"
import AdminNutritionPlanCMS from "../../components/Admin/AdminNutritionPlanCMS"
import AdminTrainingLogsCMS from "../../components/Admin/AdminTrainingLogsCMS"
import AdminAllArticles from "../../components/Admin/AdminAllArticles"
import { FiShield, FiPlusCircle, FiUsers, FiBookOpen } from "react-icons/fi"
import { FaDumbbell, FaUtensils, FaClipboardList } from "react-icons/fa"

const Admin = () => {
    const [show, setShow] = useState("article")

    return (
        <div className="space-y-8 pb-12">
            {/* Header Banner */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl">
                        <FiShield className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                Administrator Control Center
                            </h1>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
                            Manage users, generate publications, inspect workout plans, nutrition guides, and logs.
                        </p>
                    </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                    SUPERADMIN ACCESS
                </span>
            </div>

            {/* Admin Tab Pills */}
            <div className="flex items-center justify-center">
                <div className="inline-flex items-center gap-1.5 p-1.5 bg-slate-200/80 dark:bg-zinc-900 border border-slate-300/60 dark:border-zinc-800 rounded-2xl max-w-full overflow-x-auto">
                    <button
                        type="button"
                        onClick={() => setShow("article")}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                            show === "article"
                                ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <FiPlusCircle className="w-4 h-4" />
                        <span>Create Article</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setShow("users")}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                            show === "users"
                                ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <FiUsers className="w-4 h-4" />
                        <span>Users</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setShow("training-plan")}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                            show === "training-plan"
                                ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <FiDumbbell className="w-4 h-4" />
                        <span>Training Plans</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setShow("nutrition-plan")}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                            show === "nutrition-plan"
                                ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <FiUtensils className="w-4 h-4" />
                        <span>Nutrition Plans</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setShow("training-log")}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                            show === "training-log"
                                ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <FiClipboardList className="w-4 h-4" />
                        <span>Training Logs</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setShow("view-articles")}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                            show === "view-articles"
                                ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <FiBookOpen className="w-4 h-4" />
                        <span>Articles</span>
                    </button>
                </div>
            </div>

            {/* Content view */}
            <div>
                {show === "article" ? (
                    <ArticleForm />
                ) : show === "users" ? (
                    <AdminUserCMS />
                ) : show === "training-plan" ? (
                    <AdminTrainingPlanCMS />
                ) : show === "nutrition-plan" ? (
                    <AdminNutritionPlanCMS />
                ) : show === "training-log" ? (
                    <AdminTrainingLogsCMS />
                ) : show === "view-articles" ? (
                    <AdminAllArticles />
                ) : (
                    <ArticleForm />
                )}
            </div>
        </div>
    )
}

export default Admin
