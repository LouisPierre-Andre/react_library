import React from 'react';

const Contact5 = () => {
  return (
    <div className=" mx-auto p-0 md:p-5 lg:p-16 dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 mx-auto max-w-6xl md:grid-cols-12 border dark:border-gray-700">
        <div className="bg-gray-900 md:col-span-4 p-5 md:p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="flex items-center mt-5">
            <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 489.536 489.536">
              <path d="M488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5z" />
            </svg>
            <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
          </div>
          <div className="flex items-center mt-5">
            <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 60.002 60.002">
              <path d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693 c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z" />
            </svg>
            <span className="text-sm">+93 749 99 65 50</span>
          </div>
          <div className="flex items-center mt-5">
            <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 300.988 300.988">
              <path d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z" />
            </svg>
            <span className="text-sm">24/7</span>
          </div>
        </div>
        <form className="md:col-span-8 p-5 md:p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800" id="first-name" type="text" placeholder="Jane" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-gray-500 dark:focus:border-gray-400" id="last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-gray-500 dark:focus:border-gray-400" id="email" type="email" placeholder="********@*****.**" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea rows="10" className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800"></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <label className="block text-gray-500 dark:text-gray-400 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
              <button className="shadow bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-400 dark:hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact5;
