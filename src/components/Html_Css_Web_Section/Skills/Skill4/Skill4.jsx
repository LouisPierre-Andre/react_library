import React from 'react'
import "./Skill4.css"
import html_logo from "./Images/html_logo.png"
import css_logo from "./Images/CSS3_logo.png"
import Bootstrap from './Images/Bootstrap_logo.png'
import illustrator from './Images/Illustrator_Logo.png'
import JavaScript from './Images/JavaScript_logo.png'
import MySQL from './Images/MySQL_Logo.png'
import photoshop from "./Images/Photoshop_Logo.png" 
import React_logo from "./Images/ReactJS_logo.png"
import java from './Images/java.png'
import oracle from './Images/oracle.png'
import c_plus from './Images/c_plus.png'
import cisco from './Images/Cisco.png'
import bg_img from "./Images/hero_page2.png"

function Skill4() {
    return (
        <section id='Skill_4'>

            <div className='service_container'>
                <div className='service_containt'>
                    <h2>My Skills</h2>
                    <div>
                        <div>
                            <img src={html_logo} alt='Skills icone' />
                            <h4>HTML</h4>
                        </div>
                        <div>
                            <img src={css_logo} alt='Skills icone' />
                            <h4>CSS</h4>
                        </div>
                        <div>
                            <img src={JavaScript} alt='Skills icone' />
                            <h4>JAVASCRIPT</h4>
                        </div>
                        <div>
                            <img src={React_logo} alt='Skills icone' />
                            <h4>REACT JS</h4>
                        </div>
                        <div>
                            <img src={c_plus} alt='Skills icone' />
                            <h4>C++</h4>
                        </div>
                        <div>
                            <img src={java} alt='Skills icone' />
                            <h4>JAVA</h4>
                        </div>
                        <div>
                            <img src={MySQL} alt='Skills icone' />
                            <h4>MYSQL</h4>
                        </div>
                        <div>
                            <img src={oracle} alt='Skills icone' />
                            <h4>ORACLE</h4>
                        </div>
                        <div>
                            <img src={photoshop} alt='Skills icone' />
                            <h4>PHOTOSHOP</h4>
                        </div>
                        <div>
                            <img src={illustrator} alt='Skills icone' />
                            <h4>ILLUSTRATOR</h4>
                        </div>
                        <div>
                            <img src={Bootstrap} alt='Skills icone' />
                            <h4>BOOTSTRAP</h4>
                        </div>
                        <div>
                            <img src={cisco} alt='Skills icone' />
                            <h4>CISCO</h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skill4