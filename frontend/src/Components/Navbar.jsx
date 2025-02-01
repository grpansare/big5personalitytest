import './Navbar.css'

import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { FaArrowRight, FaBrain, FaEnvelope, FaHome, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className=" flex items-center text-white  w-full bg-gray-700 " >
 <div className="mx-auto flex border w-full px-4 py-1  items-center justify-between   h-full">


        <div className="inline-flex lg:text-lg text-sm font-mono items-center ">
        <FaBrain className="me-2 " size={28} /> {/* Add an icon with spacing */}
        Big Five Personality Test
        </div>
        <div className="hidden grow justify-end  items-center lg:flex">
          <ul className="ml-12 inline-flex mt-3  items-center space-x-5">
          <motion.li
                whileHover={{
                  scale: 1.1,
                  background: "linear-gradient(90deg, #43cea2, #185a9d)",
                  color: "#fff",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="rounded"
              >
                <NavLink
                  to="/"
                  className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaHome className="me-2" /> Home
                </NavLink>
              </motion.li>

              {/* About the Test */}
              <motion.li
                whileHover={{
                  scale: 1.1,
                  background: "linear-gradient(90deg, #43cea2, #185a9d)",
                  color: "#fff",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="rounded"
              >
                <NavLink
                  to="/about"
                  className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaInfoCircle className="me-2" /> About the test
                </NavLink>
              </motion.li>

              {/* Take the Test */}
              <motion.li
                whileHover={{
                  scale: 1.1,
                  background: "linear-gradient(90deg, #43cea2, #185a9d)",
                  color: "#fff",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="rounded"
              >
                <NavLink
                  to="/test"
                  className="text-white d-flex justify-content-center align-items-center rounded px-2 py-2"
                  style={{ textDecoration: "none" }}
                >
                  Take the Test
                  <FaArrowRight className="ms-2" />
                </NavLink>
              </motion.li>

              

             

              {/* Contact Us */}
              <motion.li
                whileHover={{
                  scale: 1.1,
                  background: "linear-gradient(90deg, #43cea2, #185a9d)",
                  color: "#fff",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="rounded"
              >
                <NavLink
                  to="/contact"
                  className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaEnvelope className="me-2" /> Contact Us
                </NavLink>
              </motion.li>
              <NavLink
            to="/signup"
            className="rounded-md bg-transparent text-decoration-none text-white px-3 py-2 text-sm font-semibold  hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Sign Up
          </NavLink>
     

<Button 
  component={Link} 
  to="/login" 
  variant="outlined" 
   color="white">
  Login
</Button>


            
          </ul>
         
        </div>
        <div className="hidden space-x-2 lg:block">
         
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex text-black text-sm items-center space-x-2">
                  <FaBrain className="me-2 " size={28} /> {/* Add an icon with spacing */}
                  Big Five Personality Test
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                  
         
                <NavLink
                  to="/"
                  className=" d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaHome className="me-2" /> Home
                </NavLink>
             

            
                <NavLink
                  to="/about"
                  className=" d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaInfoCircle className="me-2" /> About the test
                </NavLink>
             

                <NavLink
                  to="/test"
                  className=" d-flex justify-content-center align-items-center rounded px-2 py-2"
                  style={{ textDecoration: "none" }}
                >
                  Take the Test
                  <FaArrowRight className="ms-2" />
                </NavLink>
            

              

             

                <NavLink
                  to="/contact"
                  className=" d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaEnvelope className="me-2" /> Contact Us
                </NavLink>
           
             
         
            

                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <button
                    type="button"
                    className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
