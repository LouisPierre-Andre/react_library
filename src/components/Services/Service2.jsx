import React from 'react';

const features = [
    {
        title: 'Dynamic Personalization:',
        description: 'Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time.',
    },
    {
        title: 'Mobile-Optimized Interface',
        description: 'Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets.',
    },
    {
        title: '24/7 Customer Support',
        description: 'Our U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it\'s through email, phone, or live chat, we\'re always here to support you.',
    },
    {
        title: 'Secure Payment Processing',
        description: 'We use cutting-edge security measures to protect our customers\' sensitive information and ensure the safety of all transactions made on our site.',
    },
];

export default function Service2() {
    return (
        <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
            <div className="max-w-7xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-4xl tracking-tight font-bold text-primary-800 dark:text-primary-400">
                        Highlighted Features
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row">
                    {/* <!-- can help image --> */}
                    <div className="lg:w-1/2 w-full mr-0 md:mr-8 mb-8 lg:mb-0">
                        <img
                            className="h-full object-cover w-full mx-auto"
                            src="https://media.istockphoto.com/id/1423369897/fr/photo/travailleur-du-centre-dappels.webp?s=1024x1024&w=is&k=20&c=58JSE75MLfq_h4WQV5wUFDzqz2h8A6bzSgaEIG1AVvw="
                            alt="can_help_banner"
                        />
                    </div>
                    {/* <!-- end can help image --> */}

                    <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                        {features.map((feature, index) => (
                            <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl bg-white dark:bg-slate-800">
                                    <h3 className="text-2xl font-bold mb-6">{feature.title}</h3>
                                    <p className="text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
