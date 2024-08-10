import React from 'react'
import './Team4.css'
import profil1 from './Images/team-1.jpg'
import profil2 from './Images/team-2.jpg'
import profil3 from './Images/team-3.jpg'
import profil4 from './Images/team-4.jpg'

function Team4() {
    return (
        <section id='Team_4'>
            <div className='Container'>
                <div className='title_section'>
                    <h2>Our People And Leadership</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, dolorem totam laborum debitis corporis voluptate animi harum magnam aspernatur, vero illo suscipit porro nostrum rem ipsam. Ipsum sapiente modi voluptas sed quibusdam mollitia repudiandae, dicta consequatur. Libero blanditiis asperiores vel repellendus expedita earum. Ratione ullam quaerat vitae debitis voluptate.</p>
                    <div className='btn_section'><button>LEARN MORE</button></div>
                </div>
                <div className='team_box'>

                    <div className='section1'>
                        <div className='team1'>
                            <div className='img_box'>
                                <img src={profil1} alt='This is a team menber profil image' />
                            </div>
                            <h3>Pierre Andre</h3>
                            <p>Developer</p>
                            <div className='icon_section'>
                                <div className='icon1'></div>
                                <div className='icon1'></div>
                                <div className='icon1'></div>
                            </div>
                        </div>
                        <div className='team1'>
                            <div className='img_box'>
                                <img src={profil2} alt='This is a team menber profil image' />
                            </div>
                            <h3>Pierre Andre</h3>
                            <p>Developer</p>
                            <div className='icon_section'>
                                <div className='icon1'></div>
                                <div className='icon1'></div>
                                <div className='icon1'></div>
                            </div>
                        </div>
                    </div>

                    <div className='section1'>
                        <div className='team1'>
                            <div className='img_box'>
                                <img src={profil3} alt='This is a team menber profil image' />
                            </div>
                            <h3>Pierre Andre</h3>
                            <p>Developer</p>
                            <div className='icon_section'>
                                <div className='icon1'></div>
                                <div className='icon1'></div>
                                <div className='icon1'></div>
                            </div>
                        </div>
                        <div className='team1'>
                            <div className='img_box'>
                                <img src={profil4} alt='This is a team menber profil image' />
                            </div>
                            <h3>Pierre Andre</h3>
                            <p>Developer</p>
                            <div className='icon_section'>
                                <div className='icon1'></div>
                                <div className='icon1'></div>
                                <div className='icon1'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Team4