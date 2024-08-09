import { Button } from 'flowbite-react'
import React from 'react'

export default function WhyUs1() {
  return (
      <div className=' min-h-96 relative py-80'>
          <div className='bg-purple-500 absolute inset-0 z-[1]'>
                <img className='w-full h-full object-cover' src='https://y9y3y5n3.rocketcdn.me/wp-content/uploads/2023/07/aides-panneaux-solaires-entreprises-1024x681.jpg.webp' alt='background' />
          </div>
          <div className='absolute inset-0 z-[2]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.666)' }}></div>


          <div className='flex flex-col px-10 
           justify-center items-center absolute inset-0 z-[3]'>
              <h1 className='text-white text-5xl font-bold lg:text-7xl'>Why  Eco<span  style={{ color: '#5DD39E' }}>Tech</span>?</h1>
              <p className='text-center text-gray-300 mt-10 lg:text-xl max-w-3xl'>After years of experience and more than 500, 000 people powered with the help of our solar panels, we think the choice is really obvious here!</p>
              <button style={{ border: '2px solid #5DD39E', color: '#5DD39E' }} className=' rounded-md mt-12 p-3 px-8 text-white font-bold text-2xl'>Contact US</button>
          </div>

    </div>
  )
}
