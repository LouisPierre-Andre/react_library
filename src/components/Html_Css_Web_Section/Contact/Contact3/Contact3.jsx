import React from 'react'
import './Contact3.css'
import bg_contact from './images/background.jpg';

function Contact3() {
    return (
        <div>
            <main id='Contact_3'>
                {/* <div className='contact_filter'>
                    <img src={bg_contact} alt='this is a background image for the contact section' />
                </div> */}
                <div className='Container'>
                    <div className='title_section'>
                        <h3>Get in toutch with us</h3>
                        <p>Feel free to contact us any time you want. We will get back to you as soon as we can</p>
                    </div>

                    {/* <div className='contact_info'> </div> */}


                    <div className='info'>
                        <div className='contact_filter'>
                            <img src={bg_contact} alt='this is a background image for the contact section' />
                        </div>

                        <div className='info1'>
                            <div className='icon'></div>
                            <div>
                                <h4>Email Us</h4>
                                <p>webdev3030@gmail.com</p>
                                <p>webdev3030@gmail.com</p>
                            </div>
                        </div>
                        <div className='info1'>
                            <div className='icon'></div>
                            <div>
                                <h4>Call Us</h4>
                                <p>(+509)4673-1710</p>
                                <p>(+509)4673-1710</p>
                            </div>
                        </div>
                        <div className='info1'>
                            <div className='icon'></div>
                            <div>
                                <h4>Our location</h4>
                                <p>Jacmel, Haiti</p>
                                <p>Jacmel, Haiti</p>
                            </div>
                        </div>
                    </div>


                    <div className='form_section'>
                        <div className='form_info'>
                            <h3>Get int toutch</h3>
                            <h4>We can ensure reliability, low cost fares and most important, witch safety and conform in mind</h4>
                            <p>Feel free to contact us any time you want. We will get back to you as soon as we can Feel free to contact us any time you want. We will get back to you as soon as we can</p>
                            <div className='media'>
                                <div className='media1'></div>
                                <div className='media1'></div>
                                <div className='media1'></div>
                                <div className='media1'></div>
                            </div>

                        </div>

                        <form>
                            {/* <h2>Contact US</h2> */}
                            {/* <h3>Contact Us</h3> */}
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
                </div>
            </main>
        </div>
    )
}

export default Contact3