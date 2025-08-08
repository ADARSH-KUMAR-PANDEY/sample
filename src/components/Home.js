import img1 from './../assets/sttp.png';
import img2 from './../assets/datacollection.png';
import img3 from './../assets/demoatconclave.png';
import img4 from './../assets/hand.png';
import img5 from './../assets/modelhand.png';
import img6 from './../assets/projectgrp.png';
import img7 from './../assets/smc.png';
import img8 from './../assets/workshopbtech.png';
import img9 from './../assets/hackathon.png';

import react from "react";
export default function Home() {
    return (
        <>
            <div className="notice-banner bg-warning text-dark py-2 px-3 overflow-hidden">
                <div className="scroll-text">
                    ⚡ Important Notice: CISMR Project is going to launch its official website.
                </div>
            </div>
            <div className="container-fluid">
                <div className="row gx-1 py-3">
                    <div className="col-12 col-lg-8 mb-3">
                        <div id="carouselExampleCaptions"
                            className="carousel slide" data-bs-pause="hover"
                            data-bs-interval="2000" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                                    aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                                    aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"
                                    aria-label="Slide 7"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7"
                                    aria-label="Slide 8"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8"
                                    aria-label="Slide 9"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={img1} className="d-block w-100 img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img2} className="d-block w-100 img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img3} className="d-block w-100 img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img4} className="d-block w-100 img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img5} className="d-block w-100 img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img6} className="d-block w-100 img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img7} className="d-block w-100 img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img8} className="d-block w-100 img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img9} className="d-block w-100 img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}