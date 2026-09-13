import { Outlet } from 'react-router-dom'
import Navbar from './Navbars/Navbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 transition-colors duration-200">
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-zinc-900/90 border-b border-slate-200/80 dark:border-zinc-800/80 shadow-xs">
                <Navbar />
            </header>
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
