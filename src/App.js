import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Temple from './components/Temple';


function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Temple />
    </div>
  );
}

export default App;
