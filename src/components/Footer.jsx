import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <>
            <div className="footer bg-success p-3 mt-5">
                <p className="text-white">&copy; {`${year}`} Murugan Stores. All rights reserved</p>
            </div>
        </>
    );
}