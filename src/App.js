import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home"; 
import Aboutus from "./Pages/About";
import Contactus from "./Pages/Contactus";
import Testimonial from "./Pages/Testimonial";


function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Aboutus" element={<Aboutus />} /> 
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Testimonial" element={<Testimonial />} />
      </Routes>
    </Router>
  );
}

export default App;