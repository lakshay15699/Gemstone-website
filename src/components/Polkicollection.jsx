import React from 'react';
import { useNavigate } from 'react-router-dom';

const Polkicollection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624aec3fa10e0019e44d9de7_gs-header.webp)' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Gemstone & Polki Introduction Section */}
        <section className="py-20 px-6 bg-white">
  <div className="max-w-full mx-auto">
    <div className="grid grid-cols-4 gap-8 items-center">
      {/* Left Image */}
      <div className="col-span-1">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624aebab4545676d2a5508e3_Gs-01.webp" 
            alt="South Indian bridal attire and temple jewellery"
            className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="col-span-2 px-8 text-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Gemstone & <br /> Polki Jewellery
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With our awe-inspiring array of Gemstones & Polki, we create a world of colour, imagination, and beauty. Our collection is a perfect balance of tradition and innovation. While Polki showcases the grand allure of details, gemstones bring out the royal embodiment of elegance. Indulge yourself in Sayar’s royal jewellery collection and make a mark wherever you go!
            </p>
            
          </div>
        </div>
      </div>

      {/* Right Images */}
      <div className="col-span-1 space-y-4">
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img 
            src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624aebaa2b0a6f38296a6ddd_gs-03.webp" 
            alt="Woman wearing temple jewellery"
            className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img 
            src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624aebaa45456735f05508e1_gs-02.webp" 
            alt="Woman wearing gold earrings"
            className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </div>
</section>

       
        {/* Gem for Every Occasion Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Gem for Every Occasion
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Keeping legacy at the soul of every piece, meet our Gemstones & Polki collection that takes you on a tour of love, unions, and the surreal magic of weddings. Add a touch of timeless legacy steeped in Indian traditions with Sayar's vibrant assortment of gemstones and uncut diamonds.
                </p>
              </div>
              <div className='pt-20 w-full'><img src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/6389931148095bcfdc036080_gemstone%20image.webp" alt="" /></div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              

              {/* Right Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                    <h2 className="pl-10 text-4xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                An Eternal Elegance of Royalty
              </h2>
                  <p className="pl-10 text-lg md:text-xl text-gray-700 leading-relaxed">
                    Bejewel yourself with versatile Gemstone jewellery and be the beam of royalty on any occasion. The antique lustre of gemstones and polki created with impeccable workmanship exemplifies the legacy of the brand. Be a part of this magnificent melange of traditional and fusion jewellery that will leave you in awe.
                  </p>
                  
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl pr-10">
                  <img 
                    src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/62700b17c421287b754e7521_gs%3D1%20(1).webp" 
                    alt="Gold temple jewellery earrings"
                    className="pl-28 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

        {/* Eternal Elegance Section */}
        

        {/* Striking Beauty Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="relative">
                <div className="relative overflow-hidden ">
                  <img 
                    src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/626eaf9fa885cb53f5f26966_gemstonej%20(1).webp" 
                    alt="Chain and pendant embedded with rubies, pearls, emeralds and polki diamonds"
                    className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                    A Striking Beauty to Adorn
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    The grand allure of Gemstone & Polki jewellery lies in its details, intricacy, and visual elegance. Each piece is weaved together with graceful patterns and mesmerising rows of precious stones and uncut diamonds. Join us as we cherish a collection intertwined with majestic grandeur, vibrant colours, and exceptional designs.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default Polkicollection;