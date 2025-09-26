import react from 'react';

const Blogs = () => {    
    return (
        <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">
            Our Blog
          </h3>
          
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Jewellery is not just a piece to adorn but an art to learn. Sayar Jewellers have been at the forefront of quality, design, and innovation in the jewellery space for over 50 years and are now exclusively sharing their experience with you.
            </p>
          </div>
          
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <article className="bg-[#1C0E06] rounded-s shadow-sm overflow-hidden ">
              <img 
                src="https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/6245437d576877bb379fc376_jewellery-care-guide-thumbnail.jpg" 
                alt="gemstone care guide with various colorful gemstones on dark surface"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h4 className="text-4xl font-medium text-white mb-3 ">
                  Jewellery care guide
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-6">
                  A woman’s jewellery box reflects her personality and carries within the creations that she will treasure forever.
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
                  Temple jewellery is said to have originated in the Chola and Pandya dynasties. In the early years...
                </p>
                
              </div>
            </article>

            <article className="bg-[#1C0E06] rounded-s shadow-sm overflow-hidden">
              <img 
                src="https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/6245447c5220719db41c8959_bridal-jewellery-shopping-guide.jpg" 
                alt="elegant bridal jewellery set with emeralds and diamonds"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h4 className="text-4xl font-medium text-white mb-3">
                  Bridal jewellery shopping guide
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-6">
                  Our list of Bridal 101s that promise to take the pain away from the most exciting shopping spree of your life!
                </p>
                
              </div>
            </article>

           
          </div>

          <div className="text-center mt-12">
            <button className="  text-yellow-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              View All Articles
            </button>
          </div>
        </div>
      </section>
    )
}
export default Blogs;