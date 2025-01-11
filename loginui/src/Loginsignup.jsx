import React, { useState } from 'react';
import './Login.css';
import imglog from '../src/assets/Images/Loginpic.png';

const Loginsignup = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve user data from localStorage
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (
      savedUser &&
      savedUser.email === loginData.email &&
      savedUser.password === loginData.password
    ) {
      console.log('User logged in successfully!');
      window.location.href = 'https://bmw.com/en/digital-journey/evolution-of-the-bmw-idrive.html';
    } else {
      alert('Account not found. Please sign up first!');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Login</h2>
          <p>Don't have an account? <a href="/signup">Sign up here</a></p>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
        <div className="signup-img">
          <img src={imglog} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
