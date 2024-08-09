import React from "react";
// import BannerImg from "../../assets/banner.png";

const Service8 = () => {
    return (
        <div className="py-14 dark:bg-slate-900 bg-slate-100 duration-300">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 place-items-center  max-w-6xl mx-auto">
                    <div data-aos="fade-up" className="">
                        <img
                            src="https://gym-tcj.netlify.app/assets/banner-kyiao0qv.png"
                            alt=""
                            className="sm:scale-125 sm:-translate-x-1 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-autoo"
                        />
                    </div>
                    <div>
                        <div className="space-y-5 sm:p-16 pb-6">
                            <div data-aos="zoom-in" className="flex items-center gap-4">
                                <div className="text-[orange] text-7xl ">
                                    <h1 className="font-bold">01</h1>
                                </div>
                                <div>
                                    <p className="text-[orange]">Global Fitness</p>
                                    <h1 className="text-2xl sm:text-4xl font-bold dark:text-white">About us</h1>
                                </div>
                            </div>
                            <p data-aos="fade-up" className="dark:text-white leading-8 tracking-wide">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Aspernatur, magnam! Tenetur odio quo et maxime?
                            </p>
                            <p data-aos="fade-up" data-aos-delay="300" className="dark:text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                                tempora.
                            </p>
                            <button data-aos="fade-up" className="bg-[orange]  px-10 py-3 font-bold">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service8;