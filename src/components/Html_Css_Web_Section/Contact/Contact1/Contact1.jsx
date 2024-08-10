import React from 'react'
import './Contact1.css'

function Contact1() {
    return (
        <div>
            <main id='Contact_1'>
                <div className='Container'>
                    <div className='contact_design'></div>
                    <form>
                        <h2>Contact US</h2>
                        <p>Feel free to contact us any time you want. We will get back to you as soon as we can</p>
                        <label>name</label>
                        <input type='text' placeholder='Your name' />
                        <label>Email</label>
                        <input type='text' placeholder='Your Email' />
                        <label>Message</label>
                        <textarea type='text' placeholder='Your Message' />
                        <button>Send</button>
                    </form>
                    <div className='info'>
                        <h3>Info</h3>
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
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact1