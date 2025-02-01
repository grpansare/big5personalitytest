import React, { useState } from 'react';
import axios from 'axios';
import './Forgetpass.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
};

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState('');
  const [userOtp, setUserOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpSuccess, setOtpSuccess] = useState('');
  const navigate=useNavigate()

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOtp('');
    setUserOtp('');
    setOtpError('');
    setOtpSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setUserOtp('')

    try {
      const response = await axios.post('/user/sendemail', { email });
      setMessage(response.data.msg);
      setOtp(response.data.otp);
      handleOpen();
    } catch (err) {
      console.log(err);
      setError(
        err.response && err.response.data
          ? err.response.data
          : 'Something went wrong!'
      );
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (userOtp === otp) {
      setOtpSuccess('OTP verified successfully!');
      navigate("/changepassword", { state: { email } });
      setOtpError('');
    } else {
      setOtpError('Invalid OTP. Please try again.');
      setOtpSuccess('');
    }
  };

  return (
    <>
      <div className="forgot-password-container">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Send OTP
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>

      <Modal
  open={open}
  onClose={handleClose} // Keeps modal close functionality via ESC key or specific triggers
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  BackdropProps={{
    onClick: (e) => e.stopPropagation(), // Prevents the modal from closing on backdrop click
  }}
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
      width: '400px',
      maxWidth: '90%', // Responsive width
    }}
    onClick={(e) => e.stopPropagation()} // Prevent click events inside Box from propagating
  >
    {/* Close Button */}
    <button
      onClick={handleClose}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer',
      }}
      aria-label="Close modal"
    >
      &times;
    </button>

    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      <section className="wrapper">
        <div className="text-center">
          <form className="rounded bg-white p-5" onSubmit={handleOtpSubmit}>
            <h3 className="text-dark fw-bolder fs-4 mb-2">
           Otp Verification
            </h3>
            <div className="fw-normal text-muted mb-4">
              An OTP has been sent to <b>{email}</b>. Please check your inbox.
            </div>
            <div className="otp_input text-start mb-2">
              <label htmlFor="userOtp">Type your 6-digit security code</label>
              <input
                type="text"
                className="form-control mt-2"
                id="userOtp"
                placeholder="Enter OTP"
                value={userOtp}
                onChange={(e) => setUserOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary submit_btn my-4">
              Verify
            </button>
            {otpError && <p className="error-message">{otpError}</p>}
            {otpSuccess && <p className="success-message">{otpSuccess}</p>}
            <div className="fw-normal text-muted mb-2">
              Didn’t get the code?{' '}
              <button
                type="button"
                className="btn btn-link text-primary fw-bold text-decoration-none p-0"
                onClick={handleSubmit}
              >
                Resend
              </button>
            </div>
          </form>
        </div>
      </section>
    </Typography>
  </Box>
</Modal>





    </>
  );
};

export default ForgotPassword;
