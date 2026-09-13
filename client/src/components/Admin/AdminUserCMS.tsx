import { useEffect } from 'react'
import useUserCMS from '../../hooks/Admin/useUserCMS'
import { FiUser, FiTrash2, FiMail, FiCalendar } from 'react-icons/fi'

const AdminUserCMS = () => {
    const { getAllUsers, allUsers, deleteUsers } = useUserCMS()

    useEffect(() => {
        getAllUsers()
    }, [])

    if (!allUsers || !allUsers.length) {
        return (
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 text-center text-slate-500 dark:text-zinc-400 font-medium">
                No users found in database.
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white px-2">
                Registered Users ({allUsers.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allUsers.map((user) => (
                    <div 
                        key={user.id}
                        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                                    user.role === "admin"
                                        ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                                        : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                                }`}>
                                    {user.role}
                                </span>
                                <span className="text-xs text-slate-400 dark:text-zinc-500 flex items-center gap-1">
                                    <FiCalendar className="w-3 h-3" />
                                    {user.createdAt?.slice(0, 10)}
                                </span>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <FiUser className="w-4 h-4 text-emerald-500" />
                                    {user.name}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1.5 truncate">
                                    <FiMail className="w-3.5 h-3.5" />
                                    {user.email}
                                </p>
                            </div>

                            <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 space-y-1">
                                <p><strong className="text-slate-700 dark:text-zinc-300">Auth Provider:</strong> {user.provider || "Local"}</p>
                                {user.stripeCustomerId && (
                                    <p className="truncate"><strong className="text-slate-700 dark:text-zinc-300">Stripe ID:</strong> {user.stripeCustomerId}</p>
                                )}
                            </div>
                        </div>

                        <button 
                            onClick={async () => { await deleteUsers(user.id); await getAllUsers() }}
                            className="w-full py-2.5 px-4 bg-red-50 dark:bg-red-950/40 hover:bg-red-500 hover:text-white text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 font-semibold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                            <FiTrash2 className="w-3.5 h-3.5" />
                            <span>Delete User Account</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminUserCMS
