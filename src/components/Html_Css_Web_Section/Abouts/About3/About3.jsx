import React from 'react'
import './About3.css'
import about_img from './images/profil_pic.png'


function About3() {
  return (
    <div>
      <main id='About_3'>

        <div className='Container'>
          <div className='title_section'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur,</p>
          </div>
          <div className='Containt'>

            <div className='img_box'>
              <div className='img_design'></div>
              <div className='img_design2'></div>
              <div className='img_box2'>
                <img src={about_img} alt='this is a profil image' />
              </div>
            </div>

            <div className='description'>
              {/* <h4>About Us</h4> */}
              <h2>Who We are ?</h2>
              {/* <h2>Medical Service &</h2> */}
              {/* <h2>Clinic</h2> */}
              {/* <p>Lorem consectetur tepit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam mollitia repudiandae, dicta consequatur. Libero blanditiis asperiores vel repellendus expedita earum.</p> */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur, vero illo suscipit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam</p>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>consectetur adipisicing elit.</li>
                <li>Itaque tenetur, dolorem totam laborum</li>
                <li>consectetur adipisicing elit tenertur.</li>
                <li>Lorem ipsum dolor sit amet dolorest</li>
              </ul>
              <div className='btn_section'>
                <button>Discover more</button>
                <button>Contact Us</button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default About3