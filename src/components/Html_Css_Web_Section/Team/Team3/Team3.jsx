import React from 'react'
import "./Team3.css"
import image1 from "./Images/team-1.jpg"
import image2 from "./Images/team-2.jpg"
import image3 from "./Images/team-3.jpg"
import image4 from "./Images/team-4.jpg"

function Team3() {
    return (
        <section id='Team_3'>
            <div className='team_container'>
                <div className='team_containt'>

                    <div className='title_section'>
                        <h1>Our awesome Team</h1>
                        <p className='desc'>Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.</p>
                    </div>

                    <div className='team_list'>

                        <div className='single_team'>
                            <div className='img_box'>
                                <img src={image1} alt='This is a profil picture of one of our team member' />
                            </div>
                            <div className='description'>
                                <h3>Pierre-Andre</h3>
                                <p>Web developer</p>
                                <div className='icons_section'>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-whatsapp"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                        </div>

                        <div className='single_team'>
                            <div className='img_box'>
                                <img src={image2} alt='This is a profil picture of one of our team member' />
                            </div>
                            <div className='description'>
                                <h3>Pierre-Andre</h3>
                                <p>Web developer</p>
                                <div className='icons_section'>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-whatsapp"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                        </div>

                        <div className='single_team'>
                            <div className='img_box'>
                                <img src={image3} alt='This is a profil picture of one of our team member' />
                            </div>
                            <div className='description'>
                                <h3>Pierre-Andre</h3>
                                <p>Web developer</p>
                                <div className='icons_section'>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-whatsapp"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                        </div>

                        <div className='single_team'>
                            <div className='img_box'>
                                <img src={image4} alt='This is a profil picture of one of our team member' />
                            </div>
                            <div className='description'>
                                <h3>Pierre-Andre</h3>
                                <p>Web developer</p>
                                <div className='icons_section'>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-whatsapp"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                        </div>



                    </div>


                </div>
            </div>
        </section>
    )
}

export default Team3