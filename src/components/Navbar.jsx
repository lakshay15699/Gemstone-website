import React, { useState, useEffect } from "react";
import { X, Menu, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  }

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const closeDropdown = () => {
    setDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 px-6 py-4 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : ' bg-opacity-30'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src={scrolled 
                ? "https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/6272a21ab896b62e03e21519_g10.svg" 
                : "https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/624a907f7df65f9dacc45c2e_sayar-white-logo.svg"
              }
              alt="Gemstone Palace Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-16">
          {/* Collections with Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 font-bold text-sm transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
              }`} 
              style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.8)'} : {}}
              onClick={handleDropdownToggle}
            >
              COLLECTIONS
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 w-96 bg-white shadow-xl rounded-lg mt-2 transition-all duration-300 ease-in-out transform ${
              dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <div className="p-4 space-y-4">
                
                {/* Gemstone Collection */}
                <a 
                  href="/collections/gemstones" 
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                  onClick={closeDropdown}
                >
                  <div className="flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=80&h=80&fit=crop&crop=center" 
                      alt="Gemstone Collection"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 group-hover/item:text-amber-600 transition-colors">
                      Precious Gemstones
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Exquisite collection of rare diamonds, sapphires, emeralds, and rubies
                    </p>
                  </div>
                </a>

                {/* Jewelry Collection */}
                <a 
                  href="/collections/jewelry" 
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                  onClick={closeDropdown}
                >
                  <div className="flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=80&h=80&fit=crop&crop=center" 
                      alt="Jewelry Collection"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 group-hover/item:text-amber-600 transition-colors">
                      Fine Jewelry
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Handcrafted rings, necklaces, earrings, and bracelets with premium gems
                    </p>
                  </div>
                </a>

              </div>
            </div>
          </div>

          <a href="/aboutus" className={`font-bold text-sm transition-colors duration-300 ${
            scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
          }`} style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.8)'} : {}}>
            ABOUT
          </a>
          <a href="/testimonial" className={`font-bold text-sm transition-colors duration-300 ${
            scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
          }`} style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.8)'} : {}}>
            TESTIMONIALS
          </a>
          <a href="/contactus" className={`font-bold text-sm transition-colors duration-300 ${
            scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
          }`} style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.8)'} : {}}>
            CONTACT
          </a>
          <a href="/blog" className={`font-bold text-sm transition-colors duration-300 ${
            scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
          }`} style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.8)'} : {}}>
            BLOG
          </a>
        </div>

        {/* Desktop Phone Number */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 font-bold text-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
            }`}
            style={!scrolled ? {textShadow: '2px 2px 4px rgba(0,0,0,0.8)'} : {}}
          >
            <Phone className="w-5 h-5" />
            <span>+91 98765 43210</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={handleNav} 
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-20'
            }`}
          >
            {nav ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-60 ${
        nav ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          {/* Mobile Logo */}
          <div className="mb-8">
            <a href="/" onClick={handleNav}>
              <img
                src="https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/6272a21ab896b62e03e21519_g10.svg"
                alt="Gemstone Palace Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-4">
            {/* Mobile Collections with Sub-menu */}
            <div>
              <button 
                className="w-full flex items-center justify-between py-3 px-4 text-gray-800 font-bold text-lg hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                COLLECTIONS
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a 
                    href="/collections/gemstones" 
                    className="flex items-center gap-3 py-2 px-3 text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={handleNav}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=32&h=32&fit=crop&crop=center" 
                      alt="Gemstones"
                      className="w-8 h-8 object-cover rounded"
                    />
                    <span>Precious Gemstones</span>
                  </a>
                  <a 
                    href="/collections/jewelry" 
                    className="flex items-center gap-3 py-2 px-3 text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={handleNav}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=32&h=32&fit=crop&crop=center" 
                      alt="Jewelry"
                      className="w-8 h-8 object-cover rounded"
                    />
                    <span>Fine Jewelry</span>
                  </a>
                </div>
              )}
            </div>

            <a 
              href="/aboutus" 
              className="block py-3 px-4 text-gray-800 font-bold text-lg hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              onClick={handleNav}
            >
              ABOUT
            </a>
            <a 
              href="/testimonial" 
              className="block py-3 px-4 text-gray-800 font-bold text-lg hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              onClick={handleNav}
            >
              TESTIMONIALS
            </a>
            <a 
              href="/contactus" 
              className="block py-3 px-4 text-gray-800 font-bold text-lg hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              onClick={handleNav}
            >
              CONTACT
            </a>
            <a 
              href="/blog" 
              className="block py-3 px-4 text-gray-800 font-bold text-lg hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              onClick={handleNav}
            >
              BLOG
            </a>
          </nav>

          {/* Mobile Phone Number */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 py-3 px-4 text-gray-800 font-bold hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              onClick={handleNav}
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
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={handleNav}
        />
      )}
    </nav>
  );
};

export default Navbar;