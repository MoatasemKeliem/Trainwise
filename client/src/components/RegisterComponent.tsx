import { useState, type FormEvent } from "react"
import useAccount from "../hooks/useAccount"
import type { IRegister } from "../model/IRegister"
import { Link } from "react-router-dom"
import { FiUser, FiMail, FiLock, FiUserPlus } from "react-icons/fi"

const RegisterComponent = () => {
    const { registerUser } = useAccount()
    const [register, setRegister] = useState<IRegister>({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await registerUser(register)
    }

    return (
        <div className="flex items-center justify-center min-h-[75vh] py-8">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4">
                        <FiUserPlus className="w-7 h-7" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Create Your Account
                    </h1>
                    <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
                        Join Trainwise today and transform your fitness
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Full Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <FiUser className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={register.name}
                                onChange={(e) => setRegister({ ...register, name: e.target.value })}
                                placeholder="John Doe"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <FiMail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={register.email}
                                onChange={(e) => setRegister({ ...register, email: e.target.value })}
                                placeholder="you@example.com"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <FiLock className="w-5 h-5" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={register.password}
                                onChange={(e) => setRegister({ ...register, password: e.target.value })}
                                placeholder="Create a strong password"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-2xl transition-all shadow-md shadow-emerald-600/20 active:scale-[0.99] cursor-pointer mt-2"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-500 dark:text-zinc-400">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                        Sign in here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent
