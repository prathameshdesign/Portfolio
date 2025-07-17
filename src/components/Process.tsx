import React from 'react';

const Process = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">My Proven Process</h2>
          <p className="text-gray-300 text-lg">(Keeps your project simple & stress-free)</p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Discover</h4>
              <p className="text-gray-400 text-sm">We'll figure out exactly what you want your site to do, who it's for, and how to make your brand stand out.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Design</h4>
              <p className="text-gray-400 text-sm">I'll create wireframes & mockups so you can see how it all looks before we build. Easy back-and-forth for tweaks.</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Launch</h4>
              <p className="text-gray-400 text-sm">Your site goes live looking sharp and ready to impress investors or close more leads.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;