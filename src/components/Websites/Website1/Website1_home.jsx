import React from 'react'
import Hero1 from './Hero1'
import About1 from './About1'
import Service1 from './Service1'
import WhyUs1 from './WhyUs1'
import Testimonial1 from './Testimonial1'
import CTA1 from './CTA1'
import Footer1 from './Footer1'
import Contact1 from './Contact1'
import Gallery1 from './Gallery1'

export default function Website1_home() {
  return (
      <div className=' min-h-screen'>
          <Hero1 />
          <About1 />
          <Service1 />
          <Gallery1 />
          <WhyUs1 />
          <Testimonial1 />
          <CTA1 />
          <Contact1 />
          <Footer1 />
    </div>
  )
}
