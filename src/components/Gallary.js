import react from "react";
import detailing from './../assets/ai.png';
import img1 from './../assets/completion.png';
import img2 from './../assets/datacollection.png';
import img3 from './../assets/demoatconclave.png';
import img4 from './../assets/hand.png';
import img5 from './../assets/modelhand.png';
import img6 from './../assets/projectgrp.png';
import img7 from './../assets/smc.png';
import img8 from './../assets/sttp.png';
import img9 from './../assets/certi.png';
import img10 from './../assets/workshopbtech.png';
import img11 from './../assets/3dprinter.png';
import img12 from './../assets/certi.png';
import img13 from './../assets/hackathon.png';
import img14 from './../assets/treadmill.png';
import img15 from './../assets/cismrlogo.png';

export default function Gallary() {
    return (
        <div style={{ marginTop: "10px" }}>
            <h3 style={{backgroundColor:"blue", display:"flex", color:"white" , height:"100px" ,padding:"30px"}} className="flex flex:1 justify-content-center ">At a Glance</h3>
            <div className="row" style={{ backgroundColor: "black" }} >
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 " style={{ marginTop: "1.5%" }}>
                    <img
                        src={detailing}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img"
                    />
                    <img
                        src={img1}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                </div> <br/>

                <div className="col-lg-4 mb-4 mb-lg-0" style={{ marginTop: "1.5%" }}>
                    <img
                        src={img2}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />

                    <img
                        src={img3}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0" style={{ marginTop: "1.5%" }}>
                    <img
                        src={img11}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0" style={{ marginTop: "1.5%" }}>
                    <img
                        src={img4}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                    <img
                        src={img5}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={img15}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />

                    <img
                        src={img7}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={img8}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />

                    <img
                        src={img9}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={img10}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                    
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={img13}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />

                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={img14}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={img6}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="img" />
                </div>
            </div>
        </div>
    );
}