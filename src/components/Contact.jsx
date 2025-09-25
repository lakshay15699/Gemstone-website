import React from "react";

const Contactus = () => {
  return (
    <footer className="bg-gray-50 px-6 py-12">
    
      <div className="text-center mb-10">
        <h1 className="text-lg md:text-3xl font-semibold mb-4">
          Subscribe to our newsletter to receive exclusive offers and updates
        </h1>
        <div className=" inline-flex justify-center">
          <input
            type="email"
            placeholder="Enter email address"
            className="px-4 py-2 border border-gray-300 rounded-l-md w-64 focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-800">
            Sign Up
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        
        <div>
          <h4 className="font-semibold text-lg mb-3">Get in touch</h4>
          <p className="text-gray-700">Mobile: 9841068852</p>
          <p className="text-gray-700">Landline: 044-43304040</p>
          <p className="text-gray-700">Email: jewellers.sayar@gmail.com</p>
          <div className="flex mt-3 space-x-4 text-xl">
            <a href="#" className="hover:text-pink-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-sky-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-red-600">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

       
        <div>
          <h4 className="font-semibold text-lg mb-3">Collections</h4>
          <p className="text-gray-700">Temple Jewellery</p>
          <p className="text-gray-700">Gemstone & Polki</p>
        </div>

        
        <div>
          <h4 className="font-semibold text-lg mb-3">More</h4>
          <a href="/Aboutus" hreclassName="text-gray-700">About us</a>
          <p className="text-gray-700">Testimonials</p>
        </div>

        
        <div>
          <h4 className="font-semibold text-lg mb-3">Address</h4>
          <p className="text-gray-700">
            Sayar Jewellers, 656, Mount Rd, Thousand Lights East, Thousand
            Lights, Chennai, Tamil Nadu, 600006
          </p>
          <p className="text-gray-700 mt-2">
            Monday – Saturday : 10:00 am to 07:30 pm
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contactus;