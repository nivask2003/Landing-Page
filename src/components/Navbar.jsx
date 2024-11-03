import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from '../assets/logo.jpg';

export default function Navbar(){
    return(
        <>
        <div className="header container-fluid p-3">
            <div className="row">
                <div className="col-12 col-md-6 d-flex">
                    <img src={logo} alt="" className="logo me-3"/>
                    <h1 className="text-success">Murugan Stores</h1>
                </div>
                <div className="col-12 col-md-6">
                    <ul className="navbar text-success">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#gallery" className="nav-link">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a href="#review" className="nav-link">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a href="#aboutus" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contactus" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}