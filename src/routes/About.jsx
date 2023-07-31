import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img8 from "../assets/img11.jpg"
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'

const About = () => {
  return (
    <>
        <Navbar/>
        <Hero 
            cName="hero-mid" 
            heroImg={img8} 
            title="About" 
            btnClass="hide" 
        />
        <Aboutus/>
        <Footer/>
    </>
  )
}

export default About
