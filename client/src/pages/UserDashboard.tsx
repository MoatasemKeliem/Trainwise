import { Link } from "react-router-dom"
import MySubscription from "../components/MySubscription"
import RenderPlansDashboard from "../components/RenderPlansDashboard"
import useAuth from "../hooks/useAuth"
import { FiUser, FiZap, FiPlusCircle, FiShield, FiAlertCircle } from "react-icons/fi"

const UserDashboard = () => {
    const { name, subscriptionStatus, role } = useAuth()

    return (
        <div className="space-y-8 pb-10">
            {/* Header Dashboard Banner */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-2xl shrink-0">
                            {name ? name.charAt(0).toUpperCase() : <FiUser />}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                    Welcome back, {name || "Athlete"}
                                </h1>
                                {role === "admin" && (
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 flex items-center gap-1">
                                        <FiShield className="w-3 h-3" /> ADMIN
                                    </span>
                                )}
                                {subscriptionStatus === "active" && role === "user" && (
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                                        <FiZap className="w-3 h-3" /> ACTIVE MEMBER
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
                                Track your training sessions, generate custom AI plans, and stay on target.
                            </p>
                        </div>
                    </div>

                    {/* Quick action or subscription management */}
                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-zinc-800">
                        {subscriptionStatus === "active" && role === "user" && (
                            <div className="flex items-center gap-3">
                                <Link to="/my-journey">
                                    <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer">
                                        <FiPlusCircle className="w-4 h-4" />
                                        Create New Plan
                                    </button>
                                </Link>
                                <MySubscription />
                            </div>
                        )}

                        {role === "admin" && (
                            <Link to="/admin">
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer">
                                    <FiShield className="w-4 h-4" />
                                    Admin Dashboard
                                </button>
                            </Link>
                        )}

                        {subscriptionStatus === "inactive" && role === "user" && (
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-medium">
                                    <FiAlertCircle className="w-5 h-5 shrink-0" />
                                    <span>No active membership subscription</span>
                                </div>
                                <Link to="/pricing">
                                    <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap">
                                        View Membership Plans
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Dashboard Workout & Plan Cards */}
            {(subscriptionStatus === "active" || role === "admin") && (
                <RenderPlansDashboard />
            )}
        </div>
    )
}

export default UserDashboard
