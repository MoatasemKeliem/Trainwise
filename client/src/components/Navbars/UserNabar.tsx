import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import useAccount from '../../hooks/useAccount'
import logo1 from "../../assets/TrainWise2.png"
import ThemeToggle from '../ThemeToggle'
import { FiMenu, FiX, FiLogOut, FiAward } from 'react-icons/fi'

const UserNabar = () => {
    const { LogoutUser } = useAccount()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            isActive
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                : 'text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60'
        }`

    return (
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                {/* Logo & Premium Badge */}
                <div className="flex items-center gap-3">
                    <Link to="/dashboard" className="flex items-center gap-3 group">
                        <img src={logo1} alt="Trainwise logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                    </Link>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        <FiAward className="w-3 h-3" />
                        PREMIUM
                    </span>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-zinc-900/80 p-1.5 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60">
                    <NavLink to="/dashboard" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/articles" className={navLinkClass}>Articles</NavLink>
                    <NavLink to="/training-plans" className={navLinkClass}>Training Plan</NavLink>
                    <NavLink to="/nutritions" className={navLinkClass}>Nutrition Plan</NavLink>
                    <NavLink to="/training-logs" className={navLinkClass}>Training Log</NavLink>
                    <NavLink to="/my-journey" className={navLinkClass}>My Journey</NavLink>
                </div>

                {/* Right Desktop Auth & Theme Toggle */}
                <div className="hidden lg:flex items-center gap-3">
                    <ThemeToggle />
                    <button 
                        onClick={() => LogoutUser()}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl transition-all border border-red-200 dark:border-red-900/50 cursor-pointer"
                    >
                        <FiLogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="flex lg:hidden items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden py-4 border-t border-slate-200 dark:border-zinc-800 flex flex-col gap-2">
                    <div className="px-3 py-1 mb-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                            <FiAward className="w-3 h-3" />
                            PREMIUM USER
                        </span>
                    </div>
                    <NavLink to="/dashboard" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>Home</NavLink>
                    <NavLink to="/articles" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>Articles</NavLink>
                    <NavLink to="/training-plans" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>Training Plan</NavLink>
                    <NavLink to="/nutritions" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>Nutrition Plan</NavLink>
                    <NavLink to="/training-logs" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>Training Log</NavLink>
                    <NavLink to="/my-journey" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>My Journey</NavLink>
                    <div className="pt-3 border-t border-slate-200 dark:border-zinc-800">
                        <button 
                            onClick={() => { setMobileMenuOpen(false); LogoutUser(); }}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-900/50"
                        >
                            <FiLogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default UserNabar
