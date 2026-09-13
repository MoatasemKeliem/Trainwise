import { FaInstagram, FaFacebook, FaTwitter, FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-slate-900 dark:bg-zinc-950 text-slate-300 border-t border-slate-800 dark:border-zinc-900 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand column */}
                    <div className="space-y-4 md:col-span-1">
                        <div className="flex items-center gap-2 text-white font-extrabold text-xl tracking-wider">
                            <span className="p-2 bg-emerald-500 text-slate-950 rounded-xl">
                                <FaDumbbell className="w-5 h-5" />
                            </span>
                            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                TRAINWISE
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Personalized AI training plans, expert nutrition strategies, and instant performance feedback tailored to your goals.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                            Platform & Info
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="hover:text-emerald-400 transition-colors">
                                    Pricing Plans
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link to="/terms" className="hover:text-emerald-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-emerald-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                            Stay Updated
                        </h3>
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="w-full px-3.5 py-2 text-sm bg-slate-800 dark:bg-zinc-900 border border-slate-700 dark:border-zinc-800 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="pt-2">
                            <h4 className="text-xs text-slate-400 mb-2">Follow Us</h4>
                            <div className="flex items-center gap-3">
                                <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all text-slate-400">
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                                <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all text-slate-400">
                                    <FaFacebook className="w-5 h-5" />
                                </a>
                                <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all text-slate-400">
                                    <FaTwitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© {new Date().getFullYear()} Trainwise Inc. All rights reserved.</p>
                    <p>Designed for peak performance & AI health tracking.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
