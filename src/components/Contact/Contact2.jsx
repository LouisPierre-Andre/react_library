import React from 'react'

export default function Contact2() {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <section className="text-gray-600 dark:text-gray-400 max-w-6xl m-auto body-font relative">
                <div className="container p-3 md:px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div
                        className="lg:w-2/3 md:w-1/2 bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder="0"
                            title="map"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            style={{ filter: 'grayscale(0.6) opacity(0.9)' }}
                        >
                        </iframe>
                        <div className="bg-white dark:bg-gray-700 relative flex flex-wrap py-6 rounded shadow-md dark:shadow-lg">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-red-500 dark:text-red-400 leading-relaxed">example@email.com</a>
                                <h2 className="title-font font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-800 flex flex-col px-4 py-9 md:px-6 md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 dark:text-gray-100 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white dark:bg-gray-700 dark:border-gray-600 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white dark:bg-gray-700 dark:border-gray-600 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white dark:bg-gray-700 dark:border-gray-600 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800 h-32 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-red-500 dark:bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 dark:hover:bg-red-700 rounded text-lg">Button</button>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
