import React, { Component } from 'react'
// import img1 from "../assets/img1.jpg"
// import img4 from "../assets/img4.jpg"
// import img5 from "../assets/img5.jpg"
// import img6 from "../assets/img6.jpg"
import "./DestinationStyles.scss"

class DestinationData extends Component{
    render(){
        return(
            <div className='destination'>
            <div className={this.props.className}>
              <div className='des-text'>
                  <h2>{this.props.heading}</h2>
                  <p>{this.props.para}</p>
      
              </div>
              <div className='image'>
                  <img src={this.props.img1} alt="img" />
                  <img src={this.props.img4} alt="img" />
              </div>
            </div>
          </div>  
        )
    }
}

export default DestinationData
