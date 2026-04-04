

import heroImg from "../../../assets/products/banner.png"
function Navbar() {
  
  return (
   <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-[#4F39F6]">DigiTools</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-[#4F39F6]">Products</a>
          <a href="#" className="hover:text-[#4F39F6]">Features</a>
          <a href="#" className="hover:text-[#4F39F6]">Pricing</a>
          <a href="#" className="hover:text-[#4F39F6]">Testimonials</a>
          <a href="#" className="hover:text-[#4F39F6]">FAQ</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium">Login</button>
          <button className="bg-[#4F39F6] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-opacity-90">
            Get Started
          </button>
        </div>
      </nav>
      
              <section className="max-w-7xl mx-auto px-10 pt-16 pb-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <span className="bg-[#4F39F6]/10 text-[#4F39F6] text-xs font-bold px-3 py-1 rounded-full">
            ● New: AI-Powered Tools Available
          </span>
          <h1 className="text-5xl font-extrabold mt-6 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-gray-500 mt-6 text-lg max-w-md">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex space-x-4 mt-10">
            <button className="bg-[#4F39F6] text-white px-8 py-3 rounded-lg font-medium">Explore Products</button>
            <button className="border border-[#4F39F6] text-[#4F39F6] px-8 py-3 rounded-lg font-medium flex items-center">
              <span className="mr-2">▶</span> Watch Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end">
          <div className="w-[400px] h-[300px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
            <img src={heroImg} alt="" srcset="" />
          </div>
        </div>
      </section>
        <section className="bg-gradient-to-r from-[#4F39F6] to-[#7C3AED] py-12">
      <div className="max-w-7xl mx-auto px-10 flex flex-wrap justify-around text-white text-center">
        <div>
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-purple-100 text-sm mt-1">Active Users</p>
        </div>
        <div className="h-12 w-px bg-white/20 hidden md:block"></div>
        <div>
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-purple-100 text-sm mt-1">Premium Tools</p>
        </div>
        <div className="h-12 w-px bg-white/20 hidden md:block"></div>
        <div>
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-purple-100 text-sm mt-1">Rating</p>
        </div>
      </div>
    </section>
      </div>
      
      
  );
}
export default Navbar