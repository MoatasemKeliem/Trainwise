const Terms = () => {
    return (
        <div className="py-6 sm:py-10 max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Legal Agreement
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Terms of Service
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-zinc-500">
                    Last updated: December 22, 2025
                </p>
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                    Welcome to TrainWise ("the Service"). These Terms of Service ("Terms") govern your access to and use of the TrainWise application, website, and related services.
                </p>
                <p>
                    By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Service.
                </p>

                <div className="space-y-3 pt-2">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        1. Description of the Service
                    </h2>
                    <p>
                        TrainWise is a digital platform designed to help users plan, track, and analyze training-related activities. The Service includes features such as training logs, nutrition plans, AI-generated insights, and personalized fitness recommendations.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        2. Use of the Service
                    </h2>
                    <p>
                        You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not misuse the Service, attempt to gain unauthorized access, or interfere with the operation or security of the platform.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        3. User Accounts
                    </h2>
                    <p>
                        To access certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        4. Disclaimer & Fitness Advice
                    </h2>
                    <p>
                        The Service is provided on an "as is" and "as available" basis. Any information or insights provided through the Service are for informational purposes only and should not be considered professional medical advice. Always consult a physician before beginning any workout regimen.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        5. Contact
                    </h2>
                    <p>
                        If you have any questions or concerns regarding these Terms of Service, please contact us through the application support channels.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
