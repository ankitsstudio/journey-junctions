import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img2 from "../assets/img10.jpg"
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
        <Hero 
            cName="hero" 
            heroImg={img2} 
            title="Your Journey Your Story" 
            text="Choose Your Favourite Destination" 
            buttonText="Journey Plan" 
            url="/" 
            btnClass="show" 
        />
        <Destination />
        <Trip/>
        <Footer/>
    </>
  )
}

export default Home
