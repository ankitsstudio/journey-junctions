import React from 'react'
import "./TripStyles.scss"
import TripData from "./TripData"
import des1 from "../assets/Mysure.jpg"
import des2 from "../assets/Hydrabad.jpg"
import des3 from "../assets/Taj.jpg"

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>Traveling is not just about reaching a destination; it's about the experiences, memories, and personal growth that accompany each journey.</p>
      <div className='tripcard'>
        <TripData 
            image={des1}
            heading= "Trip to Mysore"
            text="A trip to Mysore is a captivating experience filled with historical and cultural treasures. Explore the grandeur of Mysore Palace, witness the mesmerizing illumination at night, and indulge in the vibrant markets. Immerse yourself in the rich heritage, visit iconic landmarks, and savor the unique flavors of Mysorean cuisine."
        />
        <TripData 
            image={des2}
            heading= "Trip to Hydrabad"
            text="A trip to Hyderabad offers a delightful blend of history, culture, and modernity. Explore the magnificent Charminar, visit the iconic Golconda Fort, and indulge in the delectable Hyderabadi cuisine. Explore the bustling bazaars, witness the vibrant arts scene, and experience the warm hospitality of this enchanting city."
        />
        <TripData 
            image={des3}
            heading= "Trip to Taj Mahal"
            text="A trip to Agra is a journey into the majestic world of Mughal architecture. Marvel at the awe-inspiring beauty of the iconic Taj Mahal, explore the grandeur of Agra Fort, and immerse yourself in the rich history and culture of this historic city. Agra is a must-visit destination for history enthusiasts and romantics alike."
        />
      </div>
    </div>
  )
}

export default Trip
