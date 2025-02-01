import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import WhyTakeThisTest from '../Components/WhyTakeTest'
import Features from '../Components/features'
import Big5Overview from '../Components/Big5Overview'
import Footer from '../Components/Footer'
// import TestimonialCarousel from '../Components/TestimonialCarousel'
import TestimonialsSlider from '../Components/TestimonialSlider'
import HowItWorks from '../Components/HowItWorks'
import { div } from 'framer-motion/client'
import { Navbar } from '../Components/Navbar'

const Home = () => {
  return (

    
    <div className='mb-5'>
         {/* <Header/> */}
         {/* <Navbar/> */}
      <Hero/>
      <WhyTakeThisTest/>
      <HowItWorks/>
      <Big5Overview/>
      <Features/>
    <TestimonialsSlider/>
  
    </div>
  )
}

export default Home
