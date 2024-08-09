import React from 'react';

export default function Hero9() {
  return (
    <div className="bg-white  dark:bg-gray-900">
      <header>
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="flex flex-col">
              {/* Hero Title */}
              <h1 className="mb-4 text-4xl font-bold md:text-6xl text-gray-900 dark:text-gray-100">
                The Website You Want Without The Dev Time.
              </h1>
              <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>
              {/* Form */}
              <form
                name="email-form"
                method="get"
                className="relative  mb-5 w-full max-w-xl pb-8 md:mb-6 lg:mb-4 lg:max-w-md"
              >
                <input
                  type="email"
                  className="h-9 w-full mb-5 md:mb-0 rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                  placeholder="Enter your email"
                  required=""
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="relative right-0 top-[5px] w-full cursor-pointer rounded-md bg-black px-6 py-2 text-center font-semibold text-white sm:absolute sm:right-[5px] sm:w-auto dark:bg-gray-800 dark:text-gray-200"
                />
              </form>
              {/* Hero Info */}
              <div className="grid w-full max-w-2xl grid-flow-row grid-cols-3 gap-4">
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl text-gray-900 dark:text-gray-100">10K+</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Customers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl text-gray-900 dark:text-gray-100">200K+</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Emails</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl text-gray-900 dark:text-gray-100">500+</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                </div>
              </div>
            </div>
            {/* Hero Image */}
            <img
              src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg"
              alt=""
              className="inline-block h-full w-full max-w-2xl object-cover"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
