import React from 'react'
import './Login.css'


const Loginpage = () => {
  return (
   <div className='signup-container'>
    <div className='signup-card'>
      <div className='signup-header'>
        <h2>Sign up</h2>
        <p>Already have an account? <a href='/login'> Login here</a></p>
      </div>
      <form className='login-form' >
        <label htmlFor='Name'>Name</label>
        <input type="text" id='Name' placeholder='Enter your name'></input><br></br>
        <label htmlFor='Email'>Email</label>
        <input type="email" id='email' placeholder='Enter your email address'></input><br></br>
        <label htmlFor='password'>Password</label>
        <input type="password" id='password' placeholder='Enter your password'></input>

        <div className='signupbox'>
          <input type='checkbox' id='checkbox'/>
          <label id='checkid' htmlFor='agree'>
          By signing up, you agree to receive updates and special offers.
          </label>
        </div>
        <button type="submit" className="signup-button">Submit</button>
      </form>
      <div className='signup-img'>
      <img src='./public/Loginpic.png'></img>
    </div>
    </div>
    
   </div>
  )
}
  

export default Loginpage