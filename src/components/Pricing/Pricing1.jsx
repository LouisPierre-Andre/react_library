import React from 'react';

const Pricing1 = () => {
    return (
        <div className="relative z-10 py-32 mx-auto px-4 md:px-6 lg:px-8 my-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-8">
                {/* Hobby Plan */}
                <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10 dark:bg-gray-800 dark:ring-gray-700">
                    <div className="p-8 sm:p-10">
                        <h3 className="text-lg font-semibold leading-8 tracking-tight text-blue-600 dark:text-blue-400" id="tier-hobby">
                            Hobby
                        </h3>
                        <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            $0
                            <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500 dark:text-gray-400">/mo</span>
                        </div>
                        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">All basic features included.</p>
                    </div>
                    <div className="flex flex-1 flex-col p-2">
                        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8 dark:bg-gray-700">
                            <ul role="list" className="space-y-6">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Bookmark Favorites</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Import Bookmarks from Twitter</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Full-text Search</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Private Bookmarks (via DMs) 🚧 </p>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <a href="/login" className="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:ring-gray-700 dark:ring-gray-600" aria-describedby="tier-team">
                                    Get started today
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pro Plan */}
                <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10 dark:bg-gray-800 dark:ring-gray-700">
                    <div className="p-8 sm:p-10">
                        <h3 className="text-lg font-semibold leading-8 tracking-tight text-blue-600 dark:text-blue-400" id="tier-team">
                            Pro
                        </h3>
                        <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            $6
                            <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500 dark:text-gray-400">/mo</span>
                        </div>
                        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">For those who expect more.</p>
                    </div>
                    <div className="flex flex-1 flex-col p-2">
                        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8 dark:bg-gray-700">
                            <ul role="list" className="space-y-6">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Bookmark Favorites</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Manage and Filter Tags</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Filter by Authors</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Import Bookmarks from Twitter</p>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <a href="/billing" className="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:ring-gray-700 dark:ring-gray-600" aria-describedby="tier-team">
                                    Get started today
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing1;
