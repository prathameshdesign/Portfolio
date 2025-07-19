import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-sm">P</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-white font-semibold text-lg leading-tight">Prathamesh Design</span>
              <span className="text-gray-400 text-xs leading-tight hidden sm:block">Strategy • Clarity • Conversion</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-teal-400 hover:text-teal-300 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</a>
            <a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors">Services</a>
          </div>

          <div className="lg:hidden">
            <a 
              href="#contact-form" 
              className="bg-teal-400 hover:bg-teal-300 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors text-sm ml-4"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="#contact-form" 
              className="bg-teal-400 hover:bg-teal-300 text-gray-900 px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;