import React from 'react'

export default function Hero25() {
  return (
      <div>
          <section className="relative w-full h-full min-h-screen bg-pink-100 ">
              <nav className="w-full flex  justify-between bg-pink-500 relative h-12 items-center  px-3 md:px-6 lg:px-10 z-20">
                  <div className="flex items-center gap-2">
                      <p className="font-bold text-xl ">
                          <span className="text-pink-600">Me</span>
                          <span className="text-gray-600">LUXE</span>
                      </p>
                  </div>
                  <div className="hidden text-white  lg:flex items-center justify-center gap-7 lg:absolute left-[50%] -translate-x-[50%]">
                      <p className="hover:text-pink-900 hover:underline hover:underline-pink-100 cursor-pointer underline-offset-8">Home</p>
                      <p className="hover:text-pink-900 hover:underline hover:underline-pink-100 cursor-pointer underline-offset-8">Features</p>
                      <p className="hover:text-pink-900 hover:underline hover:underline-pink-100 cursor-pointer underline-offset-8">Blog</p>
                      <p className="hover:text-pink-900 hover:underline hover:underline-pink-100 cursor-pointer underline-offset-8">Contact us</p>
                      <p className="hover:text-pink-900 hover:underline hover:underline-pink-100 cursor-pointer underline-offset-8">About</p>
                  </div>
              </nav>
              <div className="hidden absolute z-20 left-0 top-12 w-full h-auto bg-white/90  px-4 py-2  flex-col md:flex-row">
                  <button className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">Home</button>
                  <button className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">Features</button>
                  <button className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">Blog</button>
                  <button className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">Contact us</button>
                  <button className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300">About</button>
              </div>
              <main className=" w-full h-full relative dark:bg-slate-950  ">
                  <div className="flex flex-col lg:flex-row lg:pt-16 ">
                      <section className="w-full lg:w-[50%] flex flex-col lg:translate-x-10 @md:px-2 lg:px-0 p-5 lg:p-10 lg:p-0 max-w-2xl mx-auto ">
                          <div className="w-full h-auto  lg:pt-7  ">
                              <p>Hi there!</p>
                              <h1 className="__classNameName_8c8ae6 text-3xl xs:text-4xl md:text-6xl dark:text-white lg:text-6xl  font-extrabold uppercase ">Luxe is here to be  </h1>
                              <h1 className="__classNameName_8c8ae6 text-3xl text-pink-600 lg:text-6xl  font-extrabold  ">your assistance </h1>
                              <p className="max-w-sm py-5 text-gray-600 dark:text-slate-400 lg:text-lg">I am here ready to help you in making creative digital products</p>
                              <div className="w-full flex items-center text-white justify-start gap-2">
                                  <button className="h-10 w-32 rounded-lg bg-pink-600 text-white">Let's discuss</button>
                              </div>
                          </div>
                      </section>
                      <section className="relative w-full lg:w-[50%] flex  items-center  justify-center  ">
                          <img src="https://utfs.io/f/a9c82c53-ac6e-4db4-a770-24242328e259-k6t0zs.png" alt="Hero Image"
                              className="h-full w-full object-contain z-10 max-w-[25rem] md:max-w-[30rem] " />
                      </section>
                  </div>
                  <div className="lg:w-[80%] w-full  mt-10 mx-auto">
                      <h2 className="text-4xl font-bold px-10 py-10 __classNameName_8c8ae6 text-center dark:text-white">OUR SERVICE</h2>
                      <div className="w-full grid  lg:grid-cols-3 gap-5 px-5 lg:px-20">
                          <div className="w-full h-auto p-3 flex flex-col items-center gap-3  hover:shadow-lg rounded-xl ">
                              <div className="h-14 w-14 p-2 rounded-xl bg-pink-800 flex items-center justify-center">
                                  <img src="/hero-section/image/hero19a.png" alt="Branding" className="h-10 w-10 object-cover" />
                              </div>
                              <p className="text-slate-800 dark:text-slate-100 text-lg font-bold">Branding</p>
                              <p className="text-slate-600 dark:text-slate-400 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                          <div className="w-full h-auto p-3 flex flex-col items-center gap-3  hover:shadow-lg rounded-xl ">
                              <div className="h-14 w-14 p-2 rounded-xl bg-pink-800 flex items-center justify-center">
                                  <img src="/hero-section/image/hero19b.png" alt="UX/UI" className="h-10 w-10 object-cover" />
                              </div>
                              <p className="text-slate-800 dark:text-slate-100 text-lg font-bold">UX/UI</p>
                              <p className="text-slate-600 dark:text-slate-400 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                          <div className="w-full h-auto p-3 flex flex-col items-center gap-3  hover:shadow-lg rounded-xl ">
                              <div className="h-14 w-14 p-2 rounded-xl bg-pink-800 flex items-center justify-center">
                                  <img src="/hero-section/image/hero19c.png" alt="Product Design" className="h-10 w-10 object-cover" />
                              </div>
                              <p className="text-slate-800 dark:text-slate-100 text-lg font-bold">Product Design</p>
                              <p className="text-slate-600 dark:text-slate-400 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                      </div>
                  </div>
              </main>
          </section>
    </div>
  )
}
