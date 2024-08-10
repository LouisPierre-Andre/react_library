import React from 'react'
import './Header11.css'
import profil_img from './images/profil2.png'
import hero_bg from './images/bg1.jpg'
function Header11() {
    return (
        <div>
            <main id='Header_11'>
                <img src={hero_bg} alt='This is a header background' />
                {/* <div className='bg_filter'></div> */}
                <div className='bg_filter2'></div>
                <div className='Container'>
                    <div className='Containt'>
                        <h2>Hello, I'm</h2>
                        <h1>Pierre-Andre LOUIS</h1>
                        <h3>Front-end Web Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur, vero illo suscipit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam</p>
                        <button>Contact Me</button>
                        <div className='more_info'>
                            <div className='info'>
                                <h3>15 Y.</h3>
                                <p>Experience</p>
                            </div>
                            <div className='info'>
                                <h3>250+</h3>
                                <p>Project Finish</p>
                            </div>
                            <div className='info'>
                                <h3>80+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className='img_box'>
                        <div className='design1'></div>
                        <div className='design2'></div>
                        <div className='img_box2'>
                            <img src={profil_img} alt='This is a profil picture' />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Header11