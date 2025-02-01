import React from 'react';
import { FaHandshake, FaGlobe, FaUsers, FaTrophy, FaChartLine, FaUserCheck, FaRegLightbulb } from 'react-icons/fa';
import Corousel from '../Components/carousel';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import image from '../assets/Images/P1.jpeg';

const AboutUs = () => {
  const values = [
    {
      id: 1,
      title: 'Commitment to Accuracy',
      description: 'We strive to provide scientifically validated personality assessments that offer meaningful insights.',
      icon: <FaTrophy className="h-8 w-8 text-yellow-500" />,
    },
    {
      id: 2,
      title: 'Global Reach',
      description: 'Our platform is accessible to users worldwide, promoting self-awareness across cultures and communities.',
      icon: <FaGlobe className="h-8 w-8 text-blue-500" />,
    },
    {
      id: 3,
      title: 'User-Centered Approach',
      description: 'We prioritize ease of use and clarity, ensuring everyone can benefit from our assessments.',
      icon: <FaUsers className="h-8 w-8 text-green-500" />,
    },
    {
      id: 4,
      title: 'Collaboration & Growth',
      description: 'We work with psychologists and researchers to continuously enhance our offerings.',
      icon: <FaHandshake className="h-8 w-8 text-purple-500" />,
    },
  ];

  return (
    <>
       {/* <Header/> */}
    <Corousel/>
    <div className="w-full  py-12 mb-5 bg-gray-50">
      <div className="w-full mt-3 bg-slate-100 mb-5  p-3 flex border   text-center">
      <div className="aboutus my-3 max-w-8xl md:max-w-5xl flex flex-col md:flex-row mx-auto">
  {/* Image Section */}
  <div className="image-div w-full md:w-1/2 p-2">
    <img
      className="w-full rounded-lg h-64 md:h-96 object-cover"
      src="aboutus2.jfif"
      alt="About Us"
    />
  </div>

  {/* Text Section */}
  <div className="right w-full md:w-1/2 p-4 flex flex-col justify-center">
    <h1 className="text-3xl md:text-4xl font-mono   text-start font-extrabold   text-gray-700 mb-4 md:mb-6">
      About Us
    </h1>
    <p className="text-gray-600 mb-6 md:mb-8 text-start">
      We are a passionate team dedicated to helping individuals better understand themselves through the lens of
      personality science. Our mission is to make self-awareness accessible to everyone, empowering personal growth
      and fostering meaningful connections.
    </p>
  </div>
</div>

      </div>

      {/* Mission Section */}
    

<div className="max-w-6xl mt-6 mx-auto mb-12">
  <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex justify-center items-center">
    <FaRegLightbulb className="text-yellow-500 mr-2" /> Our Mission
  </h2>
  <div className="flex flex-col gap-3 max-w-4xl mx-auto md:flex-row items-center md:items-start text-center md:text-left">
    <div className="flex-1 px-4 py-5 mb-6 shadow-md md:mb-0 bg-white border">
      <FaUserCheck className="text-blue-500 text-4xl mx-auto mb-4" />
      <p className="text-gray-600 text-lg font-semibold">
        To provide reliable, insightful, and user-friendly personality assessments that inspire individuals to 
        discover their unique traits and achieve their fullest potential.
      </p>
    </div>
    <div className="flex-1 px-5 bg-white py-4 shadow-md border">
      <FaChartLine className="text-green-500 text-4xl mx-auto mb-4" />
      <p className="text-gray-600 text-lg font-semibold">
        We are dedicated to fostering self-awareness and growth through scientifically grounded methodologies 
        and innovative tools. By empowering individuals with meaningful insights, we aim to support their personal 
        and professional journeys.
      </p>
    </div>
  </div>
</div>



      {/* Values Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {values.map((value) => (
          <div key={value.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center mt-12">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
  <p className="text-gray-600 mb-8">
   
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
    {[
      { name: 'Ganesh Pansare', role: 'Team Member' },
      { name: 'Atharv Raut', role:"Team Member" },
    ].map((member, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-8 w-80 h-80"
      >
        <div className="w-28 h-32 rounded-full mb-6">
          <img src={image} alt=""  className='rounded-full' />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-gray-500">{member.role}</p>
      </div>
    ))}
  </div>
</div>


      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us on a Journey of Discovery</h2>
        <p className="text-gray-600 mb-6">
          Take the Big Five Personality Test today and uncover insights that can change your life for the better.
        </p>
        <a
          href="/take-the-test"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-all"
        >
          Take the Test Now
        </a>
      </div>
    </div>
   
    </>
  );
};

export default AboutUs;
