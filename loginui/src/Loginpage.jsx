import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import  imglog from '../src/assets/Images/Loginpic.png'


const Loginpage = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Save user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('User signed up successfully!', userData);
    navigate('/login'); // Navigate to the login page
  };
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Sign up</h2>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
        <form className="login-form" onSubmit={handleSignup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="signup-img">
          <img src={imglog} alt="Signup Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;