import { Sidebar } from 'flowbite-react';
import {
  HiArrowSmRight,
} from 'react-icons/hi';


import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function SideBar() {

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
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
              <Sidebar.ItemGroup className='flex flex-col gap-1'>
                  

                  

          <Link to='/dashboard?tab=nav-bar'>
            <Sidebar.Item
              active={tab === 'nav-bar'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              NavBar
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=about'>
            <Sidebar.Item
              active={tab === 'about'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              About
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=banner'>
            <Sidebar.Item
              active={tab === 'banner'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Banner
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=carousel'>
            <Sidebar.Item
              active={tab === 'carousel'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Carousel
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=cta'>
            <Sidebar.Item
              active={tab === 'cta'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              CTA
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=footer'>
            <Sidebar.Item
              active={tab === 'footer'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Footer
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=form'>
            <Sidebar.Item
              active={tab === 'form'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Form
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=galerie'>
            <Sidebar.Item
              active={tab === 'galerie'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Galerie
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=hero'>
            <Sidebar.Item
              active={tab === 'hero'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Hero
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=pricing'>
            <Sidebar.Item
              active={tab === 'pricing'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Pricing
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=services'>
            <Sidebar.Item
              active={tab === 'services'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Services
            </Sidebar.Item>
          </Link>
          
          <Link to='/dashboard?tab=testimonial'>
            <Sidebar.Item
              active={tab === 'testimonial'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Testimonial
            </Sidebar.Item>
          </Link>

            <Link to='/dashboard?tab=sidebar'>
            <Sidebar.Item
              active={tab === 'testimonial'}
              icon={HiArrowSmRight}
              label='0'
              labelColor='dark'
              as='div'
            >
              Testimonial
            </Sidebar.Item>
          </Link>
          

          

          


        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
