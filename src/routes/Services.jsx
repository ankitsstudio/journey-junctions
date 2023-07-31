import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img13 from "../assets/img9.jpg"
import Footer from '../components/Footer'
import Trip from '../components/Trip'


const Services = () => {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid" 
        heroImg={img13} 
        title="Our Services" 
        btnClass="hide" 
    />
    <Trip/>
    <Footer/>
    </>
  )
}

export default Services

