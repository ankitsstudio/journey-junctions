import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img12 from "../assets/img12.jpg"
import Footer from '../components/Footer'
import Signup from "../components/Signup"


const SignUp = () => {
  return (
    <>
        <Navbar/>
        <Hero 
            cName="hero-mid" 
            heroImg={img12} 
            title="Sign Up" 
            btnClass="hide" 
        />
        <Signup/>
        <Footer/>
    </>
  )
}

export default SignUp
