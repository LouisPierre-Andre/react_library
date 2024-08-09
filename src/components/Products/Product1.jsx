import React from "react";
import Img1 from "./assets/shirt/shirt.png";
import Img2 from "./assets/shirt/shirt2.png";
import Img3 from "./assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
const Product1 = () => {
    return (
        <div className="dark:bg-gray-900 py-20">
            <div className="container mx-auto max-w-6xl px-5">
                {/* Header section */}
                <div className="text-left mb-24">
                    <p data-aos="fade-up" className="text-sm text-primary dark:text-red-400 text-red-600 text-center">
                        Top Rated Products for you
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white text-center">
                        Best Products
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-700 dark:text-gray-300 text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                        asperiores modi Sit asperiores modi
                    </p>
                </div>
                {/* Body section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ProductsData.map((data) => (
                        <div
                            data-aos="zoom-in"
                            className="border rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-gray-900 hover:text-white shadow-xl duration-300 relative"
                        >

                            <div className="h-[100px]">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                                <h1 className="text-xl font-bold dark:text-white">{data.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                    {data.description}
                                </p>
                                <button
                                    className="bg-primary text-red-600 hover:scale-105 duration-300  dark:text-red-500 py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product1;
