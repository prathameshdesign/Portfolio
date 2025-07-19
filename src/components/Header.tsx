import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Mobile hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-teal-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

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

          <div>
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

        {/* Mobile side menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-800 z-50 transform transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-sm">P</span>
                    </div>
                    <span className="text-white font-semibold">Prathamesh Design</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="space-y-4">
                  <a 
                    href="#home" 
                    className="block text-teal-400 hover:text-teal-300 transition-colors py-2 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="#about" 
                    className="block text-gray-300 hover:text-teal-400 transition-colors py-2 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#projects" 
                    className="block text-gray-300 hover:text-teal-400 transition-colors py-2 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Work
                  </a>
                  <a 
                    href="#contact" 
                    className="block text-gray-300 hover:text-teal-400 transition-colors py-2 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </a>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;