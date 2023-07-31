import "./FooterStyles.scss"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
            <h1>Journey Junctions</h1>
            <p>Choose Your Favourite Destination</p>
        </div>
        <div>
            <a href="https://www.facebook.com/facebookIndia/?brand_redir=20531316728">
                <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://www.instagram.com/direct/t/119800286071831/">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/Kash902449ankit?t=5MBEH8cupFveZrTeShDCSg&s=08">
                <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/ankit-kashyap-42a48421a/">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
      </div>
      <div className="bottom">
         <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">Licence</a>
            <a href="/">All Versions</a>
         </div>
         <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Projects</a>
            <a href="/">Twitter</a>
         </div>
         <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">TroubleShooting</a>
            <a href="/">Contact Us</a>
         </div>
         <div>
            <h4>Others</h4>
            <a href="/">Terms of Services</a>
            <a href="/">Privacy Policy</a>
         </div>
      </div>
    </div>
  )
}

export default Footer
