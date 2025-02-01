import React from 'react'; 
import {motion} from 'framer-motion'
import { FaLightbulb, FaCheckCircle, FaSmileBeam, FaHandshake, FaHeartbeat } from 'react-icons/fa'; // Icons for each trait 

function Big5Overview() {
  
  
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and shifted down
  visible: { opacity: 1, y: 0 }, // Animate to visible and original position
};

const gridVariants = {
  hidden: {}, // No specific animation for parent in hidden state
  visible: {
    transition: {
      staggerChildren: 0.2, // Delay between animations of child cards
    },
  },
};

  return ( 
    <div className="mx-auto flex-wrap max-w-6xl px-2 lg:px-8 mt-12"> 
      <h2 className="text-3xl font-semibold text-center text-black">Overview of the Big 5 Personality Traits</h2> 
      <motion.div
      className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10"
      initial="hidden" // Initial state for grid
      whileInView="visible" // Trigger animation when the grid is in view
      viewport={{  amount: 0.3 }} // Trigger once when 20% is visible
      variants={gridVariants} // Apply parent animation
    >
      {/* Openness */}
      <motion.div
        variants={cardVariants} // Apply card animation
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center border py-5 bg-white shadow-md p-2 rounded-lg text-center"
      >
        <FaLightbulb className="text-blue-500 text-4xl mb-4" />
        <h3 className="text-lg font-semibold text-black">Openness</h3>
        <p className="text-sm text-gray-600">
          Openness involves imagination, creativity, and a willingness to try new
          things. People high in Openness tend to be curious and open-minded.
        </p>
      </motion.div>

      {/* Conscientiousness */}
      <motion.div
        variants={cardVariants} // Apply card animation
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col border py-5 shadow-md p-2 rounded-lg items-center text-center"
      >
        <FaCheckCircle className="text-green-500 text-4xl mb-4" />
        <h3 className="text-lg font-semibold text-black">Conscientiousness</h3>
        <p className="text-sm text-gray-600">
          Conscientiousness is characterized by being diligent, organized, and
          dependable. Individuals with high Conscientiousness tend to be
          responsible and goal-oriented.
        </p>
      </motion.div>

      {/* Extraversion */}
      <motion.div
        variants={cardVariants} // Apply card animation
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col border py-5 shadow-md p-2 rounded-lg items-center text-center"
      >
        <FaSmileBeam className="text-yellow-500 text-4xl mb-4" />
        <h3 className="text-lg font-semibold text-black">Extraversion</h3>
        <p className="text-sm text-gray-600">
          Extraversion refers to how outgoing, energetic, and sociable someone
          is. People high in Extraversion tend to enjoy socializing and are often
          full of energy.
        </p>
      </motion.div>
    </motion.div>

        <motion.div

initial="hidden" // Initial state for grid
whileInView="visible" // Trigger animation when the grid is in view
viewport={{  amount: 0.3 }} // Trigger once when 20% is visible

          variants={gridVariants} 
        className="flex lg:flex-row justify-center flex-col items-center p-4 gap-12">
  {/* Agreeableness */}
  <motion.div
        variants={cardVariants} // Apply card animation
        transition={{ duration: 0.5, ease: "easeOut" }}
  className="flex flex-col w-80 border py-5 shadow-md p-2 rounded-lg items-center justify-center text-center">
    <FaHandshake className="text-orange-500 text-4xl mb-4" />
    <h3 className="text-lg font-semibold text-black">Agreeableness</h3>
    <p className="text-sm text-gray-600">
      Agreeableness involves being cooperative, compassionate, and friendly. People with high Agreeableness are typically empathetic and get along well with others.
    </p>
  </motion.div>

  {/* Neuroticism */}
  <motion.div
        variants={cardVariants} // Apply card animation
        transition={{ duration: 0.5, ease: "easeOut" }}
  
  className="flex flex-col w-80 border py-5 shadow-md p-3 rounded-lg items-center justify-center text-center">
    <FaHeartbeat className="text-red-500 text-4xl mb-4" />
    <h3 className="text-lg font-semibold text-black">Neuroticism</h3>
    <p className="text-sm text-gray-600">
      Neuroticism refers to emotional stability. People with high Neuroticism are more likely to experience anxiety, mood swings, and stress.
    </p>
  </motion.div>
</motion.div>



      </div> 
    
  ); 
} 

export default Big5Overview;
