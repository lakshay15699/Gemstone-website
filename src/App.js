import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; 
import Aboutus from "./Pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Aboutus" element={<Aboutus />} /> 
      </Routes>
    </Router>
  );
}

export default App;