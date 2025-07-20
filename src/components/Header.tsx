import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      {/* The container and padding classes are now directly on the nav for perfect alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="relative flex items-center justify-between h-20">
          {/* Left Group: Logo & Mobile Hamburger */}
          <div className="flex items-center">
            {/* Hamburger Button (Mobile Only) */}
            <div className="lg:hidden mr-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-teal-400 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">P</span>
              </div>
              <div className="hidden lg:flex flex-col min-w-0">
                <span className="text-white font-semibold text-lg leading-tight">Prathamesh Design</span>
                <span className="text-gray-400 text-xs leading-tight">Strategy • Clarity • Conversion</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation (Center) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</a>
              <a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors">Services</a>
            </div>
          </div>

          {/* Right Group */}
          <div className="flex items-center">
            <a
              href="#contact"
              className="bg-teal-400 hover:bg-teal-300 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pb-4">
          <nav className="flex flex-col items-center space-y-2 bg-gray-800/90 rounded-lg p-4">
            <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;