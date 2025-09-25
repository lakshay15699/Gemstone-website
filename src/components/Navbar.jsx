import React, { useState, useEffect } from "react";
import { X, Menu, Phone } from 'lucide-react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`px-6 py-3 flex items-center fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg backdrop-md' 
        : 'bg-white bg-opacity-0 backdrop-md'
    }`}>
      
      
      <div className="text-2xl font-bold">
        <a href="/" className="block">
          <img
            src={scrolled 
              ? "https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/6272a21ab896b62e03e21519_g10.svg" 
              : "https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a907f7df65f9dacc45c2e_sayar-white-logo.svg"
            }
            alt="Gemstone Palace Logo"
            className="h-13 w-auto pl-7 "
          />
        </a>
      </div>

      
      <div className="flex-grow flex justify-center">
  <ul className=" md:flex list-none justify-center md:justify-between w-full md:max-w-2xl font-semibold">
    <li>
      <a href="#" className={`p-3 md:p-6 block text-center transition-colors ${
        scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
      }`} style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.7)'} : {}}>
        COLLECTIONS
      </a>
    </li>
    <li>
      <a href="/Aboutus" className={`p-3 md:p-6 block text-center transition-colors ${
        scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
      }`} style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.7)'} : {}}>
        ABOUT
      </a>
    </li>
    <li>
      <a href="/Testimonial" className={`p-3 md:p-6 block text-center  ${
        scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
      }`} style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.7)'} : {}}>
        TESTIMONIALS
      </a>
    </li>
    <li>
      <a href="/Contactus" className={`p-3 md:p-6 block text-center transition-colors ${
        scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
      }`} style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.7)'} : {}}>
        CONTACT
      </a>
    </li>
    <li>
      <a href="/blog" className={`p-3 md:p-6 block text-center transition-colors ${
        scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
      }`} style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.7)'} : {}}>
        BLOG
      </a>
    </li>
  </ul>
</div>
      {/* Phone Number */}
      <div className=" md:flex pl-0 md:pl-20 mt-2 md:mt-0">
  <a
    href="tel:+919876543210"
    className={`p-3 md:p-4 flex items-center gap-2 text-center transition-colors ${
      scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
    }`}
    style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.7)'} : {}}
  >
    <Phone className="w-5 h-5" />
    <span>+91 98765 43210</span>
  </a>
</div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={handleNav} className={`p-2 transition-colors ${
          scrolled ? 'text-gray-800' : 'text-black'
        }`}>
          {nav ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-white bg-opacity-95 backdrop-blur-md ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] top-0 h-full ease-in-out duration-500'}>
        <div className="p-6">
          
          <div className="text-2xl font-bold mb-8">
            <a href="/" className="block" onClick={handleNav}>
              
            </a>
          </div>

          
          <ul className="flex flex-col space-y-6 text-black font-semibold">
            <li>
              <a 
                href="#" 
                className="block py-2 "
                onClick={handleNav}
              >
                COLLECTIONS
              </a>
            </li>
            <li>
              <a 
                href="/Aboutus" 
                className="block py-2"
                onClick={handleNav}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a 
                href="/Testimonial" 
                className="block py-2 "
                onClick={handleNav}
              >
                TESTIMONIALS
              </a>
            </li>
            <li>
              <a 
                href="/Contactus" 
                className="block py-2 "
                onClick={handleNav}
              >
                CONTACT
              </a>
            </li>
            <li>
              <a 
                href="/blog" 
                className="block py-2 "
                onClick={handleNav}
              >
                BLOG
              </a>
            </li>
          </ul>

          
          <div className="mt-8 pt-8 border-t border-gray-600">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {nav && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[-1] md:hidden"
          onClick={handleNav}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;