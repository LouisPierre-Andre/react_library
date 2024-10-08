import React from 'react'
import './Header7.css'
import profil_img from './images/profil3.png'
import hero_bg from './images/bg2.jpg'
function Header7() {
    return (
        <div>
            <main id='Header_7'>
                <img src={hero_bg} alt='This is a header background' />
                <div className='bg_filter'></div>
                <div className='Container'>
                    <div className='Containt'>
                        <h1>Your Dream Design</h1>
                        <p>Notice the use of %PUBLIC_URL% in the tags above.
                            It will be replaced with the URL of the `public` folder during the build.
                            Only files inside the `public` folder can be referenced from the HTML.
                        </p>
                        <button>Contact Me</button>
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

export default Header7