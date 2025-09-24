import React from "react";      

const Navbar = () => {
  return (
    <nav className=" px-6 py-3 flex items-center fixed top 0 left-0 w-full bg-white text-white bg-opacity-70 backdrop-blur-md z-50">
       <div text-2xl font-bold> <img src="/images/sayar-white-logo.svg" alt="Logo" className="h-10 w-auto " /> </div>
      

        <ul className="flex list-none justify-around w-full max-w-md">
            <li ><a href="#" className="p-8">COLLECTIONS</a></li>
            <li ><a href="#" className="p-8">ABOUT</a></li>
            <li ><a href="#" className="p-8">TESTIMONIALS</a></li>
            <li ><a href="#" className="p-8">CONTACT</a></li>
            <li> <a href="#" className="p-8">BLOG</a></li>    
          <li> <a href="tel:9841068852" className="p-4">9841068852 </a></li>
        </ul>
    </nav>

    
  );
  
}   

export default Navbar;