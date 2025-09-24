import React from "react";
import background from '../assests/background.jpg';

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-no-repeat bg-center md:bg-right bg-cover "
      style={{ backgroundImage: 'url(' + background + ')' }}
    >
       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      
      <div className="relative z-10 flex flex-col justify-center h-full text-left text-white px-4 md:px-12">
        <div className="text-xl md:text-2xl font-bold mb-2 mt-20 md:mt-0">
          Welcome to
        </div>

        <h1 className="text-4xl md:text-8xl font-bold mb-4 leading-tight">
          Sayar Jewellers
        </h1>

        <div className="w-full md:w-1/2">
          <p className="text-base md:text-xl mb-6">
            Established in 1972, Sayar Jewellers brings unparalleled
            craftsmanship and the essence of heritage in today’s contemporary
            jewellery through its pillars of Impeccable Quality, Trust and
            Craftsmanship.
          </p>
        </div>

        
        <div>
          <button className="inline-flex items-center bg-white-600 hover:bg-red-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-white hover:border-transparent transition duration-300">
            Explore Collections
            <svg
              className="ml-2 w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
