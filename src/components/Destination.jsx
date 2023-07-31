import React from 'react'
import img1 from "../assets/img1.jpg"
import img4 from "../assets/img0.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import "./DestinationStyles.scss"
import DestinationData from './DestinationData'


const Destination = () => {
  
  return (
    <><div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours Gives You the Opportunity to see a lot, within a time frame</p>
      <DestinationData
        heading="Hawa Mahal, Jaipur, India"
        para="Hawa Mahal, located in Jaipur, India, is an architectural marvel and an iconic landmark of the city. Built in 1799, this stunning structure is known as the <palace of Winds> due to its intricate honeycomb-like facade with 953 small windows called jharokhas. These windows were designed to allow cool air to circulate throughout the palace, keeping it ventilated during hot summers. The five-story palace, made of red and pink sandstone, offers breathtaking views of the bustling streets below and the surrounding cityscape. It stands as a testament to the rich history and architectural grandeur of Jaipur, attracting visitors from around the world to admire its unique design and cultural significance."
        img1={img1}
        img4={img4}
        className="first-des"
      />
      <DestinationData
        heading="Golden Tempal, Amritsar, India"
        para="The Golden Temple, also known as Sri Harmandir Sahib, is a sacred Sikh shrine located in Amritsar, India. It is one of the most revered pilgrimage sites in Sikhism. The temple is adorned with exquisite gold leaf decorations, hence its name. The complex includes a stunning marble structure surrounded by a serene water tank known as the Amrit Sarovar. The Golden Temple welcomes people from all walks of life, providing a peaceful sanctuary for prayer, meditation, and community service. Its spiritual ambiance, architectural beauty, and the soothing atmosphere make it a must-visit destination for travelers seeking solace and cultural immersion."
        img1={img5}
        img4={img6}
        className="sec-des"
      />

      </div>
    </>
  )
}

export default Destination;

