import React from 'react';
import { useNavigate } from 'react-router-dom';

const Templecollection = () => {
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - No Text */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a95a952efc8a466ffd351_temple-jewellery-header.webp)' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Temple Jewellery Introduction Section */}
        <section className="py-20 px-6 bg-white">
  <div className="max-w-full mx-auto">
    <div className="grid grid-cols-4 gap-8 items-center">
      {/* Left Image */}
      <div className="col-span-1">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a9a14c3991e817d4408f8_tj-01.webp" 
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
              Temple <br /> Jewellery
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Carved with the figurines of Gods and Goddesses, Temple Jewellery tells an enchanting story of our Indian mythology. With 50 years of deep-rooted experience, Sayar Jewellers has perfected the craft of temple jewellery while adapting to reflect modern sensibilities. The wearable works of art proudly carry the life-long Sayar touch and are part of a priceless experience.
            </p>
            <button className="mt-6 inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-lg transition-colors duration-300">
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Images */}
      <div className="col-span-1 space-y-4">
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img 
            src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a9a150967e08520589174_tj-02.webp" 
            alt="Woman wearing temple jewellery"
            className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img 
            src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a9a147df65f7562c49bf8_tj-03.webp" 
            alt="Woman wearing gold earrings"
            className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Mobile Version - Stack vertically on smaller screens */}
<section className="py-20 px-6 bg-white md:hidden">
  <div className="max-w-7xl mx-auto space-y-8">
    {/* Mobile: Stack all elements vertically */}
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      <img 
        src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a9a14c3991e817d4408f8_tj-01.webp" 
        alt="South Indian bridal attire and temple jewellery"
        className="w-full h-[300px] object-cover"
      />
    </div>
    
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Temple Jewellery</h1>
      <p className="text-base text-gray-700 leading-relaxed mb-4">
        Carved with the figurines of Gods and Goddesses, Temple Jewellery tells an enchanting story of our Indian mythology.
      </p>
      <button className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-300">
        Learn More
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
    
    <div className="grid grid-cols-2 gap-4">
      <img src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a9a150967e08520589174_tj-02.webp" alt="Temple jewellery" className="w-full h-[200px] object-cover rounded-xl" />
      <img src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a9a147df65f7562c49bf8_tj-03.webp" alt="Gold earrings" className="w-full h-[200px] object-cover rounded-xl" />
    </div>
  </div>
</section>
        {/* Timeless Beauty Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                The timeless beauty of<br />
                <span className="text-black">temple jewellery</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/626ff52ec5592c2b061db2d0_earrings%20(1).webp" 
                    alt="Gold temple jewellery earrings"
                    className="pl-28 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Artfully crafted, drawing inspiration from the temples of the South, Sayar jewellers have brought to life a blend of heritage and modern precision with their temple jewellery collection with each piece handcrafted to perfection.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              

              {/* Right Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="pl-10 text-lg md:text-xl text-gray-700 leading-relaxed">
                    Unique designs carved with figurines of deities to celebrate the South Indian elegance. The striking statement pieces of this collection depict a divine mélange of art and heritage that comes alive through our impeccable craftsmanship.
                  </p>
                  
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/626ff627dc51263390f62082_SWbg(N)Png-10%202%20(1).webp" 
                    alt="Gold temple jewellery earrings"
                    className="pl-28 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              

              {/* Right Content */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/63918bd67b7cd8cd6cf90e70_dia.webp" 
                    alt="Gold temple jewellery earrings"
                    className="pl-28 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    Divine Indian<br />
                    <span className="text-amber-600">Aesthetic</span>
                  </h2>
                  <p className=" text-lg md:text-xl text-gray-700 leading-relaxed">
                    With generations of mastery, precision, and imagination; Sayar Jewellers has enhanced the beauty of the precious jewels, making them the epitome of everlasting luxury. The flawlessly crafted intricate designs carved out as a tribute to the magnificent ancient temples of India are truly stunning in their grandeur.
                  </p>
                  
                </div>
              </div>
              
            </div>

        
        {/* Testimonial Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-16 left transform -translate-x-1/2">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mt-8 mb-8">
                "Sayar Jewellers, a name that I have heard growing up, my parents always bought our Jewellery from Sayar jewellers. They have the most exquisite designs, and the craftsmanship is amazing. Every time I wear a piece of Jewellery it's admired by everyone. Thank you so much Prakash for coming up with such beautiful designs, keep creating more wonderful pieces."
              </blockquote>

              
              
             
            </div>
          </div>
        </section>

        {/* CTA Section */}
        
      </div>
    </div>
  );
};

export default Templecollection;