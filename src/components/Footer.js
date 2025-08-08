import React from "react";
import './footer.css'
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
    return (
        <>
            <br />
            <br />
            <br />
            <div className="container-fluid bg-dark text-light py-4" style={{ color: "white" }}>
                <div className="row text-center text-md-start">
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <h5 className="fw-bold">About Us</h5><hr />
                        <p className="mb-0">We are interested in using computer vision and Machine Learning [Deep Learning,
                            Generative Models, Adversarial Learning and Reinforcement Learning ] to solve real world
                            problems . We are associated in the area of Motion [Gait] Analysis , Prediction Models ,
                            Object detection and tracking,Natural Language Processing , Biometric Recognition and Machine
                            Learning.</p>
                    </div>
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <h5 className="fw-bold text-center">Quick Links</h5><hr />
                        <ul className="list-unstyled">
                            <li><a href="google.com" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="google.com" className="text-light text-decoration-none">Projects</a></li>
                            <li><a href="google.com" className="text-light text-decoration-none">Publications</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <h5 className="fw-bold">Contact</h5><hr />
                        <p classNameName="mb-0">Email: cse.cprakash@gmail.com <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                            akd_jrf@coed.svnit.ac.in<br /><br />Phone: + 91-7568599806 </p>
                    </div>
                    <p>&nbsp;</p>
                </div>
                <p>&nbsp;</p>
                <div style={{ textAlign: "center" }}> This website belongs to <b>COMPUTATIONAL INTELLIGENCE & SMART MOTION
                    RESEARCH LAB - SVNIT </b>
                    <p><u>Content owned and updated by CISMR</u></p>
                </div>
                <div>
                    <div style={{ textAlign: "center", marginTop: 12 }}>
                        <a
                            href="https://www.instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-icon"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="mailto:cse.cprakash@gmail.com"   // <- replace with your email
                            className="footer-icon"
                            aria-label="Email"
                        >
                            <MdEmail />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            aria-label="LinkedIn"
                            className="footer-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            aria-label="YouTube"
                            className="footer-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube />
                        </a>

                    </div>

                </div>
            </div>
        </>
    );
}