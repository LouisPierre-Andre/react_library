// Carousel.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Carousel.css'; // Assurez-vous d'ajouter les styles personnalisés dans ce fichier

const Carousel = () => {
    return (
        <div className="relative">
            <div id="carouselId" className="carousel slide relative">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active relative">
                        <img src="img/carousel-1.jpg" className="d-block w-full h-screen object-cover" alt="Image 1" />
                        <div className="carousel-caption absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-60">
                            <div className="p-4 max-w-2xl mx-auto">
                                <h4 className="text-white text-uppercase font-bold mb-3 text-lg md:text-xl">Solution For All Type Of Visas</h4>
                                <h1 className="text-white text-4xl md:text-6xl font-bold mb-3">Immigration Process Starts Here!</h1>
                                <p className="text-white mb-4 text-base md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <a className="btn btn-primary rounded-full text-white py-3 px-5" href="#">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item relative">
                        <img src="img/carousel-2.jpg" className="d-block w-full h-screen object-cover" alt="Image 2" />
                        <div className="carousel-caption absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-60">
                            <div className="p-4 max-w-2xl mx-auto">
                                <h5 className="text-white text-uppercase font-bold mb-3 text-lg md:text-xl">Solution For All Type Of Visas</h5>
                                <h1 className="text-white text-4xl md:text-6xl font-bold mb-3">Best Visa Immigrations Services</h1>
                                <p className="text-white mb-4 text-base md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <a className="btn btn-primary rounded-full text-white py-3 px-5" href="#">More Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item relative">
                        <img src="img/carousel-2.jpg" className="d-block w-full h-screen object-cover" alt="Image 2" />
                        <div className="carousel-caption absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-60">
                            <div className="p-4 max-w-2xl mx-auto">
                                <h5 className="text-white text-uppercase font-bold mb-3 text-lg md:text-xl">Solution For All Type Of Visas</h5>
                                <h1 className="text-white text-4xl md:text-6xl font-bold mb-3">Best Visa Immigrations Services</h1>
                                <p className="text-white mb-4 text-base md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <a className="btn btn-primary rounded-full text-white py-3 px-5" href="#">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
