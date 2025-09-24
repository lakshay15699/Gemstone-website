import React , {useState} from "react";      
import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <nav className="px-6 py-3 flex items-center fixed top-0 left-0 w-full bg-white text-white bg-opacity-0 backdrop-md z-40 ">
      
      <div className="text-2xl font-bold">
        <img
          src="/images/sayar-white-logo.svg"
          alt="Logo"
          className="h-13 w-auto pl-7"
        />
      </div>

      
      <div className="flex-grow  flex justify-center">
        <ul className="flex list-none justify-center md:justify-between w-full md:max-w-2xl text-white font-semibold  " >
          <li>
            <a href="#" className="p-3 md:p-6 block text-center">
              COLLECTIONS
            </a>
          </li>
          <li>
            <a href="#" className="p-3 md:p-6 block text-center">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="p-3 md:p-6 block text-center">
              TESTIMONIALS
            </a>
          </li>
          <li>
            <a href="#" className="p-3 md:p-6 block text-center">
              CONTACT
            </a>
          </li>
          <li>
            <a href="#" className="p-3 md:p-6 block text-center">
              BLOG
            </a>
          </li>
        </ul>
      </div>
      

    
      <div className="flex pl-0 md:pl-20 mt-2 md:mt-0">
         <a
    href="tel:9841068852"
    className="p-3 md:p-4 flex items-center gap-2 text-center"
  >
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5.5A2.5 2.5 0 014.5 3h1A2.5 2.5 0 018 5.5V7a2 2 0 01-2 2H5a11 11 0 0011 11v-1a2 2 0 012-2h1.5A2.5 2.5 0 0122 18.5v1A2.5 2.5 0 0119.5 22C10.387 22 3 14.613 3 5.5z"
      />
    </svg>

  
    <span>9841068852</span>
  </a>
      </div>

      
    </nav>

    
  );  

  
}   

export default Navbar;