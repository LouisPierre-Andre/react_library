import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Hero7 = () => {
  // useEffect(() => {
  //   const options = {
  //     strings: ['', 'FullStack Developer,', 'Frontend Developer,', 'Backend Developer,', 'Mobile Apps Developer.'],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  //   };
  //   new Typed('.typing', options);
  // }, []);

  return (
    <div className="bg-slate-800 dark:bg-gray-900 min-h-screen w-full mx-auto py-20 xl:px-16 
    lg:px-12 md:px-8 sm:px-6 flex md:flex-row sm:flex-col flex-col
    gap-4 justify-center items-center pb-10 pt-4 ">
      <div className="w-[90vw]  md:w-full">
        <img className="rounded-full max-w-[20rem] lg:max-w-[25rem] md:min-w-[20rem] sm:max-w-[50%] xs:max-w-[60%] mx-auto" src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg" alt="My Image" />
      </div>
      <div className="w-[90vw] md:w-full flex flex-col justify-center gap-4 text-white dark:text-gray-200 md:mt-0 sm:mt-8 xs:mt-4">
        <h1 className="text-4xl font-semibold font-serif">Hello, I'm Samuel Abera</h1>
        <h3 className="capitalize text-rose-400 dark:text-rose-300">i'm a web developer <span className="typing text-green-500 dark:text-green-400"></span></h3>
        <p className="text-gray-300 dark:text-gray-400">Experienced full-stack developer with 4+ years of expertise in Laravel, NestJS, Nuxt.js, Next.js,
          Android, and some Flutter experience.</p>
        <div className="sm:mt-4 xs:mt-2">
          <button className="px-6 py-1 bg-rose-500 dark:bg-rose-400 text-white dark:text-gray-900 rounded-sm">Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Hero7;
