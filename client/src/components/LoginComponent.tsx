import { useState, type FormEvent } from 'react'
import useAccount from '../hooks/useAccount'
import type { ILogin } from '../model/ILogin'
import { FcGoogle } from "react-icons/fc";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { FiMail, FiLock, FiAlertCircle, FiLogIn } from "react-icons/fi";
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    const { loginUser, loginWithDiscord, loginWithGoogle } = useAccount()
    const [error, setError] = useState("")
    const [login, setLogin] = useState<ILogin>({
        email: "",
        password: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!login.email || !login.password) {
            setError("Email or password is missing");
            return
        }
        try {
            setError("");
            await loginUser(login);
        } catch {
            setError("Invalid email or password");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-[75vh] py-8">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4">
                        <FiLogIn className="w-7 h-7" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
                        Log in to access your training & nutrition plan
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-3">
                        <FiAlertCircle className="w-5 h-5 shrink-0" />
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
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
                                value={login.email}
                                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                                placeholder="you@example.com"
                                className={`w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                                    error ? "border-red-500/60" : "border-slate-200 dark:border-zinc-700"
                                }`}
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
                                value={login.password}
                                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                                placeholder="••••••••"
                                className={`w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-zinc-800/80 border rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                                    error ? "border-red-500/60" : "border-slate-200 dark:border-zinc-700"
                                }`}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-2xl transition-all shadow-md shadow-emerald-600/20 active:scale-[0.99] cursor-pointer mt-2"
                    >
                        Sign In
                    </button>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200 dark:border-zinc-800"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white dark:bg-zinc-900 px-3 text-slate-400 dark:text-zinc-500 font-medium">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="space-y-3">
                    <button
                        type="button"
                        onClick={loginWithGoogle}
                        className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-slate-50 dark:bg-zinc-800/80 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700 font-medium rounded-2xl transition-all cursor-pointer"
                    >
                        <FcGoogle className="w-5 h-5" />
                        <span>Google</span>
                    </button>

                    <button
                        type="button"
                        onClick={loginWithDiscord}
                        className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 text-[#5865F2] dark:text-[#7983F5] border border-[#5865F2]/30 font-medium rounded-2xl transition-all cursor-pointer"
                    >
                        <BiLogoDiscordAlt className="w-5 h-5" />
                        <span>Discord</span>
                    </button>
                </div>

                <div className="mt-8 text-center text-sm text-slate-500 dark:text-zinc-400">
                    Don't have an account yet?{" "}
                    <Link to="/register" className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                        Register here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent
