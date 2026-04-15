import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
       
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

     
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

      
        <div className="hidden md:flex items-center gap-5">
          <FiShoppingCart className="text-xl cursor-pointer" />

          <button className="text-gray-700 font-medium hover:text-purple-600">
            Login
          </button>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>

    
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <button className="text-left">Login</button>
            <button className="bg-purple-600 text-white py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;