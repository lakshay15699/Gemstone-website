import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; 
import Aboutus from "./Pages/About";
import Contactus from "./Pages/Contactus";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Aboutus" element={<Aboutus />} /> 
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;