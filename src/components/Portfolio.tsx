import LaunchwiseDashboard from '../assets/Launchwise_Dashboard.png';
import BugRadarDashboard from '../assets/BugRadar_Dashboard.png';

const Portfolio = () => {
  const projects = [
    {
      title: "Launchwise",
      subtitle: "Investor Updates Made Simple",
      description: "Designed a clean platform for startups to share investor updates. Focused on credibility, easy reading, and a layout that guides people to the right info.",
      image: LaunchwiseDashboard,
      tags: ["Platform", "SaaS"],
      liveSiteUrl: "https://launchwise.netlify.app/", // Added this line
      caseStudyUrl: "#" 
    },
    {
      title: "BugRadar",
      subtitle: "Bug Reports That Actually Make Sense",
      description: "Built a dev-focused bug reporting tool that's clear, tidy, and on-brand. Helps teams track issues without the usual clutter.",
      image: BugRadarDashboard,
      tags: ["Tool", "Developer"],
      liveSiteUrl: "https://bugradardesign.netlify.app/" ,
      caseStudyUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Some work I've done
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-teal-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tag === 'Free' ? 'bg-green-500/20 text-green-400' :
                          tag === 'New' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-teal-500/20 text-teal-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-teal-400 text-sm font-medium mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    {/* --- THIS IS THE CHANGED LINK --- */}
                    <a 
                      href={project.liveSiteUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-teal-400 hover:bg-teal-300 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Visit Live Site
                    </a>
                    <a 
                      href="#" 
                      className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="text-gray-300 hover:text-teal-400 transition-colors text-lg"
          >
            Want to see more? Let's Talk.
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;