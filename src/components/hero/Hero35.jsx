import React from "react";
// import personImg from "../../assets/person2.png";

const Hero35 = () => {
    return (
        <>
            <section className="w-full bg-gray-100 dark:bg-gray-900 dark:text-white">
                <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 mx-auto">
                    <div className="">
                        <div className="space-y-2 grid justify-items-center sm:justify-items-start">
                            <p className="uppercase ">Hello</p>
                            <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                                I'm Michle Smith
                            </p>
                            <p className="text-3xl text-gray-700 dark:text-white">
                                Freelance web & <br /> Full stack Developer
                            </p>
                            <p className="text-black/75 dark:text-white/70 text-center sm:text-left ">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Molestiae quod accusamus accusantium voluptas autem doloribus?
                            </p>
                            <a
                                href="mailto:michle@test.com"
                                className=" px-10 py-2 rounded-md cursor-pointer mt-36 bg-orange-500 "
                            >
                                Hire me
                            </a>
                        </div>
                    </div>
                    {/* image section */}
                    {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] bg-no-repeat bg-center bg-cover `}
          > */}
                    <div>
                        <img
                            src="https://tcj-portfolio.netlify.app/assets/person2-XidG7aQW.png"
                            className="w-full md:max-w-lg mx-auto backdrop-blur-sm"
                            alt="person"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero35;