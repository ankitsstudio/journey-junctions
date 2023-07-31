import React, { Component } from 'react';
import "./NavbarStyles.scss";
// import { a } from "react-router-dom";
import { MenuItems } from "./MenuItems"
import { Link } from 'react-router-dom';




class Navbar extends Component {
    state ={clicked:false};
    handleClick = () =>{
        this.setState ({clicked: !this.state.clicked})
    }

  render() {
    return (
    <nav className='navbaritems'>
       <h1 className='navbar-logo'>Journey Junctions</h1>
       <div className='menu-icons' onClick={this.handleClick}>
           <i className={this.state.clicked?"fas fa-times bar":"fas fa-bars bar"}></i>
       </div>
       <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
        {
          MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link to={item.url}   
                             className={item.cName}>
                               <i className={item.icon} ></i>{item.title}
                            </Link>
                        </li>
                    )
                }
            )
        }
        
        {/* <Link to={SignUp}   
            className="nav-links-mobiles">
            <i className="fa-solid fa-address-book" ></i>
            Sign Up
        </Link> */}
        {/* <button className='signup-btn' onClick={SignUp}>Sign Up</button> */}


       </ul>
    </nav>
  );
 }
}

export default Navbar;
