import React from 'react'
import "./Team1.css"
import member_img from "./Images/team1.jpg"

function Team1() {
    return (
        <section id='Team_1'>
            <div className='Team_container'>
                <div className='team_containt'>
                    <h2>OUR TEAM___</h2>
                    <div className='member_list'>

                        <div className='single_member'>
                            <div className='top'>
                                <img src={member_img} />
                                <div className='media'>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-whatsapp"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                            <div className='buttom'>
                                <h3>JOHN MARTIN</h3>
                                <p>CRIMINAL LAW</p>
                            </div>
                        </div>

                        <div className='single_member'>
                            <div className='top'>
                                <img src={member_img} />
                                <div className='media'>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-whatsapp"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                            <div className='buttom'>
                                <h3>JOHN MARTIN</h3>
                                <p>CRIMINAL LAW</p>
                            </div>
                        </div>

                        <div className='single_member'>
                            <div className='top'>
                                <img src={member_img} />
                                <div className='media'>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-whatsapp"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                            <div className='buttom'>
                                <h3>JOHN MARTIN</h3>
                                <p>CRIMINAL LAW</p>
                            </div>
                        </div>

                        <div className='single_member'>
                            <div className='top'>
                                <img src={member_img} />
                                <div className='media'>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-whatsapp"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                            <div className='buttom'>
                                <h3>JOHN MARTIN</h3>
                                <p>CRIMINAL LAW</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team1