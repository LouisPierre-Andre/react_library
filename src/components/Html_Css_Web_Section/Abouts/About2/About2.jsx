import React from 'react'
import './About2.css'
import about_img from './images/profil_pic.png'


function About2() {
  return (
    <div>
      <main id='About_2'>
        <div className='Container'>

          <div className='img_box'>
            <div className='img_design'></div>
            <div className='img_design2'></div>
            <div className='img_box2'>
              <img src={about_img} alt='this is a profil image' />
            </div>
          </div>

          <div className='description'>
            <h4>About Us</h4>
            <h2>We Are Professional</h2>
            <h2>Medical Service & Clinic</h2>
            <p>Lorem consectetur tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur, vero illo suscipit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam mollitia repudiandae, dicta consequatur. Libero blanditiis asperiores vel repellendus expedita earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur, vero illo suscipit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam</p>
            <div className='btn_section'>
              <button>Discover more</button>
              <button>Contact Us</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default About2