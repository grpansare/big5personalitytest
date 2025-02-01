import { TextField } from '@mui/material';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen bg-gray-100">
      {/* Row Container */}
      <div className="flex flex-wrap w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-slate-200 flex flex-col justify-center items-center p-6 text-center">
          <h4 className="text-2xl font-semibold font-serif text-black mb-6">
            Have questions or feedback about our 
            <br /> Big Five Personality Test? We're here to help!
          </h4>
          <div className="flex flex-col items-center gap-4 text-gray-700">
            {/* Email Info */}
            <div className="flex items-center gap-3">
              <FaEnvelope size={20} />
              <span>support@bigfive.com</span>
            </div>
            {/* Phone Info */}
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={20} />
              <span>+123 456 7890</span>
            </div>
            {/* Address Info */}
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt size={20} />
              <span>123 Personality Lane, Mind City</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
          <h3 className="text-2xl font-bold mb-5 text-gray-700">Contact Us</h3>
          <form action="" className="flex flex-col p-4 gap-4 w-full">
            {/* Name Field */}
            <TextField 
              id="name" 
              label="Name" 
              variant="standard" 
              fullWidth 
            />
            {/* Email Field */}
            <TextField 
              id="email" 
              label="Email" 
              variant="standard" 
              fullWidth 
            />
            {/* Message Field */}
            <TextField 
              id="message" 
              label="Message" 
              variant="standard" 
              multiline 
              rows={3} 
              fullWidth 
            />
            {/* Submit Button */}
            <button 
              type="submit" 
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition flex items-center justify-center gap-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
