import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo1 from "../../assets/TrainWise2.png"
import ThemeToggle from '../ThemeToggle'
import { FiMenu, FiX } from 'react-icons/fi'

const GuestNavbar = () => {
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
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img src={logo1} alt="Trainwise logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-zinc-900/80 p-1.5 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                    <NavLink to="/about" className={navLinkClass}>About</NavLink>
                    <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
                </div>

                {/* Right Desktop Auth & Theme Toggle */}
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <NavLink to="/login" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-zinc-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-xl transition-all">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="px-5 py-2.5 text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all shadow-sm hover:shadow-emerald-500/20 active:scale-95">
                        Register
                    </NavLink>
                </div>

                {/* Mobile Menu Toggle & Theme Toggle */}
                <div className="flex md:hidden items-center gap-2">
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
                <div className="md:hidden py-4 border-t border-slate-200 dark:border-zinc-800 flex flex-col gap-2">
                    <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>Home</NavLink>
                    <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>Contact</NavLink>
                    <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>About</NavLink>
                    <NavLink to="/pricing" onClick={() => setMobileMenuOpen(false)} className={navLinkClass}>Pricing</NavLink>
                    <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 flex flex-col gap-2">
                        <NavLink to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 rounded-xl">
                            Login
                        </NavLink>
                        <NavLink to="/register" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-4 py-2.5 text-sm font-semibold bg-emerald-600 text-white rounded-xl shadow-sm">
                            Register
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default GuestNavbar
