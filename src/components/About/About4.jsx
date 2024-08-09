import React from 'react'

export default function About4() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <section>
                {/* Container */}
                <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                    {/* Component */}
                    <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
                        {/* Content */}
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex items-center rounded-md bg-gray-300 dark:bg-gray-700 px-3 py-1">
                                <div className="mr-1 h-2 w-2 rounded-full bg-black dark:bg-white"></div>
                                <p className="text-sm text-gray-900 dark:text-gray-100">Available for work</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-xl">
                                Developer &amp; UX Specialist
                            </p>
                            {/* Title */}
                            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl lg:mb-8">
                                Jonathan Smith
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-xl">
                                Consectetur adipiscing elit duis tristique sollicitudin nibh.
                                Augue mauris augue neque gravida in fermentum. Sapien pellentesque
                                habitant morbi tristique pellentesque.
                            </p>
                            {/* Divider */}
                            <div className="mb-8 mt-8 h-px w-full bg-black dark:bg-gray-600"></div>
                            <div className="mb-6 flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base lg:mb-8">
                                <p>
                                    <strong>2020: </strong> Site of the Year on Awwwards.com
                                </p>
                                <p>
                                    <strong>2020: </strong> Site of the Year on Awwwards.com
                                </p>
                            </div>
                            {/* Link */}
                            <a
                                href="#"
                                className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 lg:mb-12 text-gray-900 dark:text-white"
                            >
                                <p>All Achievements</p>
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg"
                                    alt="Arrow pointing right"
                                    className="inline-block"
                                />
                            </a>
                            {/* Buttons */}
                            <div className="flex gap-4 font-semibold sm:grid-cols-2">
                                <a
                                    href="#"
                                    className="flex items-center gap-4 rounded-md bg-black dark:bg-gray-800 px-6 py-3 text-white"
                                >
                                    <img
                                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg"
                                        alt="Envelope icon"
                                        className="hidden md:block"
                                    />
                                    <p>Email Me</p>
                                </a>
                                <a
                                    href="#"
                                    className="flex gap-4 rounded-md border border-solid border-black dark:border-gray-600 px-6 py-3"
                                >
                                    <img
                                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg"
                                        alt="Envelope icon"
                                        className=" hidden  md:block"
                                    />
                                    <p className="text-gray-900 dark:text-gray-200">Resume</p>
                                </a>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="min-h-[530px] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                            <img src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt=''
                                className='w-full h-full object-cover object-right-top' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
