import React from 'react'
import "./HeroStyles.scss"


const Hero = (props) => {
  return (
    <>
    <div className='props.cName'>
      <img src={props.heroImg} alt="hjgx" />

      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
    </div>
    </div>
    </>
  )
}

export default Hero
