import React from 'react'

export default function Testimonial3() {
    return (
        <div>
            <section className="relative w-full h-auto py-20 bg-gray-100 dark:bg-gray-900 lg:px-20 flex flex-col items-center mt-20 mb-20">
                <div className="relative w-[80%] h-full flex flex-col items-center">
                    <h3 className="uppercase font-semibold text-emerald-500 text-lg my-5">testimonials</h3>
                    <h4 className=" font-bold text-2xl lg:text-4xl dark:text-white ">Our client Reviews</h4>
                </div>
                <div className="max-w-6xl relative px-3 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 w-full mb-10">
                    <figure className="relative bg-white dark:bg-gray-800 w-full h-auto rounded-xl shadow-md flex flex-col  items-center p-5">
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800  rounded-full w-16 h-16 flex items-center justify-center">
                            <img src="/testimonials/avatar13.jpg" alt="" className="h-12 w-12 rounded-full " />
                        </div>
                        <figcaption className="font-bold mt-6 text-gray-900 dark:text-white">Jon Doh</figcaption>
                        <figcaption className="text-xs text-emerald-500">Service Engineer</figcaption>
                        <blockquote className="text-sm text-pretty text-center mt-5 text-gray-700 dark:text-gray-300">I've been using this product for a month now and it's been a game-changer! Highly recommended!</blockquote>
                    </figure>
                    <figure className="relative bg-white dark:bg-gray-800 w-full h-auto rounded-xl shadow-md flex flex-col  items-center p-5">
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800  rounded-full w-16 h-16 flex items-center justify-center">
                            <img src="/testimonials/avatar24.jpg" alt="" className="h-12 w-12 rounded-full " />
                        </div>
                        <figcaption className="font-bold mt-6 text-gray-900 dark:text-white">Michel Marsh</figcaption>
                        <figcaption className="text-xs text-emerald-500">Service Supervizer</figcaption>
                        <blockquote className="text-sm text-pretty text-center mt-5 text-gray-700 dark:text-gray-300">As a small business owner I rely on this platform to manage my inventory and sales. It's intuitive and the customer support team is responsive.</blockquote>
                    </figure>
                    <figure className="relative bg-white dark:bg-gray-800 w-full h-auto rounded-xl shadow-md flex flex-col  items-center p-5">
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800  rounded-full w-16 h-16 flex items-center justify-center">
                            <img src="/testimonials/avatar23.jpg" alt="" className="h-12 w-12 rounded-full " />
                        </div>
                        <figcaption className="font-bold mt-6 text-gray-900 dark:text-white">Kale Doh</figcaption>
                        <figcaption className="text-xs text-emerald-500">Product Engineer</figcaption>
                        <blockquote className="text-sm text-pretty text-center mt-5 text-gray-700 dark:text-gray-300">Our startup needed a professional website quickly. This tool helped us create a stunning landing page in no time</blockquote>
                    </figure>
                    <button className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-emerald-500 rounded-full text-white hover:opacity-80">
                        <span className="sr-only">Previous Button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-left">
                            <path d="M6 8L2 12L6 16">
                            </path>
                            <path d="M2 12H22">
                            </path>
                        </svg>
                    </button>
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center  bg-emerald-500 rounded-full text-white hover:opacity-80">
                        <span className="sr-only">Next Button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right">
                            <path d="M18 8L22 12L18 16">
                            </path>
                            <path d="M2 12H22">
                            </path>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}
