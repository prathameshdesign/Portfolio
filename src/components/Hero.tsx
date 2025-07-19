import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-900 relative overflow-hidden pt-20 px-4 sm:px-6">
      {/* Flowing background shapes */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0 400C200 300 400 500 600 400C800 300 1000 500 1200 400V0H0V400Z" fill="url(#gradient1)" opacity="0.1"/>
          <path d="M0 600C200 500 400 700 600 600C800 500 1000 700 1200 600V200H0V600Z" fill="url(#gradient2)" opacity="0.1"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm Prathamesh
              </h1>
              <p className="text-lg sm:text-xl text-teal-400 font-medium">
                I design conversion-focused websites that help startups look trustworthy and sell more.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Helping founders present their best digital face
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="group bg-teal-400 hover:bg-teal-300 text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2">
                <span>See My Work</span>
                <span className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">→</span>
              </a>
              <a href="#contact-form" className="group border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2">
                <span>Let's Talk</span>
                <span className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">→</span>
              </a>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/prathamesh-sawant-social" className="w-10 h-10 bg-gray-800 hover:bg-teal-400 rounded-lg flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/prathameshdesign" className="w-10 h-10 bg-gray-800 hover:bg-teal-400 rounded-lg flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Hexagonal background */}
              <div className="w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <polygon 
                    points="100,10 170,50 170,130 100,170 30,130 30,50" 
                    fill="url(#heroGradient)" 
                    className="drop-shadow-2xl"
                  />
                  <defs>
                    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14B8A6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-6 sm:inset-8 lg:inset-10 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img 
                    src="src/assets/Profile_Photo_Hero_Section.jpeg" 
                    alt="Prathamesh" 
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;