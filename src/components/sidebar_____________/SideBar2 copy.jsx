import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchData } from '../../API/localApi';

const Sidebar_app = ({ toggleSidebar, isOpen }) => {
    const [isActive, setActive] = useState('nav-bar');
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
        setActive(tab);
    }, [location.search, tab]);

    const handleClick = (tab) => () => {
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
        setActive(tab);
    };

    const menuItems = [
        { name: 'Navbar', count: 3, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'About', count: 1, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'CTA', count: 8, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Footer', count: 2, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Form', count: 2, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Gallery', count: 3, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Hero', count: 12, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Pricing', count: 3, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Services', count: 6, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Testimonial', count: 2, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Blogs', count: 2, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Statistics', count: 3, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'login', count: 1, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'contact', count: 6, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'company', count: 6, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'websites', count: 6, icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
    ];

    return (
        <div className={`fixed z-50 top-0 left-0 h-screen w-64 bg-gray-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0 md:flex md:flex-col`}>
            <div className="relative flex items-center justify-center h-16 bg-gray-900">
                <span className="text-white font-bold uppercase">Sidebar</span>
                <svg onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" className="closed-button fixed right-1 top-2 cursor-pointer text-red-500 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex flex-col flex-1">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">
                        {menuItems.map(item => (
                            <Link
                                key={item.name}
                                onClick={handleClick(item.name)}
                                to={`/?tab=${item.name}`}
                                className={`${isActive === item.name.toLowerCase() ? 'bg-gray-700' : ''} relative flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                </svg>
                                {item.name}
                                <div className='absolute right-5 bg-slate-900 w-8 rounded-lg text-center'>{item.count}</div>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

const MainContent = ({ toggleSidebar, isOpen }) => {
















    
    const location = useLocation();
    const [tab, setTab] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };

        getData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const tabData = data[tab]; // Access the specific tab data
    if (!tabData) {
        return <div>No data found for the selected tab.</div>;
    }
















    return (
        <div className="w-full flex md:w-[100%] mx-auto">
            <div className={`${!isOpen ? 'w-0' : 'w-64'} hidden md:flex transition-all duration-300`}></div>
            <div className="flex flex-col flex-1">
                <nav
                    className={`fixed z-40 top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between transition-width duration-300 ${isOpen ? 'md:ml-64' : 'md:ml-0'}`}
                >
                    <div className="flex items-center px-4">
                        <h2 className='px-6 py-2 text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Pedro</h2>
                        <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
                    </div>
                    <div className="flex items-center pr-4">
                        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700">hjghfgh</button>
                    </div>
                </nav>

                {/* Content */}
                <div className="p-0">
                    {tabData.components.map((e) => {
                        const Component = e.component;
                        return (
                            <div key={e.id}>
                                <br /> <br />
                                <h3>ID: {e.id}</h3>
                                <Component />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const SideBar2 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="w-screen flex h-screen bg-gray-100">
            <Sidebar_app toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
            <MainContent toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        </div>
    );
};

export default SideBar2;
