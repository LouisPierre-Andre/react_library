import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from './sidebar/SideBar';

import  Navbar  from '../pages/Navbar';
import  About  from '../pages/About';
import  Banner  from '../pages/Banner';
import Carousel from '../pages/Carousel'
import CTA from '../pages/CTA'
import Footer from '../pages/Footer'
import Form from '../pages/Form'
import Galerie from '../pages/Gallery'
import Hero from '../pages/Hero'
import Pricing from '../pages/Pricing'
import Services from '../pages/Services'
import Testimonial from '../pages/Testimonial'
import SideBar_page from '../pages/SideBar';


export default function Home() {

  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);



  return (
    <div className='min-h-screen flex flex-col md:flex-row  '>
          

    {/* <div className='md:w-56'>
        <SideBar />
    </div> */}
          
      
      {/* NavBar */}
      {tab === 'nav-bar' && <Navbar />}
    
      {/* About */}
      {tab === 'about' && <About />}
    
      {/* Banner */}
      {tab === 'banner' && <Banner />}
    
      {/* Carousel */}
      {tab === 'carousel' && <Carousel />}
    
      {/* CTA */}
      {tab === 'cta' && <CTA />}
    
      {/* Footer */}
      {tab === 'footer' && <Footer />}
    
      {/* Form */}
      {tab === 'form' && <Form />}
    
      {/* Galerie */}
      {tab === 'galerie' && <Galerie />}
    
      {/* Hero */}
      {tab === 'hero' && <Hero />}
    
      {/* Pricing */}
      {tab === 'pricing' && <Pricing />}
    
      {/* Services */}
      {tab === 'services' && <Services />}
    
      {/* Testimonial */}
      {tab === 'testimonial' && <Testimonial />}
      
      {/* Testimonial */}
      {tab === 'sidebar' && <SideBar_page />}
    


    </div>
  );
}
