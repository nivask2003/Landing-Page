import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Header(){
    return(
        <>
        <div className="header-main container" id="home">
            <div className="banner">
                <div className="content text-white">
                    <h1>Murugan Stores</h1>
                    <p>Your Grocery Store</p>
                </div>
            </div>
        </div>
        </>
    );
}