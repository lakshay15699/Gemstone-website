import React from "react";

const Contact = () => {
  return (
    <footer className="bg-gray-50 px-6 py-12">
  <div className="text-center mb-10">
    <h1 className="text-lg md:text-3xl font-semibold mb-4">
      Subscribe to our newsletter to receive exclusive offers and updates
    </h1>
    <div className="inline-flex justify-center">
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

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-8xl mx-auto">
    <div>
      <h4 className="font-semibold text-lg mb-3">Get in touch</h4>
      <p className="text-black text-xs">Mobile: 9841068852</p>
      <p className="text-black text-xs mt-4">Landline: 044-43304040</p>
      <p className="text-black text-xs mt-4">Email: jewellers.sayar@gmail.com</p>
    </div>

    <div>
      <h4 className="font-semibold text-lg mb-3">Collections</h4>
      <a className="text-black text-xs">Temple Jewellery</a> <br />
      <a className="text-black text-xs">Gemstone & Polki</a>
    </div>

    <div>
      <h4 className="font-semibold text-lg mb-3">More</h4>
      <a href="/Aboutus" className="text-black text-xs">About us</a> <br />
      <a href="/Testimonial" className="text-black text-xs">Testimonials</a>
    </div>

    <div>
      <h4 className="font-semibold text-lg mb-3">Address</h4>
      <p className="text-black text-xs">
        Sayar Jewellers, 656, Mount Rd, Thousand Lights East, Thousand
        Lights, Chennai, Tamil Nadu, 600006
      </p>
      <p className="text-black text-xs mt-4">
        Monday – Saturday : 10:00 am to 07:30 pm
      </p>
    </div>
  </div>

  
  <div className="w-full py-2 mt-10 text-sm text-white font-semibold bg-yellow-500 text-center">
    © 2022 Sayar Jewellers. All rights reserved.
  </div>
</footer>

  );
};

export default Contact;