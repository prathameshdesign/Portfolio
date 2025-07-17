import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">P</span>
              </div>
              <span className="text-white font-semibold text-lg">Prathamesh Design</span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm leading-relaxed">
                Building websites that work harder than your morning coffee. Strategy, clarity & real results no fluff.
              </p>
              <p className="text-gray-500 text-xs">
                Trusted by SaaS & startup founders worldwide.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Projects</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Services</a></li>
              <li><a href="#contact-form" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm break-all">workpratham907@gmail.com</p>
              <p className="text-gray-400 text-sm">Navi Mumbai, India</p>
              <div className="flex space-x-3 pt-2">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-xs text-center break-words">
            © 2025 Prathamesh Design • Designed & built by me. <a href="#contact-form" className="text-teal-400 hover:text-teal-300 transition-colors">Hire me</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;