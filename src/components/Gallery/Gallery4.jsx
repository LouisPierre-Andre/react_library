import React, { useState } from 'react';

const Gallery4 = () => {
    const [activeTab, setActiveTab] = useState('app');

    const tabs = [
        { id: 'app', label: 'App' },
        { id: 'message', label: 'Messages' },
        { id: 'settings', label: 'Settings' },
    ];

    const images = {
        app: [
            'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
            'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
        ],
        message: [
            'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
        ],
        settings: [
            'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
            'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
            'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
            'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
            'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
        ],
    };

    return (
        <div className=" bg-white dark:bg-gray-900 py-20">
            <div className="max-w-6xl mx-auto relative right-0">
                <ul className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60" role="list">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="z-30 flex-auto text-center">
                            <a
                                onClick={() => setActiveTab(tab.id)}
                                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer font-bold text-slate-700 ${activeTab === tab.id ? 'bg-gray-400 dark:bg-gray-700 ' : 'bg-inherit'
                                    }`}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                aria-controls={tab.id}
                            >
                                <span className="ml-1 dark:text-white">{tab.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="p-0">
                    {Object.keys(images).map((key) => (
                        <div
                            key={key}
                            id={key}
                            role="tabpanel"
                            className={`grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max ${activeTab === key ? 'block opacity-100' : 'hidden opacity-0'
                                }`}
                        >
                            {images[key].map((src, index) => (
                                <div key={index}>
                                    <img
                                        className="w-full h-40 max-w-full rounded-lg object-cover"
                                        src={src}
                                        alt={`image-photo-${index}`}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery4;
