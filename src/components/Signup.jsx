
import "./Signup.scss"
import React, { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [notification, setNotification] = useState('');
    const [signedUp, setSignedUp] = useState(false);

    


    const handleSignup = (e) =>{
      e.preventDefault();

      if (password !== confirm) {
        setNotification('Password and confirm password must match');
      } else if (password.length < 6) {
        setNotification('Password must be at least 6 characters long');
      } else {
        console.log('Sign up successful!');
        console.log('Email: ', email);
        console.log('Password: ', password);
        console.log('Confirm Password: ', confirm);
    
        setEmail('');
        setPassword('');
        setConfirm('');
        setNotification('');
        setSignedUp(true);
        alert('Successfully Signed Up');
      }
    };
  return (
    <div>
    {signedUp ? (
      <div>
        <h2>Sign Up</h2>
        <p>You have successfully signed up!</p>
      </div>
    ) : (
    <div>
    
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Password">Password : </label>
          <input
            placeholder="Password should be of atleast 6 characters"
            type="Password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Confirm" >Confirm Password : </label>
          <input
            placeholder="Must be same as password"
            type="Password"
            id="confirm"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>
        {notification && <p className="notification">{notification}</p>}
        <button type='submit' className="signup-btn" 
        // onClick={
        //   ()=>{
        //     alert("Successfully Signed Up");
        //   }
        // }
        >Sign Up</button>
      </form>
    </div>
    )}
    </div>
  );
};

export default Signup
