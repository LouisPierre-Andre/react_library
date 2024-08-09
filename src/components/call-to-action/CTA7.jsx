import React from 'react';

export default function CTA7() {
    return (
        <div>
            <div className="bg-red-500 dark:bg-gray-900 py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white dark:text-gray-100 sm:text-5xl lg:text-6xl">
                        Are you panicking yet?
                    </h2>
                    <p className="mt-6 text-xl text-white dark:text-gray-300 max-w-3xl">
                        Don't worry, we're here to help. Contact us now to get the support and guidance you need to get through this
                        crisis.
                    </p>
                    <div className="mt-10">
                        <a
                            href="#"
                            className="inline-block bg-white dark:bg-gray-800 py-3 px-8 border border-transparent rounded-md text-base font-medium text-red-500 dark:text-red-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
