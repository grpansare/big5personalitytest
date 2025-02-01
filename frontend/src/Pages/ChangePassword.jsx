import React, { useState } from 'react';
import axios from 'axios';
import './ChangePassword.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation();
  const email = location.state?.email;
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    try {
      // Send request to the backend to update the password
      const response = await axios.post('/user/changepassword', {
        password,userEmail:email
      });
      setSuccess(response.data.msg || 'Password changed successfully!');
      navigate('/Login')

    } catch (err) {
      console.log(err);
      setError(
        err.response && err.response.data
          ? err.response.data
          : 'Something went wrong!'
      );
    }
  };

  return (
    <div className="change-password-container ">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Update Password
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default ChangePassword;
