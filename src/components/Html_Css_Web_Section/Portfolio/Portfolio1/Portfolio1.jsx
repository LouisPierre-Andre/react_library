import React from 'react'
import "./Portfolio1.css"
import quizeApp from "./images/quizeApp.png"
import ecommerce from "./images/ecommerce.png"
import movieApp from "./images/movieApp.png"
// import truck_line from "./images/truck_line.png"
// import whatsapp from "./images/whatsapp.png"
// import youtube from "./images/youtube.png"
import hotel from './images/hotel2.png'
import restaurant from './images/restaurant.png'
import transport from './images/transport.png'

function Portfolio1({ classs }) {
    return (
        <section id='Portfolio_1'>

            <div className={`portfolio_container ${classs}`}>
                <div className='portfolio_containt'>
                    <h2>My Portfolio</h2>
                    <div>
                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                                <div className='img_box'>
                                    <img src={hotel} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Hotel website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'> <button>Visite</button></a>
                        </div>
                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Transport/'>
                                <div className='img_box'>
                                    <img src={transport} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Moving website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Transport/'> <button>Visite</button></a>
                        </div>
                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Restaurant/'>
                                <div className='img_box'>
                                    <img src={restaurant} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Restaurant  website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Restaurant/'> <button>Visite</button></a>
                        </div>
                        <div>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/quiz-app'>
                                <div className='img_box'>
                                    <img src={quizeApp} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Quiz  App</h3>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/quiz-app'> <button>Visite</button></a>
                        </div>
                        <div>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/movie-trailer'>
                                <div className='img_box'>
                                    <img src={movieApp} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Movie App</h3>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/movie-trailer'> <button>Visite</button></a>
                        </div>
                        <div>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/ecommerce-web'>
                                <div className='img_box'>
                                    <img src={ecommerce} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>E-commerce Website</h3>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/ecommerce-web'> <button>Visite</button></a>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio1