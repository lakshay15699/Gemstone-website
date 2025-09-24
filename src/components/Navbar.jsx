import React from "react";      

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3   ">
       <div> <img src="/sayar-white-logo.svg" alt="Logo" className="h-10" /> </div>
      

        <ul className="flex list-none justify-between w-full max-w-md">
            <li ><a href="#" className="flex">COLLECTIONS</a></li>
            <li ><a href="#">ABOUT</a></li>
            <li ><a href="#">TESTIMONIALS</a></li>
            <li ><a href="#">CONTACT</a></li>
            <li> <a href="#">BLOG</a></li>    
        </ul>
    </nav>

    
  );
  
}   

export default Navbar;