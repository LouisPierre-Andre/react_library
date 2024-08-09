import React from 'react';

export default function Hero10() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <header>
        {/* Hero Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl text-gray-900 dark:text-gray-100">
              The Website You Want Without The Dev Time.
            </h1>
            <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus
            </p>
            {/* Hero Button */}
            <div className="grid grid-cols-1 xs:flex gap-4 justify-center">
              <a
                href="#"
                className=" inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white  dark:bg-gray-800 dark:text-gray-100"
              >
                
                Get Started
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold text-black dark:border-gray-600 dark:text-gray-100"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg"
                  alt=""
                  className="mr-2 inline-block max-h-4 w-5"
                />
                <p className="text-sm text-black sm:text-base dark:text-gray-100">Watch Demo</p>
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg"
            alt=""
            className="inline-block max-h-[512px] w-full object-cover"
          />
        </div>
      </header>
    </div>
  );
}
