import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const WhyTakeThisTest = () => {
  return (
    <div className="why-take-test-section bg-gray-100 py-10 px-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-4">Why Take This Test?</h2>
      <p className="text-center text-gray-700 mb-6">
        Discover your unique personality traits and unlock your full potential.
        This test helps you understand your strengths, weaknesses, and how you
        interact with others.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Key Points */}
        <div className="flex items-center gap-4 bg-white p-4 rounded shadow-md max-w-xs">
          <FaCheckCircle className="text-green-500 text-2xl" />
          <p>Gain self-awareness about your behavior and preferences.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded shadow-md max-w-xs">
          <FaCheckCircle className="text-green-500 text-2xl" />
          <p>Improve personal relationships by understanding others better.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded shadow-md max-w-xs">
          <FaCheckCircle className="text-green-500 text-2xl" />
          <p>Identify areas of growth and achieve your goals.</p>
        </div>
      </div>
      {/* Call-to-Action */}
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
          Take the Test Now
        </button>
      </div>
    </div>
  );
};

export default WhyTakeThisTest;
