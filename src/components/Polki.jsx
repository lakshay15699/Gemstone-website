import React from "react";  
import polkibg from "../assets/gemstone.jpg"

const Polki = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: "url(" + polkibg + ")" }}> </div>

        <div className="md:w-1/2 bg-white text-black flex flex-col justify-center px-6 py-20">
        <h2 className="text-6xl md:text-4xl font-bold leading-tight mb-6">
          Gemstone & Polki Jewellery
        </h2>
        <p className="text-base md:text-base mb-6 text-black">
          With our awe-inspiring array of Gemstones & Polki, we create a world of colour, imagination, and beauty. While Polki showcases the grand allure of details, gemstones bring out the royal embodiment of elegance. Explore our collection intertwined with majestic grandeur, vibrant colours, and exceptional designs.
        </p>
        <button className="inline-flex self-start items-center text-black text-base">
          Explore Collection
          <svg
            className="ml-2 w-5 h-7"
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
    )
};

export default Polki;