import React from "react";
import background1 from "../assets/hero-image.webp";
import { FaGem, FaSearch } from "react-icons/fa";
import { GiNecklaceDisplay } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa6";
import Contactus from "../components/Contact";
import Navbar from "../components/Navbar";

const features = [
  {
    icon: <GiNecklaceDisplay className="text-6xl text-yellow-700" />,
    title: "Designer Antique Jewellery",
  },
  {
    icon: <FaGem className="text-6xl text-yellow-700" />,
    title: "Quality Craftsmanship",
  },
  {
    icon: <FaHandshake className="text-6xl text-yellow-700" />,
    title: "50+ years of legacy",
  },
  {
    icon: <FaSearch className="text-6xl text-yellow-700" />,
    title: "Complete transparency",
  },
];

const Aboutus = () => {
  return (
    
    <div className="w-full">
        <Navbar />
      <div
        className="w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${background1})` }}
      ></div>

      {/* About Us Section */}
      <section className="bg-white py-16 px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
          About Us
        </h1>

        <p className="max-w-5xl text-base md:text-lg text-gray-700 leading-relaxed text-center mb-16">
          Driven by the passion for the finest craftsmanship, Sayar Jewellers
          commenced their journey in 1972 in the city of Chennai. The foundation
          was laid under the guidance of Bhawarlal Sayar with the vision of
          providing an immersive experience in the world of artistry and design.
          Our generations of mastery, precision, and imagination enhance the
          surreal beauty of precious metals, making them the epitome of luxury.
          We take pride in our excellent product quality and unmatched designs.
          Each piece of jewellery at Sayar is diligently handcrafted,
          personifying Chennai’s finest craftsmanship. In the span of 50 years,
          Sayar Jewellers has established a benchmark for purity, trust, and
          quality. Our homage to jewellery has remained undeterred and we have
          been blessed with undying patronage.
        </p>

        {/* Vision & Values */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center md:text-left">
              Our Vision
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Sayar Jewellers started with a vision of delivering unmatched
              jewellery. With the same vision, the family has been upholding the
              lineage for over 50 years. Adaptability is the key to the brand’s
              success. Being well versed with modern trends and zeal for
              continuous improvement, Sayar Jewellers continue to design
              awe-inspiring creations which are well-suited for the refined
              palate of traditional and modern individuals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center md:text-left">
              Our Values
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              From the inspiration behind the design of a jewellery to its
              creation, our core values are rooted in our culture and heritage.
              We are strong believers of preserving the art of jewellery
              craftsmanship intact even whilst innovating the designs. Our
              integrity stands true not only in jewellery designing but also in
              providing our customers with the utmost satisfaction post their
              purchase.
            </p>
          </div>
        </div>

        <section className="bg-yellow-50 w-full py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Sayar Jewellers ?
            </h2>
            <p className="text-black text-base md:text-lg mb-12">
              Sayar Jewellers has established a benchmark for its excellent
              product quality and unmatched designs.
              <br />
              Each piece of jewellery at Sayar is diligently handcrafted,
              personifying Chennai’s finest craftsmanship.
            </p>
            <div className="bg-[#fffbea] py-12">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 text-center">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center">
                    
                    <div className="border border-yellow-700 rounded-md p-8 flex items-center justify-center w-40 h-40">
                      {feature.icon}
                    </div>

                    
                    <p className="mt-4 text-lg font-medium text-gray-900">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
        <Contactus />
    </div>
  );
};

export default Aboutus;
