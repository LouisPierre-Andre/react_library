import React from 'react';

export default function Statistic2() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Résultats Clés de Notre Expertise
                    </h2>
                    <p className="mt-3 text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        Découvrez les résultats tangibles de notre expertise
                    </p>
                </div>
            </div>
            <div className="mt-10 pb-1">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-gray-900"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
                                <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400">
                                        Clients Servis
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-purple-900 dark:text-purple-400">
                                        500+
                                    </dd>
                                </div>
                                <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400">
                                        Client Satisfait
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-purple-900 dark:text-purple-400">
                                        58%
                                    </dd>
                                </div>
                                <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400">
                                        Campagnes marketing
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-purple-900 dark:text-purple-400">
                                        1K+
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
