import React from "react";
import Navbar from "../components/Navbar";  
import Hero from "../components/Hero";
import Temple from "../components/Temple";
import About from "../components/About";  


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Temple />
      
    </div>
  );
};

export default Home;