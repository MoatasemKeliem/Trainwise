const Privacy = () => {
    return (
        <div className="py-6 sm:py-10 max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Legal Document
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Privacy Policy
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-zinc-500">
                    Last updated: December 22, 2025
                </p>
            </div>

            {/* Document Content */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                    This Privacy Policy describes how TrainWise ("we", "our", or "us") collects, uses, stores, and protects personal information when you use our application.
                </p>
                <p>
                    We are committed to protecting your privacy and handling your data in a transparent and secure manner.
                </p>

                <div className="space-y-3 pt-2">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        1. Information We Collect
                    </h2>
                    <p>
                        When you sign in or register using Google OAuth or email, we collect only the information necessary to authenticate you and provide access to the Service:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-zinc-400 pl-2">
                        <li>Email address</li>
                        <li>Name and basic profile information</li>
                        <li>Unique account identifiers</li>
                    </ul>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">
                        We do not access your Google password, contacts, emails, or any other private third-party data.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        2. How We Use Your Information
                    </h2>
                    <p>Your information is used strictly for the following purposes:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-zinc-400 pl-2">
                        <li>To create and maintain your user account</li>
                        <li>To authenticate users securely</li>
                        <li>To provide personalized access to application features</li>
                        <li>To ensure platform security and prevent abuse</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        3. Legal Basis for Processing
                    </h2>
                    <p>
                        We process personal data based on your consent and our legitimate interest in providing a secure and functional application.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        4. Data Storage and Security
                    </h2>
                    <p>
                        Personal data is stored securely using industry-standard security measures. Access to personal data is restricted to systems required to operate the application.
                    </p>
                    <p>
                        We take reasonable technical and organizational precautions to protect your information against unauthorized access, loss, or misuse.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        5. Data Retention & Sharing
                    </h2>
                    <p>
                        We retain personal data only for as long as your account remains active or as necessary to provide the Service. You may request deletion of your data at any time. We do not sell, rent, or trade your personal information to third parties.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        6. User Rights
                    </h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-zinc-400 pl-2">
                        <li>Request access to your personal data</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                        7. Contact Information
                    </h2>
                    <p>
                        If you have any questions or concerns regarding this Privacy Policy, please contact us through the application support page.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Privacy
