import React from "react";  

const Hero = () => {
  return (<div
      className="relative h-screen w-full bg-cover bg-center"
      style={ { backgroundImage: "url('/images/backgroung.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h1 className="text-5xl font-bold mb-4">Sayar Jewellers</h1>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        <p className="text-xl mb-6">Established in 1972, Sayar Jewellers brings unparalleled craftsmanship and the essence of heritage in today’s contemporary jewellery through its pillars of Impeccable Quality, Trust and Craftsmanship.</p>
        <button className="bg-transparent-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
          Explore Collections 
        </button>
      </div>
    </div>
    
      
    );
}

export default Hero;