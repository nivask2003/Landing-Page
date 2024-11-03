import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Review from "./components/Review";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App(){
  return(
    <>
    <Navbar />
    <Header />
    <Gallery /> 
    <Review />
    <AboutUs />
    <ContactUs />
    <Footer />
    </>
  );
}