import React from 'react'
import './Header4.css'
import profil_img from './images/profil2.jpg'
import hero_bg from './images/bg1.jpg'
function Header4() {
    return (
        <div>
            <main id='Header_4'>
                <img src={hero_bg} alt='This is a header background' />
                <div className='bg_filter'></div>
                <div className='Container'>
                    <div className='img_box'>
                        <img src={profil_img} alt='This is a profil picture' />
                    </div>
                    <div className='Containt'>
                        <h1>Your Dream Design</h1>
                        <p>Notice the use of %PUBLIC_URL% in the tags above.
                            It will be replaced with the URL of the `public` folder during the build.
                            Only files inside the `public` folder can be referenced from the HTML.
                        </p>
                        <button>Contact Me</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Header4