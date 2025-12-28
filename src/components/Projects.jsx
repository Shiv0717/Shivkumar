import { ExternalLink, ChevronRight, Briefcase, Calendar, Code } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Gunti Universe",
      description: "E-commerce Platform",
      period: "Sep 2023 – Oct 2023",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "REST APIs", "PhonePe"],
      live: "https://guntiuniverse.com/",
      achievements: [
        "Shopping cart system",
        "Product filtering",
        "Order management"
      ]
    },
    {
      name: "ProptKart",
      description: "Real Estate Listing Platform",
      period: "May 2023 – Jun 2023",
      tech: ["React.js", "REST API", "Tailwind CSS", "Framer Motion"],
      live: "https://proptkart.com/type",
      achievements: [
        "Property search filters",
        "Agent management",
        "Image gallery"
      ]
    },
    {
      name: "Medishine Health",
      description: "Healthcare & Medical Services Platform",
      period: "2024",
      tech: ["React.js", "Tailwind CSS", "REST APIs"],
      live: "https://www.medishinehealth.com/",
      achievements: [
        "Service-based healthcare UI",
        "SEO-optimized pages",
        "Fully responsive medical layouts"
      ]
    },
    {
      name: "Sharezy",
      description: "Ride Booking Platform (Ola-like)",
      period: "2024",
      tech: ["React.js", "Tailwind CSS", "REST APIs"],
      live: "https://sharezy.in/",
      achievements: [
        "Ride booking flow",
        "Driver & user interface",
        "Location-based service UI"
      ]
    },
    {
      name: "AnkVidya",
      description: "Numerology & Astrology Platform",
      period: "2024",
      tech: ["React.js", "Tailwind CSS"],
      live: "https://ankvidya.in/",
      achievements: [
        "Numerology calculation pages",
        "Personalized result UI",
        "Clean spiritual design system"
      ]
    },
    {
      name: "Shri Shankaracharya",
      description: "NGO & Educational Trust Website",
      period: "2023",
      tech: ["React.js", "Tailwind CSS"],
      live: "https://shrishankaracharya.org/",
      achievements: [
        "NGO informational pages",
        "Donation & outreach content",
        "Accessible navigation structure"
      ]
    },
    {
      name: "Private Job Search",
      description: "Job Listing & Career Portal",
      period: "2023",
      tech: ["React.js", "Tailwind CSS", "REST APIs"],
      live: "https://privatejobsearch.com/",
      achievements: [
        "Job search and filtering",
        "Category-based listings",
        "Mobile-first design"
      ]
    },
    
    
  ];
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gray-900 rounded-lg">
          <Code size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Projects & Portfolio
          </h2>
          <p className="text-gray-600 mt-1">Showcase of technical implementations</p>
        </div>
      </div>

      

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group">
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-900 transition-all duration-300 h-full flex flex-col bg-white">
        {/* Card Header */}
        <div className="p-5 border-b border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                {project.current && (
                  <span className="px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded">
                    Current
                  </span>
                )}
                {project.status === "active" && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                    Active
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-3">{project.description}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={14} />
            <span>{project.period}</span>
          </div>
        </div>

        {/* Achievements */}
        <div className="p-5 flex-1">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
            Key Features
          </h4>
          <ul className="space-y-2 mb-4">
            {project.achievements.slice(0, 2).map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight size={14} className="text-gray-800 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="px-5 pb-5">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-800 text-xs rounded-md">
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 text-xs text-gray-500">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-200 bg-gray-50">
          {project.live ? (
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group-hover:text-gray-900 text-gray-800 transition-colors"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={14} />
                <span className="text-sm font-medium">View Project</span>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <div className="flex items-center justify-between text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-sm">In Progress</span>
              </div>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">Private</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}