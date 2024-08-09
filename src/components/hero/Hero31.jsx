import React from 'react';

export default function Hero31() {
    return (
        <div className="bg-gradient-to-b from-green-50 to-green-100 dark:from-slate-950 dark:via-slate-900 dark:to-green-900">
            <header>
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg" alt="" />
                            </a>
                        </div>

                        <button type="button" className="inline-flex p-1 text-black dark:text-white transition-all duration-200 border border-black dark:border-white lg:hidden focus:bg-gray-100 dark:focus:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <a href="#" title="" className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80 dark:hover:text-opacity-80"> Features </a>
                            <a href="#" title="" className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80 dark:hover:text-opacity-80"> Solutions </a>
                            <a href="#" title="" className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80 dark:hover:text-opacity-80"> Resources </a>
                            <a href="#" title="" className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80 dark:hover:text-opacity-80"> Pricing </a>
                            <div className="w-px h-5 bg-black/20 dark:bg-white/20"></div>
                            <a href="#" title="" className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80 dark:hover:text-opacity-80"> Log in </a>
                            <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black dark:text-black border-2 border-black dark:border-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black" role="button"> Try for free </a>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-bold text-black dark:text-white sm:text-6xl lg:text-7xl">
                                Collaborate remotely, with
                                <div className="relative inline-flex">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80] dark:border-green-900"></span>
                                    <h1 className="relative text-4xl font-bold text-black dark:text-white sm:text-6xl lg:text-7xl">Postcrafts.</h1>
                                </div>
                            </h1>

                            <p className="mt-8 text-base text-black dark:text-gray-300 sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-700 focus:bg-orange-600 dark:focus:bg-orange-700" role="button"> Start exploring </a>
                                <a href="#" title="" className="inline-flex items-center dark:text-white mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80 dark:hover:opacity-80">
                                    <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path fill="#F97316" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Watch video
                                </a>
                            </div>
                        </div>

                        <div>
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
