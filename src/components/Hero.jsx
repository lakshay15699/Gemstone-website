import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgroung.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="fixed z-10 flex flex-col h-full text-left text-white px-4">
        <div className="text-2xl font-bold mb-2 mt-20 text-left">Welcome to</div>
        <h1 className="text-8xl font-bold mb-4 text-left">Sayar Jewellers</h1>
       <div className="w-1/2">
        <p className="text-xl mb-6 mr-auto ">
          Established in 1972, Sayar Jewellers brings unparalleled craftsmanship
          and the essence of heritage in today’s contemporary jewellery through
          its pillars of Impeccable Quality, Trust and Craftsmanship.
        </p>
        </div>
        <div>
        <button className="inline-flex items-center bg-white-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg border-2 border-white hover:border-transparent transition duration-300">
  Explore Collections
  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
