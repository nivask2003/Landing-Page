import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function ContactUs(){
    return(
        <>
        <div className="contactus container mt-5" id="contactus">
            <h2 className="text-center text-success">Contact Us</h2>
            <div className="d-flex mt-3">
                <div className="address-bar me-3">
                    <div className="d-flex">
                        <div className="bg-success p-2 me-3">
                            <i class="material-icons text-white">location_on</i>
                        </div>
                        <div className="address-content">
                            <p>250, Erikarai St, Velmurugan Nagar, Namachivaya Nagar, Madurai, Tamil Nadu 625022</p>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="bg-success p-2 me-3">
                            <i class="material-icons text-white">call</i>
                        </div>
                        <div className="phone-content">
                            <p>+91 9244390457, +91 9597416084</p>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="bg-success p-2 me-3">
                            <i class="material-icons text-white">mail</i>
                        </div>
                        <div className="phone-content">
                            <p>storemurugan2024@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="map-area">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15720.972609827757!2d78.0711295!3d9.9136959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf0534a4ad6f%3A0x517844f88575cd24!2sMurugan%20Store!5e0!3m2!1sen!2sin!4v1730617608757!5m2!1sen!2sin" frameborder="0"></iframe>
                </div>
            </div>
        </div>
        </>
    )
}