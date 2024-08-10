import React from 'react'
import './Contact2.css'
import bg_contact from './images/background.jpg';

function Contact2() {
    return (
        <div>
            <main id='Contact_2'>
                <div className='Container'>
                    <div className='contact_filter'></div>
                    <img src={bg_contact} alt='this is a background image for the contact section' />

                    <div className='info'>
                        <h3>Contact US</h3>
                        <p>Feel free to contact us any time you want. We will get back to you as soon as we can</p>

                        <div className='info1'>
                            <div className='icon'></div>
                            <p>webdev3030@gmail.com</p>
                        </div>
                        <div className='info1'>
                            <div className='icon'></div>
                            <p>(+509)4673-1710</p>
                        </div>
                        <div className='info1'>
                            <div className='icon'></div>
                            <p>Jacmel, Haiti</p>
                        </div>
                        <div className='info1'>
                            <div className='icon'></div>
                            <p>6:00 AM - 10:00 PM</p>
                        </div>

                        <div className='media'>
                            <div className='media1'></div>
                            <div className='media1'></div>
                            <div className='media1'></div>
                            <div className='media1'></div>
                        </div>
                    </div>


                    <form>
                        {/* <h2>Contact US</h2> */}
                        <h3>Get in toutch</h3>
                        {/* <p>Feel free to contact us any time you want. We will get back to you as soon as we can</p> */}
                        <label>name</label>
                        <input type='text' placeholder='Your name' />
                        <label>Email</label>
                        <input type='text' placeholder='Your Email' />
                        <label>Message</label>
                        <textarea type='text' placeholder='Your Message' />
                        <button>Send</button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Contact2