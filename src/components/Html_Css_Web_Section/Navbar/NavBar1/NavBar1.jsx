import React from 'react';
// import { Link } from 'react-router-dom';
import "./NavBar1.css";
import nav_icon from "./images/navbars2.png";


function NavBar1() {
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
        <div id="NavBar_1" className={`${showNav && " active"} ${navBar ? "color_white" : "color_transparent"}`}>
            <div className='navbar_containt'>
                <div className='logo_section'>
                    <h3>Pierre-<span>Andre</span></h3>
                    <i onClick={() => { setShowNav(!showNav) }} class="bi bi-list"><img src={nav_icon} /></i>
                </div>
                <ul onClick={() => { setShowNav(!showNav) }}>
                    <div className='Link' onClick={() => { handleClick() }} to="/portfolio"><li>Home</li></div>
                    <div className='Link' onClick={() => { handleClick() }} to="/About"><li >About</li></div>
                    <div className='Link' onClick={() => { handleClick() }} to="/Projects"><li >Portfolio</li></div>
                    <div className='Link' onClick={() => { handleClick() }} to="/Contact"><li>Contact</li></div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar1