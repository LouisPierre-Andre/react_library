import React from 'react'
import './Header12.css'
import profil_img from './images/profil3.png'
import hero_bg from './images/bg1.jpg'
function Header12() {
    return (
        <div>
            <main id='Header_12'>
                <img src={hero_bg} alt='This is a header background' />
                {/* <div className='bg_filter'></div> */}
                <div className='bg_filter2'></div>
                <div className='Container'>
                    <div className='Containt'>
                        <h1>Your Dream Design</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur, vero illo suscipit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam
                        </p>
                        <button>Contact Me</button>
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

export default Header12