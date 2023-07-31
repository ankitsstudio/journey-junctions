import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <div className='form-container'>
    <h1>Send a message to us!</h1>
      <form>
        <input placeholder='Name' type="text" />
        <input placeholder='Email' type="email" />
        <input placeholder='Phone No' type="number" />
        <textarea placeholder="Feedback" rows="4"></textarea>
        <button type='submit' onClick={()=>{
          alert("Your details has been send!")
        }}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
