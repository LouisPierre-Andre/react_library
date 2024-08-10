import React from 'react'
import './Skill2.css'
import bg_portfolio1 from './images/quizeApp.png'
import bg_portfolio2 from './images/transport.png'
import bg_portfolio3 from './images/movieApp.png'
import html_icon from './images/Logo/html_logo.png'
import css_icon from './images/Logo/CSS3_logo.png'
import javascript_icon from './images/Logo/JavaScript_logo.png'
import react_icon from './images/Logo/ReactJS_logo.png'
import Cplus_icon from './images/Logo/c_plus.png'

function Skill2() {
    return (
        <section id='Skill_2'>
            <div className='Container'>
                <div className='title_section'>
                    <h4>Our Skills</h4>
                    <h2>What do we know ?</h2>
                </div>
                <div className='skills'>
                    <div className='section1'>
                        <div className='skill'>
                            <div className='description'>
                                <p>HTML</p>
                                <p>90%</p>
                            </div>
                            <div className='range_box'>
                                <div className='range_bar'></div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='description'>
                                <p>JAVASCRIPT</p>
                                <p>80%</p>
                            </div>
                            <div className='range_box'>
                                <div className='range_bar'></div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='description'>
                                <p>MY SQL</p>
                                <p>70%</p>
                            </div>
                            <div className='range_box'>
                                <div className='range_bar'></div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='description'>
                                <p>PHOTOSHOP</p>
                                <p>60%</p>
                            </div>
                            <div className='range_box'>
                                <div className='range_bar'></div>
                            </div>
                        </div>
                    </div>

                    {/* -------------------------------------------------------------------------- */}


                    <div className='section1'>
                        <div className='skill'>
                            <div className='description'>
                                <p>CSS</p>
                                <p>90%</p>
                            </div>
                            <div className='range_box'>
                                <div className='range_bar'></div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='description'>
                                <p>REACT JS</p>
                                <p>80%</p>
                            </div>
                            <div className='range_box'>
                                <div className='range_bar'></div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='description'>
                                <p>ORACLE</p>
                                <p>70%</p>
                            </div>
                            <div className='range_box'>
                                <div className='range_bar'></div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='description'>
                                <p>ILLUSTRATOR</p>
                                <p>60%</p>
                            </div>
                            <div className='range_box'>
                                <div className='range_bar'></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skill2