import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import{
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
} from '../assets/Gallery/index';

export default function Gallery(){
    return(
        <>
        <div className="gallery mt-5 container" id="gallery">
            <h2 className="text-success text-center">Gallery</h2>
            <div className="content mt-3">
                <div className="d-flex">
                    <img src={img1} alt="img1" className="img-fluid"/>
                    <img src={img2} alt="img1" className="img-fluid"/>
                    <img src={img3} alt="img1" className="img-fluid"/>
                </div>
                <div className="d-flex mt-3">
                    <img src={img4} alt="img1" className="img-fluid"/>
                    <img src={img5} alt="img1" className="img-fluid"/>
                    <img src={img6} alt="img1" className="img-fluid"/>
                </div>
            </div>
        </div>
        </>
    );
}