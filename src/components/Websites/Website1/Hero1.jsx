import { Button } from 'flowbite-react'
import React from 'react'

export default function Hero1() {
    return (
        <div className='relative mx-auto w-full  bg-red-400 max-w-[1600px]'>

            


            <div className='pb-20 lg:pb-0 pt-52  lg:pt-0 min-h-screen  h-[100%] lg:px-10  mx-auto lg:flex relative  inset-0 justify-center items-center z-[29]'>


                <div className='z-[-1] filter absolute inset-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.666)' }}></div>
                <div className='z-[-2] filter absolute inset-0'>
                <img className='w-full h-full object-cover' src='https://y9y3y5n3.rocketcdn.me/wp-content/uploads/2023/07/aides-panneaux-solaires-entreprises-1024x681.jpg.webp' alt='background' />
                </div>
               
                
               
               
               
                <div className='mb-40 lg:mb-0 mx-auto w-[90%] lg:w-[130%]'>
                    <h1 className='text-5xl lg:text-7xl text-white font-sans font-bold lg:w-[90%]'>Eco<span className='text-green-400'>Tech</span> Solar panels</h1>
                    <p className='text-gray-300 text-lg lg:text-xl mt-8 font-medium  lg:w-[90%]'>Solar panels are perfect if you are looking for a reliable source of additional power and energy for your home or office.</p>
                    <button className='bg-green-400 hover:bg-green-500 font-bold text-xl text-whit mt-10 p-4 rounded-lg transition-all duration-200'>Find Out More</button>



                    
                </div>



                <div class="w-[90%] mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
                    <div class="px-6 py-4 bg-green-900 text-white">
                        <h1 class="text-lg font-bold">Credit Card</h1>
                    </div>
                    <div class="px-6 py-4">

                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="card-number">
                                Card Number
                            </label>
                            <input
                                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="card-number" type="text" placeholder="**** **** **** ****" />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="expiration-date">
                                Expiration Date
                            </label>
                            <input
                                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="expiration-date" type="text" placeholder="MM/YY" />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="cvv">
                                CVV
                            </label>
                            <input
                                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cvv" type="text" placeholder="***" />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="cvv">
                                Cardholder Name
                            </label>
                            <input
                                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Full Name" />
                        </div>

                        <button class="bg-green-400 hover:bg-green-600 transition-all duration-200 text-white font-bold py-2 px-10 rounded-lg">
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
}
