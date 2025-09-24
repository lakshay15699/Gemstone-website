import React from "react";      

const Navbar = () => {
  return (
    <nav className=" px-6 py-3 flex items-center fixed top 0 left-0 w-full bg-white text-white bg-opacity-0 backdrop-md z-40">
       <div text-2xl font-bold> <img src="/images/sayar-white-logo.svg" alt="Logo" className="h-13 w-auto pl-7" /> </div>

      <div className="flex-grow flex justify-center">

        <ul className="flex list-none justify-between w-full max-w-2xl text-white font-semibold">
            <li ><a href="#" className="p-6">COLLECTIONS</a></li>
            <li ><a href="#" className="p-6">ABOUT</a></li>
            <li ><a href="#" className="p-6">TESTIMONIALS</a></li>
            <li ><a href="#" className="p-6">CONTACT</a></li>
            <li> <a href="#" className="p-6">BLOG</a></li>    
           
        </ul>
        </div>
        <div className="flex pl-20"><a href="tel:9841068852" className="p-4">9841068852 </a></div>
    </nav>

    
  );
  
}   

export default Navbar;