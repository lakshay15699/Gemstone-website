import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';


function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
