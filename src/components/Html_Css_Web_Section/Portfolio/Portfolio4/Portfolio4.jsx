import React from 'react'
import './Portfolio4.css'
import bg_portfolio1 from './images/quizeApp.png'
import bg_portfolio2 from './images/transport.png'
import bg_portfolio3 from './images/movieApp.png'

function Portfolio4() {
    return (
        <section id='Portfolio_4'>
            <div className='Container'>
                <div className='title_section'>
                    <h4>Our Work</h4>
                    <h2>Look at our projects</h2>
                </div>
                <div className='categorie'>
                    <button>All</button>
                    <button>Website</button>
                    <button>WebApp</button>
                    <button>Design</button>
                </div>
                <main>
                    <div className='portfolio1'>
                        <div className='img_box'>
                            <img src={bg_portfolio1} alt='this is a porfolio image' />
                        </div>
                        <div className='description'>
                            <h4>Ecommerce Website</h4>
                            <p>Branding Graphic Show All and Wordpress</p>
                        </div>
                    </div>

                    <div className='portfolio1'>
                        <div className='img_box'>
                            <img src={bg_portfolio2} alt='this is a porfolio image' />
                        </div>
                        <div className='description'>
                            <h4>Ecommerce Website</h4>
                            <p>Branding Graphic Show All and Wordpress</p>
                        </div>
                    </div>

                    <div className='portfolio1'>
                        <div className='img_box'>
                            <img src={bg_portfolio3} alt='this is a porfolio image' />
                        </div>
                        <div className='description'>
                            <h4>Ecommerce Website</h4>
                            <p>Branding Graphic Show All and Wordpress</p>
                        </div>
                    </div>

                    <div className='portfolio1'>
                        <div className='img_box'>
                            <img src={bg_portfolio3} alt='this is a porfolio image' />
                        </div>
                        <div className='description'>
                            <h4>Ecommerce Website</h4>
                            <p>Branding Graphic Show All and Wordpress</p>
                        </div>
                    </div>

                    <div className='portfolio1'>
                        <div className='img_box'>
                            <img src={bg_portfolio3} alt='this is a porfolio image' />
                        </div>
                        <div className='description'>
                            <h4>Ecommerce Website</h4>
                            <p>Branding Graphic Show All and Wordpress</p>
                        </div>
                    </div>
                </main>
                <div className='btn_section'>
                    <button>Look More</button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio4