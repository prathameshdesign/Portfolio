import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-teal-400 hover:text-teal-300 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</a>
            <a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors">Services</a>
          </div>

          {/* Mobile hamburger menu and Contact button */}
          <div className="flex items-center space-x-3">
            {/* Contact button */}
            <a
              href="#contact-form"
              className="bg-teal-400 hover:bg-teal-300 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Contact
            </a>

            {/* Mobile hamburger button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-teal-400 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {/* Show different icons based on menu state */}
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
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-4">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;