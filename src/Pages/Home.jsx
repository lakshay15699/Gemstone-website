import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Hooks
import { useScrollAnimation } from "../Hooks/useSmoothScroll";

// Component imports
import Hero from "../components/Hero";
import Temple from "../components/Temple";
import About from "../components/About";  
import Polki from "../components/Polki";
import Arrivals from "../components/Arrivals";
import Testimonials from "../components/Testimonials";
import Address from "../components/Address";


import Blog from "../components/Blog";
import Templecollection from "../components/Templecollection";

const Home = () => {
  useEffect(() => {
    // Simple scroll animation without external dependencies
    const observeElements = () => {
      const sections = document.querySelectorAll('section[id]');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      sections.forEach(section => {
        section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        observer.observe(section);
      });

      return () => observer.disconnect();
    };

    const cleanup = observeElements();
    return cleanup;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          id="hero"
          className="scroll-mt-20"
        >
          <Hero />
        </section>

        {/* About Section */}
        <section 
          id="about"
          className="scroll-mt-20"
        >
          <About />
        </section>

        {/* Temple Section */}
        <section 
          id="temple"
          className="scroll-mt-20"
        >
          <Temple />
        </section>

        {/* Polki Section */}
        <section 
          id="polki"
          className="scroll-mt-20"
        >
          <Polki />
        </section>

        {/* New Arrivals Section */}
        <section 
          id="arrivals"
          className="scroll-mt-20"
        >
          <Arrivals />
        </section>

        {/* Testimonials Section */}
        <section 
          id="testimonials"
          className="scroll-mt-20"
        >
          <Testimonials />
        </section>

        {/* Address Section */}
        <section 
          id="address"
          className="scroll-mt-20"
        >
          <Address />
        </section>

        {/* Blog Section */}
        <section 
          id="blog"
          className="scroll-mt-20"
        >
          <Blog />
        </section>

        {/* Contact Section */}
        
        
      </main>
      
      {/* Floating WhatsApp */}
      
      
      {/* Footer */}
      
    </div>
  );
};

export default Home;