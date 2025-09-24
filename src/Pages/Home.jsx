import React, { useEffect} from "react";
import Navbar from "../components/Navbar";  
import Hero from "../components/Hero";
import Temple from "../components/Temple";
import About from "../components/About";  
import Polki from "../components/Polki";
import Arrivals from "../components/Arrivals";
import  Testimonials from "../components/Testimonials";
import Address from "../components/Address";
import AOS from "aos";




const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animate once
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Temple />
      <Polki />
      <Arrivals />
      <Testimonials />
      <Address />
      
    </div>
  );
};

export default Home;