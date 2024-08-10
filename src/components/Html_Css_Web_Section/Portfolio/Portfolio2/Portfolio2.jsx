import React from 'react'
import './Portfolio2.css'
import project1_img from './images/movieApp.png'
import project2_img from './images/hotel1.png'
import project3_img from './images/quizeApp.png'

function Portfolio2() {
    return (
        <section id='Portfolio_2'>
            <div className='Container'>
                <div className ='title_project_box'>
                    <div className='title_section'>
                        <h2>Latest Projects</h2>
                    </div>

                    <div className='project project1'>
                        <div className='project_title'>
                            <div className='title'>
                                <h3>PlantShop Landing Page Design</h3>
                                <p>Web/Landing Page</p>
                            </div>
                            <div className='Link_icon'></div>
                        </div>
                        <div className='img_box'>
                            <img src={project1_img} alt='This is a portfolio project screen shot' />
                        </div>
                    </div>

                </div>


                <div className='project1_2'>
                    <div className='project project2'>
                        <div className='project_title'>
                            <div className='title'>
                                <h3>PlantShop Landing Page Design</h3>
                                <p>Web/Landing Page</p>
                            </div>
                            <div className='Link_icon'></div>
                        </div>
                        <div className='img_box'>
                            <img src={project2_img} alt='This is a portfolio project screen shot' />
                        </div>
                    </div>

                    <div className='project project3'>
                        <div className='project_title'>
                            <div className='title'>
                                <h3>PlantShop Landing Page Design</h3>
                                <p>Web/Landing Page</p>
                            </div>
                            <div className='Link_icon'></div>
                        </div>
                        <div className='img_box'>
                            <img src={project3_img} alt='This is a portfolio project screen shot' />
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Portfolio2