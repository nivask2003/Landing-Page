import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function AboutUs(){
    return(
        <>
        <div className="aboutus mt-5 container" id="aboutus">
        <h2 className="text-success text-center">About Us</h2>
        <div className="aboutus-content">
            <p>Hello, valued customer! We're delighted to welcome you to our store, where we pride ourselves on offering a diverse selection of high-quality products to meet your everyday needs. Our goal is to ensure that you find everything you're looking for under one roof, making shopping with us a convenient and enjoyable experience. In our store, you'll discover a wide range of products, from essential grocery items to an extensive variety of stationery goods, all carefully selected to provide value, quality, and satisfaction. Whether you’re here to stock up on household staples, find the freshest ingredients for your next meal, or pick up supplies for school or office, we've got you covered. We’re constantly expanding our selection to bring you more of what you love, so take your time exploring, and let us know if there’s anything we can help you find. Thank you for choosing us, and we look forward to serving you!</p>
        </div>
        </div>
        </>
    );
}