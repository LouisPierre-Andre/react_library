import { PlayIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Hero23() {
    return (
        <div className="bg-white dark:bg-slate-900 pt-20 md:pt-0">
            <div className="min-h-screen w-full relative overflow-hidden">
                <nav className="w-full flex justify-between relative h-12 items-center pt-5 z-30">
                    <div className="flex items-center justify-start gap-2 text-lg font-bold px-4 text-gray-800 dark:text-white">
                        <div className="h-7 w-7 bg-emerald-500"></div>
                        MySAS
                    </div>
                    <div className="hidden lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center gap-5 cursor-pointer">
                        <p className="text-gray-800 dark:text-white hover:text-sky-500 hover:font-bold transition-all duration-300">Home</p>
                        <p className="text-gray-800 dark:text-white hover:text-sky-500 hover:font-bold transition-all duration-300">Services</p>
                        <p className="text-gray-800 dark:text-white hover:text-sky-500 hover:font-bold transition-all duration-300">Contact us</p>
                        <p className="text-gray-800 dark:text-white hover:text-sky-500 hover:font-bold transition-all duration-300">About us</p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-5 text-sm">
                        <button className="bg-sky-500 text-white rounded-sm px-5 py-2">Get Started</button>
                    </div>
                </nav>
                <section className="grid lg:grid-cols-2 max-w-2xl lg:max-w-[100vw] mx-auto">
                    <div className="p-5 lg:py-20 lg:pl-20 flex flex-col lg:w-[110%]  items-start justify-center z-30">
                        <h1 className="text-4xl  xs:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
                            Restaurant Management made as easy as pie
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 mt-5">
                            Platform will help you manage your store easily with its outstanding features. Trusted by tens of thousands of customers all over the world.
                        </p>
                        <div className="flex flex-col xs:flex-row lg:flex-row mt-5 items-center justify-start gap-5 w-full">
                            <button className="text-sky-500 h-10 px-10 bg-sky-100 rounded-sm flex items-center justify-center gap-3">
                                 Watch Video
                            </button>
                            <a className="bg-sky-500 hover:bg-sky-700 text-white h-10 px-10 rounded-sm flex items-center justify-center" href="#">Try the demo</a>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col items-center px-10 lg:pt-20 z-30 relative">
                        <img src="https://utfs.io/f/d1aaff50-56a7-4c1d-a4b3-e76bf0b2ee12-3k1fhw.png" alt="Image" className="lg:w-[80%] h-auto" />
                    </div>
                    <div className="hidden lg:block absolute left-1/2 bottom-1/4 bg-gradient-to-t from-sky-200 dark:from-sky-950 to-sky-50 dark:to-transparent w-[50%] h-[90%] rounded-[70px] rotate-[40deg] origin-bottom-left lg:-translate-x-10"></div>
                    <div className="hidden lg:block absolute lg:left-10 bottom-5 bg-sky-100 dark:bg-sky-950 w-44 h-44 rounded-3xl rotate-[40deg] origin-bottom-left"></div>
                    <div className="hidden lg:block absolute lg:-left-10 -top-40 bg-sky-100 dark:bg-sky-950 w-52 h-52 rounded-3xl rotate-[30deg] origin-bottom-left"></div>
                    <div className="hidden lg:block absolute lg:left-1/3 top-20 bg-gradient-to-t from-sky-100 dark:from-sky-950 to-transparent w-40 h-40 rounded-3xl rotate-[30deg] origin-bottom-left"></div>
                </section>
            </div>
        </div>
    )
}
