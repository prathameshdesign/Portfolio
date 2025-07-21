import ProfileImage from '../assets/Profile_Photo_2.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Who am I?
              </h2>
              <div className="w-20 h-1 bg-teal-400"></div>
            </div>

            <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a web designer who helps SaaS & startup founders turn bland websites into trust-building, investor-friendly sites that clearly explain what they do so they close more deals and save hours on demos.
              </p>
              <p>
                I mainly work with founders across India, the US, and Europe. Whether you're raising funds or trying to land more clients, I'll make sure your site does the heavy lifting for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-teal-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Design that Converts</h3>
                <p className="text-gray-400 text-sm">Websites that actually work not just look good in your portfolio.</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-teal-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Crystal clear clarity</h3>
                <p className="text-gray-400 text-sm">I hate confusing sites as much as you do. Let's make yours stupid simple to understand.</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-teal-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Instant Credibility</h3>
                <p className="text-gray-400 text-sm">Your first impression shouldn't scream 'I just started' even if you did.</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-teal-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Phone-friendly</h3>
                <p className="text-gray-400 text-sm">Tested on real phones (not just that fancy simulator designers love).</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 sm:w-96 h-72 sm:h-96 rounded-full overflow-hidden border-4 border-teal-400/30">
                <img 
                  src={ProfileImage} 
                  alt="Prathamesh working" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
