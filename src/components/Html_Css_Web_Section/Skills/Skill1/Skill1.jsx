import React from 'react'
import './Skill1.css'
import bg_portfolio1 from './images/quizeApp.png'
import bg_portfolio2 from './images/transport.png'
import bg_portfolio3 from './images/movieApp.png'
import html_icon from './images/Logo/html_logo.png'
import css_icon from './images/Logo/CSS3_logo.png'
import javascript_icon from './images/Logo/JavaScript_logo.png'
import react_icon from './images/Logo/ReactJS_logo.png'
import Cplus_icon from './images/Logo/c_plus.png'

function Skill1() {
    return (
        <section id='Skill_1'>
            <div className='Container'>
                <div className='title_section'>
                    <h4>Our Skills</h4>
                    <h2>What do we know ?</h2>
                </div>
                <div className='skills'>
                    <div className='skill1'>
                        <div className='icon_box'>
                            <img src={html_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>HTML</p>
                    </div>

                    <div className='skill1'>
                        <div className='icon_box'>
                            <img src={css_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>CSS</p>
                    </div>

                    <div className='skill1'>
                        <div className='icon_box'>
                            <img src={javascript_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>JavaScript</p>
                    </div>

                    <div className='skill1'>
                        <div className='icon_box'>
                            <img src={react_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>React JS</p>
                    </div>

                    <div className='skill1'>
                        <div className='icon_box'>
                            <img src={Cplus_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>C++</p>
                    </div>

                    <div className='skill1'>
                        <div className='icon_box'>
                            <img src={css_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>CSS</p>
                    </div>


                    <div className='skill1'>
                        <div className='icon_box'>
                            <img src={html_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>HTML</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skill1