import React from "react";
const Blogpage = () => {
  return (
    <div className="w-full">
      <div
        className="w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/626e16a1e6db3a66d6c96a80_hero-image-p-1600.webp)",
        }}
      ></div>

      {/* About Us Section */}
      <section className="bg-white py-16 px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
          Our Blog
        </h1>

        <p className="max-w-5xl text-base md:text-lg text-gray-700 leading-relaxed text-center mb-16">
          Jewellery is not just a piece to adorn but an art to learn. Sayar
          Jewellers have been at the forefront of quality, design, and
          innovation in the jewellery space for over 50 years and are now
          exclusively sharing their experience with you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row gap-8 max-w-7xl mx-auto">
          <article className="bg-[#1C0E06] rounded-s shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300 ">
            <img
              src="https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/6245437d576877bb379fc376_jewellery-care-guide-thumbnail.jpg"
              alt="gemstone care guide with various colorful gemstones on dark surface"
              className="w-full h-56 object-cover "
            />
            <div className="p-6">
              <h4 className="text-4xl font-medium text-white mb-3 ">
                Jewellery care guide
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-6">
                A woman’s jewellery box reflects her personality and carries
                within the creations that she will treasure forever.
              </p>
            </div>
          </article>

          <article className="bg-[#1C0E06] rounded-s shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300">
            <img
              src="https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/639035c7069fb0bd9838eb8e_temple%20jewellery%20thumbnail.jpg"
              alt="traditional temple jewellery necklace with intricate gold work"
              className="w-full h-56 object-cover  "
            />
            <div className="p-6">
              <h4 className="text-4xl font-medium text-white mb-3">
                What is temple jewellery?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-6">
                Temple jewellery is said to have originated in the Chola and
                Pandya dynasties. In the early years...
              </p>
            </div>
          </article>

          <article className="bg-[#1C0E06] rounded-s shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300">
            <img
              src="https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/6245447c5220719db41c8959_bridal-jewellery-shopping-guide.jpg"
              alt="elegant bridal jewellery set with emeralds and diamonds"
              className="w-full h-56 object-cover "
            />
            <div className="p-6">
              <h4 className="text-4xl font-medium text-white mb-3">
                Bridal jewellery shopping guide
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-6">
                Our list of Bridal 101s that promise to take the pain away from
                the most exciting shopping spree of your life!
              </p>
            </div>
          </article>
          <article className="bg-[#1C0E06] rounded-s shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300">
            <img
              src="https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/63aec7e833698bc2b3ed5082_2D2A9159%202%20(2).jpg"
              alt="traditional temple jewellery necklace with intricate gold work"
              className="w-full h-56 object-cover  "
            />
            <div className="p-6">
              <h4 className="text-4xl font-medium text-white mb-3">
                The symbolism behind temple jewellery designs
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-6">
                One of the most captivating aspects of temple jewellery is the symbolism that is embedded within its designs.
              </p>
            </div>
          </article>
          <article className="bg-[#1C0E06] rounded-s shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300">
            <img
              src="https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/63b6a63eeb475a94f1060453_470484cb-7cb8-4c81-be9d-0a3ea43c53e4%201.jpg"
              alt="traditional temple jewellery necklace with intricate gold work"
              className="w-full h-56 object-cover  "
            />
            <div className="p-6">
              <h4 className="text-4xl font-medium text-white mb-3">
                Reasons to buy handcrafted jewellery
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-6">
                One of the biggest benefits of choosing handcrafted jewellery is the attention to detail that goes into each piece. 
              </p>
            </div>
          </article>
          <article className="bg-[#1C0E06] rounded-s shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300">
            <img
              src="https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/63d3a0369332c047934bcb27_2D2A9075%206.jpg"
              alt="traditional temple jewellery necklace with intricate gold work"
              className="w-full h-56 object-cover  "
            />
            <div className="p-6">
              <h4 className="text-4xl font-medium text-white mb-3">
                Temple jewellery from around South India
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-6">
               While temple jewellery is popular throughout South India, there are some differences in the styles and traditions from different regions.
              </p>
            </div>
          </article>
          <article className="bg-[#1C0E06] rounded-s shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300">
            <img
              src="https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/63d3a53f01679972578c0a31_DSC_6933%202.jpg"
              alt="traditional temple jewellery necklace with intricate gold work"
              className="w-full h-56 object-cover  "
            />
            <div className="p-6">
              <h4 className="text-4xl font-medium text-white mb-3">
                The art of temple jewellery making
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-6">
                The art of temple jewellery making is a complex process that involves a variety of techniques, including design, casting, cleaning, polishing, and stone setting. 
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Blogpage;
