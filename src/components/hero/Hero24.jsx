import React from 'react'

export default function Hero24() {
    return (
        <div className='bg-white dark:bg-slate-900  min-h-screen relative'>
            <section className=" h-auto w-full bg-[#222831] min-h-[400px] overflow-hidden px-5 lg:px-20 dark:bg-slate-900 pt-32 ">





                {/* <nav className="w-full flex justify-between relative h-12 items-center   pt-5  ">
                    <div className="flex items-center justify-start gap-2 text-lg font-bold px-4 text-white">
                        <div className="h-7 w-7 bg-emerald-500">
                        </div>MyPort</div>
                    <div className="hidden  lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center gap-5 cursor-pointer text-white">
                        <p className=" hover:text-pink-500 hover:font-bold transition-all duration-300">Home</p>
                        <p className=" hover:text-pink-500 hover:font-bold transition-all duration-300">Services</p>
                        <p className=" hover:text-pink-500 hover:font-bold transition-all duration-300">Contact us</p>
                        <p className=" hover:text-pink-500 hover:font-bold transition-all duration-300">About us</p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-5 text-sm">
                        <button className="bg-pink-500 text-white  rounded-sm  px-5 py-2">Get Started</button>
                    </div>
                </nav> */}




                <div className='z-[555] '>
                    <div className="p-0  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-5 lg:py-10 max-w-6xl mx-auto">
                        <div>
                            <h1 className="text-4xl max-w-xl lg:text-start mx-auto md:text-center xs:text-5xl @6xl:text-5xl font-bold text-white ">We are <span className="text-pink-500">always</span> there for your need</h1>
                        </div>
                        <div className=' max-w-xl mx-auto md:text-center lg:text-start'>
                            <p className=" text-gray-300 ">We are a remote design agency based in Montreal working with clients around the world. As passionate designers we love building products that are easy to use accessible engaging and delightful.</p>
                            <button className=" text-pink-500 mt-4 uppercase ">/   Contact us</button>
                        </div>
                    </div>


                    <img src="https://utfs.io/f/df007e37-3b42-4ada-a272-8d5e63807d6b-k6t0zq.jpg" alt=""
                        className="w-[100%] mx-auto  h-[20rem] mt-6 object-cover object-right-top " />

                </div>
                
            </section>



            <div className='absolute top-0 left-0 right-0 h-[70vh]  overflow-hidden z-[133]'>
                <div className='relative w-full h-full '>
                    <div className="absolute top-0 right-0 h-[30%] w-[30%] bg-gradient-to-tr from-emerald-200 to-emerald-500 blur-[130px]"></div>
                    <div className="absolute bottom-0 left-0 h-[30%] w-[20%] bg-gradient-to-bl from-emerald-200 to-emerald-500 blur-[130px]"> </div>
                </div>
            </div>

        </div>
    )
}
