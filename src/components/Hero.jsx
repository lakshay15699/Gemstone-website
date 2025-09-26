import React from "react";

const Hero = () => {
  // Function to scroll to temple section
  const scrollToTemple = () => {
    const templeElement = document.getElementById('temple');
    if (templeElement) {
      const elementPosition = templeElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset for navbar
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="relative h-screen bg-no-repeat bg-center md:bg-right bg-cover"
      style={{ 
        backgroundImage: 'url(https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/626e16a1e6db3a66d6c96a80_hero-image-p-1600.webp)' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

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
            craftsmanship and the essence of heritage in today's contemporary
            jewellery through its pillars of Impeccable Quality, Trust and
            Craftsmanship.
          </p>
        </div>

        <div>
          <button 
            onClick={scrollToTemple}
            className="inline-flex items-center bg-transparent hover:bg-white hover:text-gray-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-white hover:border-white transition-all duration-300 font-semibold group"
          >
            Explore Collections
            <svg
              className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
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