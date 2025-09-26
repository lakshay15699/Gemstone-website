import React from "react";

const Templecollection = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row"> 
    <div
            className="w-full h-96 md:h-auto bg-cover bg-center"
            style={{ backgroundImage: "url(https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a95a952efc8a466ffd351_temple-jewellery-header-p-1080.webp)" }}
        ></div>    
        <div className="w-full bg-orange-800 text-white flex flex-col justify-center px-6 py-20">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Temple Jewellery
            </h2>
            <p className="text-base md:text-xl mb-6 text-gray-200">
                Artfully crafted, drawing inspiration from the temples of the South, Sayar Jewellers have brought to life a blend of heritage and modern precision with their temple jewellery collection, each piece handcrafted to perfection.
            </p>
            <button className="inline-flex self-start items-center text-gray-200 text-base">
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
        <div
            className="md:w-1/2 h-96 md:h-auto bg-cover bg-center"
            style={{ backgroundImage: "url(https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/639035c7069fb0bd9838eb8e_temple%20jewellery%20thumbnail.jpg)" }}
        ></div>    
    </div>
  )
};

export default Templecollection;