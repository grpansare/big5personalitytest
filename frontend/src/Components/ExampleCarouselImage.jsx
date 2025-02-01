// components/ExampleCarouselImage.jsx
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div
      style={{
        height: '400px',
        backgroundColor: '#ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        color: '#333',
      }}
    >
      {text}
    </div>
  );
};

export default ExampleCarouselImage;
