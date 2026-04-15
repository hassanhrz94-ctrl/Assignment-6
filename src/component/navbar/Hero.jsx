import React from "react";
import { FaPlay } from "react-icons/fa";
import heroImg from "../../../assets/products/banner.png"

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        
        
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>

       
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Supercharge Your <br />
            <span className="text-purple-600">Digital Workflow</span>
          </h1>

         
          <p className="text-gray-600 mt-6 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

    
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition">
              Explore Products
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition">
              <FaPlay className="text-sm" />
              Watch Demo
            </button>
          </div>
        </div>

       
        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={heroImg} 
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>

        
          <div className="absolute inset-0 bg-white/40 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;