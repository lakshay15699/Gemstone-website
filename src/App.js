import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home"; 
import Aboutus from "./Pages/About";
import Contactus from "./Pages/Contactus";
import Testimonial from "./Pages/Testimonial";
import Blogpage from "./Pages/Blogpage";
import Templecollection from "./components/Templecollection";
import Polkicollection from "./components/Polkicollection";
import WhatsAppFloat from "./components/Whatsappfloat";
import Contact from "./components/Contact";


function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Templecollection" element={<Templecollection />} />
        <Route path="/Polkicollection" element={<Polkicollection />} />

        <Route path="/Aboutus" element={<Aboutus />} /> 
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Blogpage" element={<Blogpage />} />
      </Routes>
      <WhatsAppFloat />
      <Contact />
      <div className="w-full py-2 mt-0 text-sm text-white font-semibold bg-yellow-500 text-center">
        © 2024 Sayar Jewellers. All rights reserved.
      </div>
      
    </Router>
  );
}

export default App;