import './Header.css'

import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaArrowRight,FaUser,FaDoorOpen, FaBrain, FaChevronDown, FaEnvelope, FaHome, FaInfoCircle, FaSignInAlt, FaDoorClosed } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Logout } from '../Store/UserSlice/UserSlice';
import axios from 'axios'



 function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const {currentUser}=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  console.log(currentUser);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const small_screen_logout=async()=>{

    toggleMenu()
       
       Swal.fire({
        title: 'Are you sure you want to logout?',
        text: "You will be logged out of your account.",
        icon: 'warning',
        showCancelButton: true, // Display the cancel button
        confirmButtonColor: '#3085d6', // Color for the confirm button
        cancelButtonColor: '#d33',    // Color for the cancel button
        confirmButtonText: 'Yes, Logout',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
          logoutfunc()
          dispatch(Logout())
            Swal.fire(
                'Logged Out!',
                'You have been logged out successfully.',
                'success'
            ).then(() => {
                navigate('/'); // Navigate to login or home page
            });
        }

    });
  }
  const logoutfunc=async()=>{
    const res=await axios.post('/user/logout', {}, { withCredentials: true });
  }
  const logout=async()=>{
  
    const res=await axios.post('/user/logout', {}, { withCredentials: true });
       Swal.fire({
        title: 'Are you sure you want to logout?',
        text: "You will be logged out of your account.",
        icon: 'warning',
        showCancelButton: true, // Display the cancel button
        confirmButtonColor: '#3085d6', // Color for the confirm button
        cancelButtonColor: '#d33',    // Color for the cancel button
        confirmButtonText: 'Yes, Logout',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
          dispatch(Logout())
            Swal.fire(
                'Logged Out!',
                'You have been logged out successfully.',
                'success'
            ).then(() => {
                navigate('/'); // Navigate to login or home page
            });
        }
    });
    
  }

  return (
    <div className="header flex items-center  text-white     w-full bg-gray-700 " >
 <div className="mx-auto flex  w-full px-4   items-center justify-between   h-full">


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

              {currentUser && 
               ( <>
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
                  to="/test-results"
                  className="text-white d-flex justify-content-center align-items-center rounded px-2 py-2"
                  style={{ textDecoration: "none" }}
                >
                 Test Results
                  <FaArrowRight className="ms-2" />
                </NavLink>
              </motion.li>
              
              
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
                  to="/instructions"
                  className="text-white d-flex justify-content-center align-items-center rounded px-2 py-2"
                  style={{ textDecoration: "none" }}
                >
                 Take the test
                  <FaArrowRight className="ms-2" />
                </NavLink>
              </motion.li>
              </>
               )
               }
              

             

              {/* Contact Us
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
              </motion.li> */}

              {currentUser ?  (<li
              
                className="rounded"
              >
     <Dropdown>
  

<Dropdown.Toggle
  variant=""
  id="dropdown-basic"
  bsPrefix="custom-dropdown-toggle" // Custom class to override default styles
  className="flex items-center gap-2 p-0 bg-transparent border-0"
>
  <div className="rounded-full py-2 px-3 bg-blue-300 text-black font-bold flex justify-center items-center">
    {currentUser?.fullname?.split(" ")[0].charAt(0)}
    {currentUser?.fullname?.split(" ")[1]?.charAt(0)}
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-4 h-4 text-gray-600"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
  </div>
</Dropdown.Toggle>




      <Dropdown.Menu>
        <Dropdown.Item >

          <NavLink to="/userprofile" className="text-decoration-none text-black">
                Profile
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item  onClick={()=>{logout()}}
        >Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              </li>)
              :
              (
                <div>
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
                 </div>
              
              )
            
            }
            
     




            
          </ul>
         
        </div>
        <div className="hidden space-x-2 lg:block">
         
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2  transition lg:hidden">
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
                <div className="mt-6 text-black">
                  <nav className="grid gap-y-4">
                  
         
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className=" d-flex justify-content-center text-black align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaHome className="me-2" /> Home
                </NavLink>
             

            
                <NavLink
                  to="/about"
                  onClick={toggleMenu}
                  className=" d-flex justify-content-center text-black  align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaInfoCircle className="me-2" /> About the test
                </NavLink>
             

                <NavLink
                  to="/instructions"
                  onClick={toggleMenu}
                  className=" d-flex justify-content-center text-black  align-items-center rounded px-2 py-2"
                  style={{ textDecoration: "none" }}
                >
                  Take the Test
                  <FaArrowRight className="ms-2" />
                </NavLink>
            

              

             

              
           
             
         
            

                  </nav>
                </div>

                {currentUser ?
                 (
                  <>
                  <NavLink
                  to="/test-results"
                  onClick={toggleMenu}
                  className=" d-flex justify-content-center text-black align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaUser className="me-2" /> Test Results
                </NavLink>
                  <NavLink
                  to="/userprofile"
                  onClick={toggleMenu}
                  className=" d-flex justify-content-center text-black align-items-center rounded px-3 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaUser className="me-2" /> Profile
                </NavLink>
                 <NavLink
                 
               
                 onClick={small_screen_logout}
                 className=" d-flex justify-content-center text-black align-items-center rounded px-3 py-2"
                 style={{ textDecoration: "none" }}
               >
                 <FaDoorOpen className="me-2" /> Logout
               </NavLink>
                     </>
                ) :
                (
                <div className="mt-2 space-y-2">
                  <Button
                    component={NavLink}
                    to="/signup"
                    className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Sign Up
                  </Button>
                  <Button
                       component={NavLink}
                    to="/login"
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Log In
                  </Button>
                </div>
                )
              }
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Header