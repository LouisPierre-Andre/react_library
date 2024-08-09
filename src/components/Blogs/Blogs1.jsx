import React from 'react';

export default function Blogs1() {
    return (
        <div className="dark:bg-gray-900 dark:text-gray-100">
            <div className="grid grid-cols-1 max-w-7xl m-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-10 md:px-20">

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <img className="w-full h-48 object-cover" src="https://cinqmars.fr/wp-content/uploads/2020/04/re%CC%81fe%CC%81rencer-un-article-de-blog.jpg" alt="Blog Post" />
                        <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New</div>
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read</div>
                    </div>
                    <div className="p-4 dark:bg-gray-800">
                        <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Title</div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
                    </div>
                </div>

                {/* Repeat the above block for each blog post */}

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <img className="w-full h-48 object-cover" src="https://cinqmars.fr/wp-content/uploads/2020/04/re%CC%81fe%CC%81rencer-un-article-de-blog.jpg" alt="Blog Post" />
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read</div>
                    </div>
                    <div className="p-4 dark:bg-gray-800">
                        <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Title</div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <img className="w-full h-48 object-cover" src="https://cinqmars.fr/wp-content/uploads/2020/04/re%CC%81fe%CC%81rencer-un-article-de-blog.jpg" alt="Blog Post" />
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read</div>
                    </div>
                    <div className="p-4 dark:bg-gray-800">
                        <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Title</div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <img className="w-full h-48 object-cover" src="https://cinqmars.fr/wp-content/uploads/2020/04/re%CC%81fe%CC%81rencer-un-article-de-blog.jpg" alt="Blog Post" />
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read</div>
                    </div>
                    <div className="p-4 dark:bg-gray-800">
                        <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Title</div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <img className="w-full h-48 object-cover" src="https://cinqmars.fr/wp-content/uploads/2020/04/re%CC%81fe%CC%81rencer-un-article-de-blog.jpg" alt="Blog Post" />
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read</div>
                    </div>
                    <div className="p-4 dark:bg-gray-800">
                        <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Title</div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <img className="w-full h-48 object-cover" src="https://cinqmars.fr/wp-content/uploads/2020/04/re%CC%81fe%CC%81rencer-un-article-de-blog.jpg" alt="Blog Post" />
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read</div>
                    </div>
                    <div className="p-4 dark:bg-gray-800">
                        <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Title</div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
                    </div>
                </div>

                {/* Add other blog posts here */}

            </div>
        </div>
    );
}
