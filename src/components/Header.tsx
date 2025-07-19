import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo - Full on desktop, P icon only on mobile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-sm">P</span>
            </div>
            <div className="hidden lg:flex flex-col min-w-0">
              <span className="text-white font-semibold text-lg leading-tight">Prathamesh Design</span>
              <span className="text-gray-400 text-xs leading-tight">Strategy • Clarity • Conversion</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-teal-400 hover:text-teal-300 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</a>
            <a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors">Services</a>
          </div>

          {/* Mobile hamburger menu and Contact button */}
          <div className="flex items-center space-x-3">
            {/* Contact button - visible on all screens */}
            <a 
              href="#contact-form" 
              className="bg-teal-400 hover:bg-teal-300 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Contact
            </a>
            
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
          </div>
        </nav>

        {/* Mobile full-screen menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            {/* Full-screen overlay */}
            <div 
              className="fixed inset-0 bg-gray-900 z-[9999] flex flex-col"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Header area with close button */}
              <div className="flex justify-between items-center p-6 border-b border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">P</span>
                  </div>
                  <span className="text-white font-semibold text-lg">Menu</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation links */}
              <div 
                className="flex-1 flex flex-col justify-center px-6"
                onClick={(e) => e.stopPropagation()}
              >
                <nav className="space-y-8">
                  <a 
                    href="#home" 
                    className="block text-white hover:text-teal-400 transition-colors text-2xl font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="#about" 
                    className="block text-white hover:text-teal-400 transition-colors text-2xl font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#projects" 
                    className="block text-white hover:text-teal-400 transition-colors text-2xl font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Work
                  </a>
                  <a 
                    href="#services" 
                    className="block text-white hover:text-teal-400 transition-colors text-2xl font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </a
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