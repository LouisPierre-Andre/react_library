import { PlayCircleIcon, PlayIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Hero27() {
    return (
        <div>
            <section className="relative w-full h-full min-h-screen bg-yellow-50 dark:bg-slate-900 pb-10 px-5">
                <nav className="w-full flex justify-between bg-yellow-50 dark:bg-slate-900 relative h-16 items-center px-3 md:px-6 lg:px-10 z-20">
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-xl text-gray-900 dark:text-gray-100">
                            <span className="text-yellow-600">Find</span>
                            <span className="text-gray-600 dark:text-gray-300">Car</span>
                        </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-7 lg:absolute left-[50%] -translate-x-[50%]">
                        <p className="text-gray-900 dark:text-gray-100 hover:text-yellow-500 hover:underline hover:underline-yellow-500 cursor-pointer underline-offset-8">Home</p>
                        <p className="text-gray-900 dark:text-gray-100 hover:text-yellow-500 hover:underline hover:underline-yellow-500 cursor-pointer underline-offset-8">Collection</p>
                        <p className="text-gray-900 dark:text-gray-100 hover:text-yellow-500 hover:underline hover:underline-yellow-500 cursor-pointer underline-offset-8">Categories</p>
                        <p className="text-gray-900 dark:text-gray-100 hover:text-yellow-500 hover:underline hover:underline-yellow-500 cursor-pointer underline-offset-8">Galleries</p>
                        <p className="text-gray-900 dark:text-gray-100 hover:text-yellow-500 hover:underline hover:underline-yellow-500 cursor-pointer underline-offset-8">About</p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-1 text-sm">
                        <button className="rounded-full border-yellow-500 border text-gray-900 dark:text-gray-100 px-8 py-2 hover:bg-yellow-100 dark:hover:bg-yellow-600">Sign Up</button>
                        <button className="rounded-full text-white font-semibold bg-yellow-500 dark:bg-yellow-600 px-3 lg:px-8 py-2 hover:opacity-80">Sign In</button>
                    </div>
                    {/* <AlignJustify size={20} className='lg:hidden cursor-pointer hover:scale-95' /> */}
                </nav>
                <div className="hidden absolute z-20 left-0 top-12 w-full h-auto bg-white/90 dark:bg-slate-800 px-4 py-2 flex-col md:flex-row">
                    <button className="uppercase text-gray-800 dark:text-slate-200 text-xs lg:text-sm font-bold focus:bg-yellow-300 hover:bg-yellow-300 px-2 h-full py-1 rounded transition-all duration-300">Home</button>
                    <button className="uppercase text-gray-800 dark:text-slate-200 text-xs lg:text-sm font-bold focus:bg-yellow-300 hover:bg-yellow-300 px-2 h-full py-1 rounded transition-all duration-300">Collection</button>
                    <button className="uppercase text-gray-800 dark:text-slate-200 text-xs lg:text-sm font-bold focus:bg-yellow-300 hover:bg-yellow-300 px-2 h-full py-1 rounded transition-all duration-300">Categories</button>
                    <button className="uppercase text-gray-800 dark:text-slate-200 text-xs lg:text-sm font-bold focus:bg-yellow-300 hover:bg-yellow-300 px-2 h-full py-1 rounded transition-all duration-300">Galleries</button>
                    <button className="uppercase text-gray-800 dark:text-slate-200 text-xs lg:text-sm font-bold focus:bg-yellow-300 hover:bg-yellow-300 px-2 h-full py-1 rounded transition-all duration-300">About</button>
                </div>
                <main className="w-full h-full relative dark:bg-slate-900">
                    <div className="flex flex-col-reverse lg:flex-row">
                        <section className="w-full lg:w-[60%] flex flex-col lg:translate-x-10 @md:px-2 lg:px-0">
                            <div className="w-full h-auto lg:pt-16">
                                <h1 className="text-3xl lg:text-4xl lg:text-5xl font-extrabold py-1.5 text-gray-900 dark:text-gray-100">ACCOMPANY YOUR</h1>
                                <h1 className="text-3xl lg:text-4xl lg:text-5xl font-extrabold py-1.5 text-gray-900 dark:text-gray-100">JOURNEY WITH <span className="text-yellow-500">COMFORT</span></h1>
                                <p className="max-w-sm py-5 text-gray-600 dark:text-gray-400 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="w-full flex items-center justify-start gap-2">
                                    <button className="h-10 w-32 rounded-full border border-yellow-700 text-yellow-500 hover:opacity-80 dark:border-yellow-500 dark:text-yellow-300 dark:hover:bg-yellow-500">Book Now</button>
                                    <button className="h-10 w-10 rounded-full border border-black dark:border-white flex items-center justify-center hover:opacity-80">
                                        <PlayIcon size={20} className='fill-black dark:fill-white' />
                                    </button>
                                    <button className="hover:scale-[98%] transition text-gray-900 dark:text-gray-100">Watch Video</button>
                                </div>
                            </div>
                        </section>
                        <section className="relative w-full lg:w-[70%] flex items-center">
                            <div className="absolute left-[50%] top-[5%] -translate-x-1/2 h-[90%] w-[60%] bg-yellow-300 rounded-3xl -skew-x-12"></div>
                            <img src="https://utfs.io/f/bad5e2ea-faac-4363-861e-f91a48a13814-k6t10f.png" alt="Hero Image" className="h-full w-full object-contain z-10" />
                        </section>
                    </div>
                    <div className="h-auto lg:h-24 bg-white dark:bg-slate-800 rounded-md lg:rounded-full shadow-md lg:px-10 p-5 grid grid-cols-2 lg:grid-cols-5 gap-5 w-full lg:w-[80%] mt-10">
                        <div className="h-full w-full">
                            <label htmlFor="select-input-1" className="text-sm text-gray-500 dark:text-slate-200">Destinations</label>
                            <select id="select-input-1" className="focus:outline-none w-full text-sm dark:bg-slate-800 dark:text-slate-400">
                                <option value="" className="text-sm">ParisFrance</option>
                            </select>
                        </div>
                        <div className="h-full w-full">
                            <label htmlFor="select-input-2" className="text-sm text-gray-500 dark:text-slate-200">Car Type</label>
                            <select id="select-input-2" className="focus:outline-none w-full text-sm dark:bg-slate-800 dark:text-slate-400">
                                <option value="" className="text-sm flex">City Car</option>
                            </select>
                        </div>
                        <div className="h-full w-full flex flex-col">
                            <label htmlFor="input-date-1" className="text-sm text-gray-500 dark:text-slate-200">Pick Up</label> 
                            <input id="input-date-1" className="focus:outline-none text-sm dark:bg-slate-800 dark:text-slate-400" type="date" />
                        </div>
                        <div className="h-full w-full flex flex-col">
                            <label htmlFor="input-date-5" className="text-sm text-gray-500 dark:text-slate-200">Return</label>
                            <input id="input-date-5" className="focus:outline-none text-sm dark:bg-slate-800 dark:text-slate-400" type="date" />
                        </div>
                        <button className="text-white bg-yellow-500 rounded-full px-5 py-1 h-10">Search</button>
                    </div>
                </main>
            </section>
        </div>
    )
}
