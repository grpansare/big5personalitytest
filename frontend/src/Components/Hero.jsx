import React from 'react';
import './Hero.css'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux';
import { FaHandPeace, FaRegHandPeace } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Hero = () => {

  const {currentUser}=useSelector((state)=>state.user)

  return (
    <section className="hero py-10   bg-slate-200">
      <div className="container mx-auto flex mt-3 flex-col  md:flex-row items-center justify-between">
        {/* Text Content */}

        { currentUser ?
        (
          <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          whileInView="visible"
          viewport={{  amount: 0.5 }} 
          transition={{
            duration: 0.5, // Animation duration
            ease: "easeOut", // Easing function for smooth transition
          }}
      
      className="hero-text  text-center md:text-left md:w-1/2 px-4">
       <h1 className="text-4xl text-black text-center items-center justify-center flex gap-2 capitalize md:text-4xl font-serif font-bold leading-tight mb-4">
        Welcome  , {currentUser? currentUser.fullname : "User"}
       <FaHandPeace className="text-yellow-500 mr-2" />
      </h1>
      <h2 className="text-3xl text-gray-700 capitalize md:text-3xl font-serif font-semibold leading-tight mb-4">
        Discover Your Personality <br /> with the Big Five Personality Test
      </h2>
    
      <NavLink
  to="/instructions"
  className={({ isActive }) =>
    `inline-block text-decoration-none bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition duration-300 ${
      isActive ? "bg-blue-700" : ""
    }`
  }
>
  Take the Test Now
</NavLink>
      </motion.div>
        ):
         (
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            whileInView="visible"
            viewport={{  amount: 0.5 }} 
            transition={{
              duration: 0.5, // Animation duration
              ease: "easeOut", // Easing function for smooth transition
            }}
        
        className="hero-text  text-center md:text-left md:w-1/2 px-4">
          <h1 className="text-4xl text-black capitalize  md:text-5xl font-serif font-bold leading-tight mb-4">
            Discover Your Personality <br /> with the Big Five Personality Test
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Uncover insights about your traits in 
            <strong> Openness, Conscientiousness, Extraversion, Agreeableness, </strong>
            and <strong>Neuroticism</strong>.
          </p>
          <NavLink
  to="/instructions"
  className={({ isActive }) =>
    `inline-block text-decoration-none bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition duration-300 ${
      isActive ? "bg-blue-700" : ""
    }`
  }
>
  Take the Test Now
</NavLink>
        </motion.div>
         )
        }
        

        {/* Hero Image */}
        <div className="hero-image md:w-1/2 px-4 w-96  mt-6 md:mt-0 flex justify-center">
        <img
  src="/big-five-personality-traits-ocean-600nw-2464421715.jpg"

  alt="Big Five Personality Illustration"
  className="rounded-lg shadow-lg hero-image"
  
 />
        </div>
      </div>
    </section>
  );
};

export default Hero;
