import React from 'react';

export default function Hero8() {
  return (
    <div className='bg-white dark:bg-slate-900'>
      <header>
        {/* Hero top */}
        <div className="bg-slate-300 dark:bg-slate-800">
          {/* Container */}
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
            {/* Title */}
            <h1 className="mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl text-slate-900 dark:text-slate-100">
              The Website You Want Without The Dev Time.
            </h1>
            {/* Buttons */}
            <div className="grid grid-cols-1 gap-4   xs:flex ">
              <a
                href="#"
                className=" rounded-md bg-black dark:bg-slate-900 text-white px-8 py-4 text-center font-semibold   dark:text-slate-200"
              >
                Get Started
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-solid border-black bg-white px-6 py-3 font-bold dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d411e6cf99_Vector%20(6).svg"
                  alt=""
                  className="mr-2 max-h-4 w-5"
                />
                <p>Download App</p>
              </a>
            </div>
          </div>
        </div>
        {/* Hero bottom */}
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="relative flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end">
            {/* Arrow down */}
            <a href="#" className="absolute bottom-0 left-0">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946f0be6cfa0_Frame%2048040.svg"
                alt="this is an arrow icon"
                className="hidden lg:inline-block"
              />
            </a>
            <div className="max-w-xl lg:mr-[520px] lg:max-w-xs">
              {/* Title */}
              <h3 className="text-2xl font-bold md:text-3xl text-slate-900 dark:text-slate-100">Introduction</h3>
              {/* Divider */}
              <div className="my-6 w-16 border-t border-black dark:border-slate-500"></div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
                lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>
            {/* Image */}
            <img
              src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg"
              alt="image of"
              className="relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[480px]"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
