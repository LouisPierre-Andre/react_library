import React from 'react'
import './Header13.css'
import profil_img from './images/profil2.png'
import hero_bg from './images/bg1.jpg'
function Header13() {
    return (
        <div>
            <main id='Header_13'>
                <img src={hero_bg} alt='This is a header background' />
                {/* <div className='bg_filter'></div> */}
                <div className='bg_filter2'></div>
                <div className='Container'>
                    <div className='Containt'>
                        <h1>Hello, I am</h1>
                        <h1>Pierre-Andre LOUIS</h1>
                        <h4>And I'm a Front-end Web Developer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur, vero illo suscipit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam
                        </p>
                        <div className='btn_section'>
                            <button>Contact Me</button>
                            <button>Download CV</button>
                        </div>
                    </div>
                    <div className='img_box'>
                        <div className='img_box2'>
                            <img src={profil_img} alt='This is a profil picture' />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Header13