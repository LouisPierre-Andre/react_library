import React from 'react'
import './About1.css'
import about_img from './images/profil_pic.png'


function About1() {
  return (
    <div>
      <main id='About_1'>
        <div className='Container'>
          <div className='img_box'>
            <div className='img_design'></div>
            <div className='img_box2'>
              <img src={about_img} alt='this is a profil image' />
            </div>
          </div>
          <div className='description'>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur, vero illo suscipit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam mollitia repudiandae, dicta consequatur. Libero blanditiis asperiores vel repellendus expedita earum. Ratione ullam quaerat vitae debitis voluptate.</p>
            <p> .</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur, vero illo suscipit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam mollitia repudiandae, dicta consequatur. Libero bland</p>
            <div className='btn_section'>
              <button>Contact Me</button>
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About1