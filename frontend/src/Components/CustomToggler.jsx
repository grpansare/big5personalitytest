import React, { useState } from 'react';
import './CustomToggler.css'
import { FaBars } from 'react-icons/fa';

const CustomToggler = ({isOpen,toggleMenu}) => {


  return (
    <div className="navbar-toggler text-center border text-white flex justify-center" onClick={toggleMenu}>
    {isOpen?" X":   <FaBars color='white'/> }  
  
    </div>
  );
};

export default CustomToggler;
