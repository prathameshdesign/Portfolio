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
          <div className="lg:hidden fixed inset-0 z-[9999]">
            {/* Full-screen overlay background */}
            <div 
              className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            {/* Menu content */}
            <div className="fixed inset-0 flex flex-col items-center justify-center z-[10000]">
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-12">
                <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-lg">P</span>
                </div>
                <span className="text-white font-semibold text-2xl">Prathamesh Design</span>
              </div>
              
              {/* Navigation links */}
              <nav className="space-y-8 text-center">
                <a 
                  href="#home" 
                  className="block text-teal-400 hover:text-teal-300 transition-colors text-2xl font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block text-white hover:text-teal-400 transition-colors text-2xl font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="block text-white hover:text-teal-400 transition-colors text-2xl font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work
                </a>
                <a 
                  href="#contact" 
                  className="block text-white hover:text-teal-400 transition-colors text-2xl font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
              </nav>
              
              {/* Contact button */}
              <div className="mt-12">
                <a 
                  href="#contact-form" 
                  className="bg-teal-400 hover:bg-teal-300 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;