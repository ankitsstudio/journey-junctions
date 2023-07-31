import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img3 from "../assets/img4.jpg"
import Footer from '../components/Footer'
import ContactForm from "../components/Contact"


const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero 
        cName="hero-mid" 
        heroImg={img3}
        title="Contact Us" 
        btnClass="hide" 
    />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact
