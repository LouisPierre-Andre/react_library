
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchData } from './API/localApi';
import { HomeIcon } from '@heroicons/react/24/outline';
import { useTheme } from './Theme/ThemeProvider';



const Sidebar_app = ({ toggleSidebar, isOpen }) => {
    const [isActive, setActive] = useState('nav-bar');
    const location = useLocation();
    const [tab, setTab] = useState('');
    const [data, setData] = useState(null);


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



    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
            console.log("resultat",result);
            console.log("data", data);
        };
        
        getData();
    }, []);
    
    console.log("data outside", data);


    if (!data) {
        return <div>Loading...</div>;
    }

    // const tabData = data[tab]; // Access the specific tab data
    // if (!tabData) {
    //     return <div>No data found for the selected tab.</div>;
    // }




    const getTotalComponents = (data) => {
        let total = 0;

        // Parcours de chaque section dans les données
        for (const key in data) {
            if (data[key].components) {
                total += data[key].components.length;
            }
        }

        return total;
    };

    // Exemple d'utilisation
    const totalComponents = getTotalComponents(data);





    return (

        <div className={`fixed z-50 top-0 left-0 h-screen w-64 bg-gray-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative--- md:translate-x-0------ md:flex md:flex-col`}    >
            <div className="relative flex items-center justify-center gap-2 h-16 bg-gray-900">
                <span className="text-white font-bold uppercase">Components</span>
                <h1 className='text-green-500 font-bold text-xl'>( {totalComponents} )</h1>
                <svg onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" className="closed-button fixed right-1 top-2 cursor-pointer text-red-500 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex flex-col flex-1 ">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">

                        {Object.values(data).map(section => (
                            <div key={section.id}>
                                <Link
                                    key={section.id}
                                    onClick={handleClick(section.titre)}
                                    to={section.path}
                                    className={`${isActive === section.titre ? 'bg-gray-700' : ''} relative flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    {section.titre}
                                    <div className='absolute right-5 bg-slate-900 w-8 rounded-lg text-center'>{section.components.length}</div>
                                </Link>
                            </div>
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
    const [theme, setTheme ] = useState(false);


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
            setTheme(true)
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



    const { darkMode, toggleTheme } = useTheme();

    const toggleThemFunction = () => {
        fuc1();
        fuc2();
    }

    const fuc1 = () => {
        toggleTheme();
    }


    const fuc2 = () => {
        setTheme(!theme);
    }


    console.log(data)




    return (
        <div className='w-full flex  md:w-[100%] mx-auto'>
            {/* Side bar space */}
            <div className={`${!isOpen ? 'w-0' : 'w-64'} hidden md:flex transition-all duration-300`}></div>
            {/* Main  */}
            <div className="flex flex-col flex-1  ">
                {/* <div className="flex flex-col flex-1 overflow-y-auto "> */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <nav
                    className={`fixed lg:px-[5%]  z-40 top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 px-4 flex items-center justify-between transition-width duration-300 ${isOpen ? 'md:ml-64' : 'md:ml-0'}`}
                >
                    <div className="flex items-center px-4">
                        <h2 className='px-6 py-2 text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Pedro</h2>
                    </div>
                    <div className="flex gap-4 items-center text-black dark:text-white">
                        <button onClick={toggleThemFunction} className="  rounded-full w-8 h-8 dark:bg-slate-700 bg-slate-400 "> {theme === true ? "🌞": "🌜"}</button>
                  
                        <button onClick={toggleSidebar} className=" ">
                            <svg className={`w-6 h-6 `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    
                </nav>


    


                {/* Containt */}
                <div className="p-0 pt-10 bg-slate-200 dark:bg-gray-800 ">

                


                    {tabData.components.map((e) => {
                        const Component = e.component;
                        return (
                            <div key={e.id}>
                                <br /> <br />
                                {e.id && <h3 className='dark:text-white'>ID: {e.id}</h3>}
                                <Component />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )


};

const Welcom_Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className=" w-screen flex h-screen bg-gray-100 ">
            <Sidebar_app toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
            <MainContent toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        </div>
    );
};

export default Welcom_Page;























