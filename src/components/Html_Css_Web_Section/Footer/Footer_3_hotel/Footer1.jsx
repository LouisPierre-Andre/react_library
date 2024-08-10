import React from 'react'
import "./Footer1.css"
import image1 from './Images/image (1).jpg'
import image2 from './Images/image (2).jpg'
import image3 from './Images/image (3).jpg'
import image4 from './Images/image (4).jpg'
import image5 from './Images/image (5).jpg'
import image6 from './Images/image (6).jpg'


function Footer1() {
    return (
        <section id='Footer_1'>
            <div className='footer_container'>
                <div className='footer_containt'>
                    <div className='block block1'>
                        <h2>Hotel_Room</h2>
                        <p>Sequi dolores ratione eos eveniet provident soluta. Omnis nesciunt sit eos at, eius voluptatum rem corporis.
                            Doloremque labore assumenda
                            explicabo velit illo, soluta, inventore hic.
                        </p>
                        <div className='icon_section'>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-twitter"></i>
                        </div>
                    </div>

                    <div className='block block2'>
                        <h2>Quick Link</h2>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Rooms</p>
                        <p>Blogs</p>
                        <p>Contact Us</p>
                    </div>

                    <div className='block block3'>
                        <h2>Services</h2>
                        <p>Web design</p>
                        <p>Web development</p>
                        <p>Web management</p>
                        <p>Web applicaton</p>
                    </div>

                    <div className='block block4'>
                        <h2>Portfolio</h2>
                        <div className='images_section'>
                            <img src={image1} alt='This is an image from our instagram account' />
                            <img src={image2} alt='This is an image from our instagram account' />
                            <img src={image3} alt='This is an image from our instagram account' />
                            <img src={image4} alt='This is an image from our instagram account' />
                            <img src={image5} alt='This is an image from our instagram account' />
                            <img src={image6} alt='This is an image from our instagram account' />
                        </div>
                    </div>
                </div>

                <img className='image_bg' src={image1} />
            </div>
        </section>
    )
}

export default Footer1