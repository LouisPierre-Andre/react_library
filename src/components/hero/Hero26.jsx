import React from 'react'

export default function Hero26() {
    return (
        <div>
            <section className="relative w-full h-full min-h-screen bg-white dark:bg-slate-900 pb-10">
                <nav className="w-full flex justify-between bg-white dark:bg-slate-900 relative h-16 items-center px-3 md:px-6 lg:px-10 z-20">
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-xl text-gray-800 dark:text-white">
                            <span className="text-pink-600">Tweet</span>
                            <span className="text-gray-600 dark:text-gray-400">Me</span>
                        </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-7 lg:absolute left-[50%] -translate-x-[50%]">
                        <p className="text-gray-800 dark:text-white hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">Home</p>
                        <p className="text-gray-800 dark:text-white hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">Features</p>
                        <p className="text-gray-800 dark:text-white hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">Blog</p>
                        <p className="text-gray-800 dark:text-white hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">Contact us</p>
                        <p className="text-gray-800 dark:text-white hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">About</p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-1 text-gray-800 dark:text-white text-sm">
                        <button className="rounded-full border-pink-500 text-gray-800 dark:text-white px-8 py-2 hover:opacity-80 dark:border-pink-500">Sign Up</button>
                        <button className="rounded-full font-semibold bg-pink-500 text-white px-8 py-2 hover:opacity-80">Sign In</button>
                    </div>
                </nav>
                <div className="hidden absolute z-20 left-0 top-12 w-full h-auto bg-white dark:bg-gray-800 px-4 py-2 flex-col md:flex-row">
                    <button className="uppercase text-gray-800 dark:text-gray-300 text-xs lg:text-sm font-bold focus:bg-pink-300 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">Home</button>
                    <button className="uppercase text-gray-800 dark:text-gray-300 text-xs lg:text-sm font-bold focus:bg-pink-300 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">Features</button>
                    <button className="uppercase text-gray-800 dark:text-gray-300 text-xs lg:text-sm font-bold focus:bg-pink-300 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">Blog</button>
                    <button className="uppercase text-gray-800 dark:text-gray-300 text-xs lg:text-sm font-bold focus:bg-pink-300 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">Contact us</button>
                    <button className="uppercase text-gray-800 dark:text-gray-300 text-xs lg:text-sm font-bold focus:bg-pink-300 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">About</button>
                </div>
                <main className="w-full h-full relative dark:bg-slate-900">
                    <div className="flex flex-col-reverse lg:flex-row mt-16">
                        <section className="w-full lg:w-[50%] flex flex-col lg:translate-x-10 md:px-2 lg:px-0 p-5 lg:p-10 lg:p-0">
                            <div className="w-full h-auto lg:pt-7">
                                <h1 className="text-3xl lg:text-5xl lg:text-7xl text-gray-800 dark:text-white font-extrabold">Build your best</h1>
                                <h1 className="text-3xl lg:text-5xl lg:text-7xl text-gray-800 dark:text-white font-extrabold">community</h1>
                                <h1 className="text-3xl lg:text-5xl lg:text-7xl text-gray-800 dark:text-white font-extrabold">starting from here.</h1>
                                <p className="max-w-sm py-5 text-gray-600 dark:text-gray-400 lg:text-lg">Meet and communicate with the best people to run projects, events, or other activities in a more effective and fun way.</p>
                                <div className="w-full flex items-center text-gray-800 dark:text-white justify-start gap-2">
                                    <button className="h-10 w-32 rounded-lg bg-pink-600 text-white">Get Started</button>
                                    <span className="underline pl-5 cursor-pointer">Learn More</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right">
                                        <path d="M18 8L22 12L18 16"></path>
                                        <path d="M2 12H22"></path>
                                    </svg>
                                </div>
                                <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-10">
                                    <div className="w-full h-20 p-3 flex items-center gap-3 max-w-md">
                                        <div className="h-14 w-14 p-2 rounded-xl bg-gray-800 dark:bg-gray-600 flex items-center justify-center">
                                            <img src="/hero-section/image/hero19a.png" alt="Build Community" className="h-10 w-10 object-cover" />
                                        </div>
                                        <p className="text-gray-800 dark:text-gray-200 text-sm">Build Community</p>
                                    </div>
                                    <div className="w-full h-20 p-3 flex items-center gap-3 max-w-md">
                                        <div className="h-14 w-14 p-2 rounded-xl bg-gray-800 dark:bg-gray-600 flex items-center justify-center">
                                            <img src="/hero-section/image/hero19b.png" alt="Share Events" className="h-10 w-10 object-cover" />
                                        </div>
                                        <p className="text-gray-800 dark:text-gray-200 text-sm">Share Events</p>
                                    </div>
                                    <div className="w-full h-20 p-3 flex items-center gap-3 max-w-md">
                                        <div className="h-14 w-14 p-2 rounded-xl bg-gray-800 dark:bg-gray-600 flex items-center justify-center">
                                            <img src="/hero-section/image/hero19c.png" alt="Get Information" className="h-10 w-10 object-cover" />
                                        </div>
                                        <p className="text-gray-800 dark:text-gray-200 text-sm">Get Information</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="relative w-full lg:w-[50%] flex items-center justify-center p-10">
                            <img src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png" alt="Hero Image" className="h-full w-full object-contain z-10" />
                        </section>
                    </div>
                </main>
            </section>
        </div>
    )
}
