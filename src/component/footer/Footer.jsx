import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-5 gap-12 text-left">
        <div className="md:col-span-2">
          <div className="text-2xl font-bold text-[#4F39F6] mb-6">DigiTools</div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
          <p className="text-gray-500 text-xs mt-12">© 2026 DigiTools. All rights reserved.</p>
        </div>
        
        {['Product', 'Company', 'Resources'].map((title) => (
          <div key={title}>
            <h5 className="font-bold mb-6">{title}</h5>
            <ul className="text-gray-400 text-sm space-y-4">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-10 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
         <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
         </div>
         <div className="flex space-x-4">
            {['f', 't', 'in'].map((social) => (
              <div key={social} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#4F39F6] transition-colors cursor-pointer uppercase font-bold">{social}</div>
            ))}
         </div>
      </div>
    </footer>
  );
};

export default Footer;