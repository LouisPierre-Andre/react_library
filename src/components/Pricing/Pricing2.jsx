import React from 'react';

const Pricing2 = () => {
  const plans = [
    {
      title: 'Starter',
      description: 'Best option for personal use & for your next project.',
      price: '$29',
      duration: '/month',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 1 developer',
        'Premium support: 6 months',
        'Free updates: 6 months'
      ]
    },
    {
      title: 'Company',
      description: 'Relevant for multiple users, extended & premium support.',
      price: '$99',
      duration: '/month',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 10 developers',
        'Premium support: 24 months',
        'Free updates: 24 months'
      ]
    },
    {
      title: 'Enterprise',
      description: 'Best for large scale uses and extended redistribution rights.',
      price: '$499',
      duration: '/month',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 100+ developers',
        'Premium support: 36 months',
        'Free updates: 36 months'
      ]
    }
  ];

  return (
    <section className="bg-purple-50 dark:bg-gray-900">
      <div className="max-w-6xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className=" mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, index) => (
            <div key={index} className=" flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{plan.description}</p>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">{plan.duration}</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900">
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
