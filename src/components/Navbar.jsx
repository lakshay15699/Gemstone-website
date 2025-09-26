import React, { useState, useEffect } from "react";
import { X, Menu, Phone, ChevronDown } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

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

  // Smooth scroll function
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeDropdown();
  };

  // Navigation function for collections
  const navigateToCollection = (collectionId) => {
    
    const routes = {
      'temple': '/Templecollection', 
      'polki': '/Polkicollection'   
    };
    
    
    window.location.href = routes[collectionId];
    closeDropdown();
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Collections data
  const collections = [
    {
      id: 'temple',
      title: 'Temple Jewellery',
      
      image: 'https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/626e554e0d49998d81c93210_temple-jewellery-bg.webp'
    },
    {
      id: 'polki',
      title: 'Gemstone & Polki',
      
      image: 'https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/626eaf9fa885cb53f5f26966_gemstonej%20(1).webp'
    }
  ];

  return (
    <nav className={`w-full fixed top-0 left-0 z-[100] px-6 py-4 transition-all duration-300 ${
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
          {/* Collections with Large Dropdown */}
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
            
            {/* Large Dropdown Menu - Centered */}
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] h-[450px] bg-white shadow-2xl rounded-xl mt-2 border border-gray-100 overflow-hidden transition-all duration-500 ease-out z-[110] ${
              dropdownOpen 
                ? 'opacity-100 visible translate-y-0 scale-100' 
                : 'opacity-0 invisible -translate-y-8 scale-95'
            }`}>
              
              {/* Collections Grid - Full Space */}
              <div className="w-full h-full p-8">
                <div className="grid grid-cols-2 gap-8 h-full">
                  {collections.map((collection, index) => (
                    <button
                      key={collection.id}
                      className="group/card relative overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 w-full h-full"
                      onClick={() => navigateToCollection(collection.id)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Full Background Image */}
                      <div className="relative w-full h-full overflow-hidden rounded-xl">
                        <img 
                          src={collection.image} 
                          alt={collection.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/card:brightness-110"
                          loading="lazy"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover/card:from-black/60 group-hover/card:via-black/20 transition-all duration-500" />
                        
                        {/* Animated Border */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-amber-400/60 rounded-xl transition-all duration-500" />
                      </div>

                      {/* Centered Text Content */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                        <div className="transform transition-all duration-500 group-hover/card:scale-110">
                          <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg group-hover/card:text-amber-200 transition-colors duration-300">
                            {collection.title}
                          </h4>
                          
                        </div>
                        
                        
                        
                        {/* Decorative Elements */}
                        <div className="absolute top-6 left-6 opacity-0 group-hover/card:opacity-60 transition-all duration-700 transform -translate-x-2 group-hover/card:translate-x-0">
                          <div className="w-10 h-10 border-2 border-amber-300 rounded-full animate-pulse" />
                        </div>
                        <div className="absolute top-8 left-10 opacity-0 group-hover/card:opacity-40 transition-all duration-900 transform -translate-x-2 group-hover/card:translate-x-0">
                          <div className="w-6 h-6 border-2 border-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </div>

                        
                      </div>
                    </button>
                  ))}
                </div>
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
          <a href="/Blogpage" className={`font-bold text-sm transition-colors duration-300 ${
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
      <div className={`md:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[70] ${
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
                  {collections.map((collection) => (
                    <button 
                      key={collection.id}
                      onClick={() => {
                        navigateToCollection(collection.id);
                        handleNav();
                      }}
                      className="w-full flex items-center gap-3 py-2 px-3 text-gray-600 hover:text-amber-600 transition-colors text-left"
                    >
                      <img 
                        src={collection.image} 
                        alt={collection.title}
                        className="w-8 h-8 object-cover rounded"
                      />
                      <span>{collection.title}</span>
                    </button>
                  ))}
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
              href="/blogpage" 
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
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[60]"
          onClick={handleNav}
        />
      )}

      {/* Desktop Dropdown Backdrop */}
      {dropdownOpen && (
        <div 
          className="hidden md:block fixed inset-0 bg-black bg-opacity-20 z-[30]"
          onClick={closeDropdown}
        />
      )}
    </nav>
  );
};

export default Navbar;