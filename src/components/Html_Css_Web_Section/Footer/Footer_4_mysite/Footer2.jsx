import React from 'react'
import "./Footer2.css"
import upwork_logo from './Images/upwork.png'
import fiver_logo from './Images/fiverr.png'
// import { Link } from 'react-router-dom'


function Footer2() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            // behavior: 'smooth'
        });
    };
    return (
        <section id='Footer_2'>

            <div className='footer_container'>
                <div className='footer_containt'>
                    <div>
                        <h3>About Us</h3>
                        <p>I am a front-end web developer. With many skills like javascript, react js, bootstrap, Html, CSS, and more. I will do my best to satisfy your requirements and help you grow your business. All you have to do is contact me.</p>
                        <div className='icon_box'>
                            <a target="_blank" href="https://www.fiverr.com/webdeveloper_pr" > <img className="fiverr_logo" src={fiver_logo} /></a>
                            <a target="_blank" href='https://www.upwork.com/freelancers/~017c6fdbed2e590223' ><img className="upwork_logo" src={upwork_logo} /></a>
                            <a target="_blank" href="https://www.fiverr.com/webdeveloper_pr" > <img className="fiverr_logo" src={fiver_logo} /></a>
                            <a target="_blank" href='https://www.upwork.com/freelancers/~017c6fdbed2e590223' ><img className="upwork_logo" src={upwork_logo} /></a>
                        </div>
                    </div>

                    <div>
                        <h3>Contact US</h3>
                        <p><span>Address:</span> Jacmel, Haiti</p>
                        <p><span>Phone:</span>  (+509) 46 73 17 10</p>
                        <p><span>E-mail:</span> webdeveloper3030 @gmail.com</p>
                    </div>

                    <div>
                        <h3>Quick links</h3>
                        <div className='Link' onClick={() => { handleClick() }} to="/portfolio"><p> Home</p></div>
                        <div className='Link' onClick={() => { handleClick() }} to="/About"><p> About</p></div>
                        <div className='Link' onClick={() => { handleClick() }} to="/Projects"><p>Portfolio</p></div>
                        <div className='Link' onClick={() => { handleClick() }} to="/Contact"><p>Contact</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer2