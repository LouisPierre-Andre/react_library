// import ServicesBox from "./ServicesBox";
import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";



const Service7 = () => {
    const Services = [
        {
            name: "UX research",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
            image: "https://picsum.photos/200/300",
            icon: <AiFillLayout className="text-4xl" />,
            bgColor: "bg-blue-500/70",
        },
        {
            name: "App Development",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
            image: "https://picsum.photos/200/301",
            icon: <MdOutlinePhoneAndroid className="text-4xl" />,
            bgColor: "bg-lime-500/70",
        },
        {
            name: "Web App Development",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
            image: "https://picsum.photos/200/302",
            icon: <HiMiniComputerDesktop className="text-4xl" />,
            bgColor: "bg-fuchsia-500/70",
        },
        {
            name: "Security",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
            image: "https://picsum.photos/200/303",
            icon: <MdSecurity className="text-4xl" />,
            bgColor: "bg-orange-500/70",
        },
    ];

    return (
        <div className="dark:bg-gray-900 bg-white px-4 md:px-8 lg:px-10">
        <section className="  max-w-6xl mx-auto bg-secondary  dark:text-white py-10">
            <div className="container flex flex-col items-center mx-auto">
                <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
                    Services
                </h1>
                <p className="text-slate-500 text-center md:w-[50%] mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                    dolor sit amet. Id,erroradipisicing elit. Id, error.
                </p>
            </div>
            <div>
                <section id="services" className="my-10 container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                            {Services.map(({ name, description, image, icon, bgColor }) => (
                                <div
                                    key={name}
                                    className={` ${bgColor} overflow-hidden relative rounded-xl text-white bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
                                >
                                    <div id="containt" className="relative z-30 p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
                                        {icon}
                                        <h1 className="text-2xl font-bold">{name}</h1>
                                        <p>{description}</p>
                                    </div>
                                    <div id="filter" className="bg-slate-950/70 absolute inset-0 z-20"></div>
                                    <img className="absolute inset-0 h-full w-full object-cover z-10"
                                        src={image} alt="" />
                                </div>
                            ))}

                    </div>
                </section>
            </div>
            </section>
        </div>
    );
};

export default Service7;