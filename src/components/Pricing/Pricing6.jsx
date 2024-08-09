import React from 'react';

const Pricing6 = () => {
  return (
    <section className="py-6 leading-7 text-gray-900 bg-white dark:text-gray-300 dark:bg-gray-900 sm:py-12 md:py-16">
      <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-6xl">
        <div className="flex flex-col items-center leading-7 text-center border-0 border-gray-200 dark:border-gray-700">
          <h2
            id="pricing"
            className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black dark:text-white border-solid sm:text-4xl md:text-5xl"
          >
            Simple, Transparent Pricing
          </h2>
          <p className="box-border mt-2 text-xl dark:text-gray-400 sm:text-2xl"></p>
        </div>

        <div
          id="pricing"
          className="grid grid-cols-1 gap-4 mt-4 leading-7 border-0 border-gray-200 dark:border-gray-700 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
        >
          {/* Price 1 */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg dark:border-gray-700 dark:bg-gray-800 lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black dark:text-white border-0 border-gray-200 dark:border-gray-700 sm:text-3xl md:text-4xl">
              Starter
            </h3>
            <div className="flex items-end mt-6 leading-7 dark:text-gray-300 border-0 border-gray-200 dark:border-gray-700">
              <p className="box-border m-0 text-6xl font-semibold leading-none dark:text-white border-solid">$1</p>
              <p className="box-border m-0 dark:text-gray-400 border-solid">/ month</p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 dark:text-gray-300 border-0 border-gray-200 dark:border-gray-700">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                1 Website
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                SSL (HTTPS)
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                SiteFast Domain
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 dark:text-blue-400 no-underline bg-transparent border border-blue-600 dark:border-blue-400 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white dark:hover:bg-blue-800 dark:focus-within:bg-blue-800 sm:text-base md:text-lg"
            >
              Start Now
            </a>
          </div>
          {/* Price 2 */}
          <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg dark:bg-gray-800 dark:border-blue-400 sm:p-6 md:px-8 md:py-16">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black dark:text-white border-0 border-gray-200 dark:border-gray-700 sm:text-3xl md:text-4xl">
              Basic
            </h3>
            <div className="flex items-end mt-6 leading-7 dark:text-gray-300 border-0 border-gray-200 dark:border-gray-700">
              <p className="box-border m-0 text-6xl font-semibold leading-none dark:text-white border-solid">$29</p>
              <p className="box-border m-0 dark:text-gray-400 border-solid">/ month</p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 dark:text-gray-300 border-0 border-gray-200 dark:border-gray-700">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                15 Websites
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                SSL (HTTPS)
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom Domain
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Priority Support
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 dark:text-blue-400 no-underline bg-transparent border border-blue-600 dark:border-blue-400 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white dark:hover:bg-blue-800 dark:focus-within:bg-blue-800 sm:text-base md:text-lg"
            >
              Start Now
            </a>
          </div>
          {/* Price 3 */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg dark:border-gray-700 dark:bg-gray-800 lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black dark:text-white border-0 border-gray-200 dark:border-gray-700 sm:text-3xl md:text-4xl">
              Pro
            </h3>
            <div className="flex items-end mt-6 leading-7 dark:text-gray-300 border-0 border-gray-200 dark:border-gray-700">
              <p className="box-border m-0 text-6xl font-semibold leading-none dark:text-white border-solid">$99</p>
              <p className="box-border m-0 dark:text-gray-400 border-solid">/ month</p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 dark:text-gray-300 border-0 border-gray-200 dark:border-gray-700">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Unlimited Websites
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                SSL (HTTPS)
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom Domain
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left dark:text-gray-300 border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 Support
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 dark:text-blue-400 no-underline bg-transparent border border-blue-600 dark:border-blue-400 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white dark:hover:bg-blue-800 dark:focus-within:bg-blue-800 sm:text-base md:text-lg"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing6;
