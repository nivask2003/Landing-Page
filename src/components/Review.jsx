import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
    review1,
    review2,
    review3
} from '../assets/Reviews';

export default function Review(){
    return(
        <>
            <div className="review container mt-5" id="review">
                <h2 className="text-success text-center">Review</h2>
                <div className="d-flex mt-3">
                    <div className="card">
                        <img src={review1} alt="review1" className="img-fluid" />
                    </div>
                    <div className="card">
                        <img src={review2} alt="review1" className="img-fluid" />
                    </div>
                    <div className="card">
                        <img src={review3} alt="review1" className="img-fluid" />
                    </div>
                    
                </div>
            </div>
        </>
    );
}
