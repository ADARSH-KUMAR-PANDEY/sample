import React from "react";
import './../style.css';
import svnitLogo from './../assets/svnitlogo.png';
import cismrLogo from './../assets/cismrlogo.png';
import Nav2 from './Nav2'
export default function Header(){
    return(
        <>
            <div className="container-fluid">
            <div className="row align-items-center text-center flex-shrink-1 py-2">
                <div className="col-4 col-sm-3 col-md-2">
                    <img src={cismrLogo} alt="CISMR Logo" className="img-fluid" id="cismr"/>
                </div>
                <div className="col-4 col-sm-6 col-md-8 text-center  responsive-heading-container">
                    <h2 className="responsive-heading">
                        COMPUTATIONAL INTELLIGENCE & SMART MOTION RESEARCH LAB - CISMR
                    </h2>
                </div>
                <div className="col-4 col-sm-3 col-md-2">
                    <img src={svnitLogo} alt="SVNIT Logo" className="img-fluid" id="svnit"/>
                </div>
            </div>
        </div>
        <Nav2 />
        </>
    );
}