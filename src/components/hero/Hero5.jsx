import React from 'react';

const Hero5 = () => {
  return (
    <section className="px-5 bg-purple-100 dark:bg-gray-900 w-full min-h-screen flex items-center mx-auto sm:px-6 lg:px-8">
      <div className="my-10 max-w-7xl sm:px-6 mx-auto lg:px-8 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 dark:text-gray-100 sm:text-5xl md:text-6xl">
            <span className="">Boostez votre visibilité avec nos </span>
            <span className="text-indigo-600 dark:text-indigo-400">stratégies marketing</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Recevez des conseils personnalisés pour transformer et améliorer votre présence en ligne, en mettant en place des stratégies de marketing digital adaptées à vos besoins uniques.
          </p>
          {/* Button Section */}
            <div className="grid gap-4 mt-8 mb-6 xs:flex  sm:justify-center lg:justify-start">
            {/* <div className="grid grid-cols-1 xs:flex border gap-4 mt-8 mb-4 md:flex md:justify-center md:items-center md:justify-start"> */}
            {/* <div className="mt-5 sm:mt-8 sm:flexe sm:justify-center lg:justify-start"> */}

            
            <a href='#' className='border flex justify-center items-center font-bold border-gray-400 text-gray-700 dark:text-white py-2 xs: px-12 rounded-md  '>Get Started</a>
            <a href='#' className='border flex justify-center items-center font-bold border-gray-400 text-white py-2 xs: px-12 rounded-md bg-indigo-800'>Reservation</a>


           
          </div>
          {/* End of Button Section */}
        </div>

        {/* Image Section */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-3/4 my-4">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Business"
          />
        </div>
        {/* End of Image Section */}
      </div>
    </section>
  );
};

export default Hero5;
