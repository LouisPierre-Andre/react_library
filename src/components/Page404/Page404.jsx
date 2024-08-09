export default function Page404() {
    return (
        <main className="dark:bg-gray-900 dark:text-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        404 Error
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="javascript:void(0)"
                            className="block py-2 px-4 text-white dark:text-gray-900 font-medium bg-indigo-600 dark:bg-indigo-500 duration-150 hover:bg-indigo-500 dark:hover:bg-indigo-400 active:bg-indigo-700 dark:active:bg-indigo-600 rounded-lg"
                        >
                            Go back
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium duration-150 active:bg-gray-100 dark:active:bg-gray-600 border dark:border-gray-700 rounded-lg"
                        >
                            Contact support
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
