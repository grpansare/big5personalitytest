import React from "react";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/take-test"); // Adjust the path as per your routing
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Test Instructions</h1>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Read each question carefully before answering.</li>
          <li>Choose the option that best reflects your opinion.</li>
          <li>There are no right or wrong answers—just be honest.</li>
          <li>Ensure you have a quiet environment to focus.</li>
          <li>Once you start, the test must be completed in one go.</li>
        </ul>
        <p className="text-center text-sm text-gray-500 mb-6">
          Your responses will help assess your personality traits accurately.
        </p>
        <button
          onClick={handleStartTest}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition duration-300"
        >
          Start the Test
        </button>
      </div>
    </div>
  );
};

export default Instructions;
