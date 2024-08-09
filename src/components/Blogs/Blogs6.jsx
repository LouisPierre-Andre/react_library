import React from 'react';

const blogs = [
    {
        href: '#',
        imgSrc: 'https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
        avatarSrc: 'https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
        name: 'Gloria',
        date: 'Jan 09, 2021',
        title: 'Facebook is creating a news section in Watch to feature breaking news',
        description: 'Facebook launched the Watch platform in August',
    },
    {
        href: '#',
        imgSrc: 'https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
        avatarSrc: 'https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
        name: 'Gloria',
        date: 'May 30, 2021',
        title: 'What CFR (Conversations, Feedback, Recognition) really is about',
        description: 'For a lot of people these days, Measure What Matters.',
    },
    {
        href: '#',
        imgSrc: 'https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
        avatarSrc: 'https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
        name: 'Gloria',
        date: 'Jan 09, 2021',
        title: 'Facebook is creating a news section in Watch to feature breaking news',
        description: 'Facebook launched the Watch platform in August',
    },
    {
        href: '#',
        imgSrc: 'https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
        avatarSrc: 'https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
        name: 'Gloria',
        date: 'May 30, 2021',
        title: 'What CFR (Conversations, Feedback, Recognition) really is about',
        description: 'For a lot of people these days, Measure What Matters.',
    },
];

const Card = ({ href, imgSrc, avatarSrc, name, date, title, description }) => (
    <a className="group relative block rounded-xl focus:outline-none" href={href}>
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-b before:from-gray-900/10 before:via-slate-900/50 before:to-slate-800">
            <img className="size-full  absolute top-0 start-0 object-cover" src={imgSrc} alt="Blog Image" />
            {/* <div className='absolute z-0 inset-0 bg-black'>adsfasdfasdf</div> */}
        </div>
        <div className="absolute top-0 inset-x-0 z-10">
            <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="flex items-center">
                    <div className="shrink-0">
                        <img className="size-[46px] border-2 border-white rounded-full" src={avatarSrc} alt="Avatar" />
                    </div>
                    <div className="ms-2.5 sm:ms-4">
                        <h4 className="font-semibold text-white">
                            {name}
                        </h4>
                        <p className="text-xs text-white/80">
                            {date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                    {title}
                </h3>
                <p className="mt-2 text-white/80">
                    {description}
                </p>
            </div>
        </div>
    </a>
);

const Blogs6 = () => (
    <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
                <Card
                    key={index}
                    href={blog.href}
                    imgSrc={blog.imgSrc}
                    avatarSrc={blog.avatarSrc}
                    name={blog.name}
                    date={blog.date}
                    title={blog.title}
                    description={blog.description}
                />
            ))}
        </div>
    </div>
);

export default Blogs6;
