import React from 'react';
// import { Link } from 'react-router-dom';
import "./NavBar3.css";
import nav_icon from "./images/navbars2.png";

function NavBar3() {
    const [showNav, setShowNav] = React.useState(false)
    const [navBar, setNavBar] = React.useState(false)

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            // behavior: 'smooth'
        });
    };

    ////////////////////////////////////////////////////////////////////

    let scrollPos = 0;
    function checkPosition() {
        let windowY = window.scrollY;

        if (windowY < 350) {
            setNavBar(false)
        } else {
            setNavBar(true)
        }
        scrollPos = windowY;
    }

    window.addEventListener('scroll', checkPosition);

    console.log(navBar)


    return (
        <section id='NavBar_box'>
            <div className='NavBar3_1'>
                <div className='containt'>
                    <div>
                        <p>Phone: (509) 4673-1710</p>
                    </div>
                    <div>
                        <p>webdev3030@gmail.com</p>
                        <p>Delmas33, Haiti</p>
                    </div>
                    <div>
                        <p>Get in toutch</p>
                    </div>
                </div>
            </div>

            <div id="NavBar_3" className={`${showNav && " active"} ${navBar ? "color_white" : "color_transparent"}`}>
                <div className='navbar_containt'>
                    <div className='logo_section'>
                        <h3>Pierre-<span>Andre</span></h3>
                        <i onClick={() => { setShowNav(!showNav) }} class="bi bi-list"><img src={nav_icon} /></i>
                    </div>
                    <ul onClick={() => { setShowNav(!showNav) }}>
                        <div className='Link' onClick={() => { handleClick() }} to="/portfolio"><li>Home</li></div>
                        <div className='Link' onClick={() => { handleClick() }} to="/About"><li >About</li></div>
                        <div className='Link' onClick={() => { handleClick() }} to="/Projects"><li >Team</li></div>
                        <div className='Link' onClick={() => { handleClick() }} to="/Projects"><li >Portfolio</li></div>
                        <div className='Link contact_btn' onClick={() => { handleClick() }} to="/Projects"><li >Contact</li></div>
                    </ul>
                    <div className='Link contact_btn' onClick={() => { handleClick() }} to="/Contact"><li>Contact</li></div>

                </div>
            </div>
        </section>
    )
}

export default NavBar3