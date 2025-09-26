import React from "react";

import background4 from "../assets/contanctus-bg.webp";
import Contact from "../components/Contact";

const Contactus = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      

      
      <div
        className="h-[60vh] w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(' + background4 + ')' }}
      ></div>

      
      <div className="flex flex-col md:flex-row justify-start items-start px-6 md:px-16 py-12 gap-12 flex-grow">

  {/* Left: Contact Form */}
  <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl max-w-lg w-full">
    <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact Us</h2>
    <h6 className="text-xs">Leave us a message and we will get back to you at the earliest.</h6>

    <form className="space-y-6 mt-10">
      <div>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-yellow-300 transition"
          placeholder="Your Name"
          required
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-yellow-300 transition"
          placeholder="Your Email"
          required
        />
      </div>

      <div>
        <input
          type="tel"
          id="mobile"
          className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-yellow-300 transition"
          placeholder="Your Mobile No."
          required
        />
      </div>

      <div>
        <textarea
          id="message"
          className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-yellow-300 transition"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
      </div>

      <div className="text-left">
        <button
          type="submit"
          className="bg-orange-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  </div>

  
  <div className="md:w-1/2 w-full flex flex-col justify-center mt-40 ">
    <h4 className="font-semibold text-3xl mb-3">Address</h4>
    <p className="text-sm">
      Sayar Jewellers, 656, Mount Rd, Thousand Lights East, Thousand Lights,<br />
      Chennai, Tamil Nadu, 600006
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-12">
      <div>
        <h4 className="font-semibold text-3xl mb-3">Contact</h4>
        <p className="text-sm">
          Mobile: 9841068852 <br />
          Landline: 044-43304040
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-3xl mb-3">Hours</h4>
        <p className="text-sm">
          Monday - Saturday <br />
          10:00am to 07:30pm
        </p>
      </div>
    </div>
  </div>
</div>


      
      <div className="mt-auto">
        <Contact />
      </div>
      <div className="w-full py-2 mt-0 text-sm text-white font-semibold bg-yellow-500 text-center">
    © 2022 Sayar Jewellers. All rights reserved.
  </div>
    </div>
  );
};

export default Contactus;
