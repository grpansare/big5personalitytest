import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {setUser} from "../Store/UserSlice/UserSlice"

const LoginPage = () => {
  const [formData,setFormData]=useState({
    username:"",
    password:""
  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData((prev)=>({
       ...prev,[name]:value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
        const res = await axios.post('/user/signin', formData,{ withCredentials: true });
        console.log(res);
         
        if (res.data.success) {
              console.log(res.data.rest);
              
             dispatch(setUser(res.data.rest))
            Swal.fire({
                title: 'Login Successful!',
                text: 'Welcome back! Redirecting to your dashboard...',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/'); // Update the path to your desired page after login
            });
        } else {
            Swal.fire({
                title: 'Login Failed!',
                text: res.data.message || 'Invalid credentials, please try again.',
                icon: 'error',
                confirmButtonText: 'Retry'
            });
        }
    } catch (err) {
        console.log(err);

        // Handle server-side error
        if (err.response && err.response.data) {
            Swal.fire({
                title: 'Login Failed!',
                text: err.response.data.message || 'An error occurred, please try again.',
                icon: 'error',
                confirmButtonText: 'Retry'
            });
        } else {
            // Handle network or other unexpected errors
            Swal.fire({
                title: 'Error!',
                text: 'Unable to connect to the server. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Retry'
            });
        }
    }
};

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Image Section */}
        <div className="image-section">
          <img
            src="/big-five-personality.webp" 
            alt="Welcome"
            className="welcome-image "
          />
        </div>

        {/* Form Section */}
        <div className="form-section">
          <h5>🧠<br/> BIG 5<br/>PERSONALITY TEST</h5>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="input-group flex items-center">
              <input
                type="text"
                name='username'
                onChange={handleChange}
                placeholder="Username"
                className="input-box mb-3"
                required
              />
              <span className="icon user-icon">👤</span>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <input
                name='password'
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="input-box mb-3"
                required
              />
              <span className="icon lock-icon">🔒</span>
            </div>

            {/* Login Button */}
            <button type="submit"   className="login-button">
              <i className="button-icon">🔑</i> Login
            </button>

            {/* Links */}
            <div className="login-links">
         
              <NavLink to="/forgetpassword" className="text-blue-500 ml-2 font-bold">Forgot Password?</NavLink>
              
              <NavLink to="/signup" className="text-blue-500 ml-2 font-bold">New User ? Register Here</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
