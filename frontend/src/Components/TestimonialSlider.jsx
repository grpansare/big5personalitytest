import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaUserCircle } from 'react-icons/fa'; // React Icons

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alice Johnson',
      text: 'The Big 5 Personality Test helped me understand my strengths and areas for growth. The results were accurate and insightful.',
      profileImageUrl: 'https://example.com/alice-profile.jpg',
    },
    {
      id: 2,
      name: 'Bob Smith',
      text: 'I learned so much about myself. This test gave me a deeper understanding of my personality traits and how they impact my life.',
      profileImageUrl: 'https://example.com/bob-profile.jpg',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      text: 'An eye-opening experience! I was surprised by how well the test captured my personality. Highly recommended for self-reflection!',
      profileImageUrl: 'https://example.com/charlie-profile.jpg',
    },
    {
      id: 4,
      name: 'John Doe',
      text: 'The Big 5 Personality Test was accurate and easy to take. It provided me with a clear overview of my personality traits.',
      profileImageUrl: 'https://example.com/john-profile.jpg',
    },
    {
      id: 5,
      name: 'Jane Smith',
      text: 'A comprehensive personality test that offers valuable insights. I now better understand how my traits affect my relationships.',
      profileImageUrl: 'https://example.com/jane-profile.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For medium screens (1024px and below)
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small screens (768px and below)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],
  };

  return (
    <div className="testimonials">
      <h1 className="text-center text-2xl font-mono my-6">
        What Our Users Say About The Big 5 Personality Test
      </h1>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
   <div
   key={testimonial.id}
   className="testimonial-slide mx-auto max-w-xl sm:w-3/4 md:w-1/2 mt-5 rounded-md bg-white "
 >
 
            <div className="testimonial-content border">
              {/* Rating Section */}
              <div className="mb-4 flex space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    <FaStar className="h-6 w-6 text-yellow-500" />
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <div className="testimonial-text pt-2">
                <blockquote>
                  <p className="text-lg text-gray-800">{testimonial.text}</p>
                </blockquote>
              </div>

              {/* Author Section */}
              <div className="mt-8 border-t border-gray-300 pt-4">
                <div className="flex items-center">
                 
                  <div className="ml-3 min-w-0">
                    <p className="truncate text-base font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="truncate text-base text-gray-500">
                      <FaUserCircle className="inline mr-1" /> Personality Tester
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
