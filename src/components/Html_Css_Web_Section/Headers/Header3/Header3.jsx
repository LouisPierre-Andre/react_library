import React from 'react'
import './Header3.css'
import bg_img from './images/profil1.png'
import hero_bg from './images/background.png'
function Header3() {
    return (
        <div>
            <main id='Header_3'>
                {/* <img className='Hero_bg' src={hero_bg} alt='This is a hader background' /> */}
                <div className='Container'>
                    <div className='Containt'>
                        <h2>A personalized eyewear shopping experience</h2>
                        <p>To begin the development, run `npm start` or `yarn start`.To create a production bundle, use `npm run build` or `yarn build`.</p>
                        <div className='btn_section'>
                            <button>Contact Me</button>
                            <button>Download CV</button>
                        </div>
                    </div>
                    <div className='img_filter2'></div>
                    <div className='img_box'>
                        <div className='img_filter'></div>
                        <img src={bg_img} alt='This is a profil picture' />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Header3