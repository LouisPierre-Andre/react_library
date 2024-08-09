import React from "react";
// import HeroPng from "../../assets/coffee2.png";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Hero34 = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-[#270c03] flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                We serve the richest{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  class="bg-clip-text text-transparent bg-gradient-to-b from-[#854d3d] to-[#854d3d]/90 font-cursive"
                >
                  Coffee
                </span>{" "}
                in the city
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r from-[#854d3d] to-[#4a1e1b] border-2 border-[#854d3d] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Coffee And Code
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src='https://coffee-cafe-tcj.netlify.app/assets/coffee2-nBtrVATQ.png'
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-[#854d3d] to-[#4a1e1b] p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white">Hey Coder</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-[#854d3d] to-[#4a1e1b] p-3 rounded-xl absolute bottom-10 right-10"
              >
                <h1 className="text-white">Best Coffee</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero34;