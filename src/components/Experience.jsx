import React from "react";
import {
  Briefcase,
  Building,
  MapPin,
  Calendar,
  ChevronRight,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Krishna Software Solutions",
      role: "Full Stack Developer",
      location: "Bhilai, Chhattisgarh",
      period: "Sep 2025 – Present",
      type: "current",
      achievements: [
        "Building scalable web applications using MERN stack",
        "Implementing complex UI components with modern frameworks",
        "Developing RESTful APIs and integrating third-party services",
        "Collaborating with cross-functional teams on client projects"
      ],
      tech: ["React.js", "Node.js", "TypeScript", "MongoDB", "AWS", "Tailwind CSS"],
    },
    {
      company: "Ayodhya Webosoft",
      role: "Frontend Developer",
      location: "Bhilai, Chhattisgarh",
      period: "Mar 2023 – Sep 2025",
      type: "previous",
      achievements: [
        "Developed responsive web applications with React.js & Tailwind CSS",
        "Integrated REST APIs for dynamic content management",
        "Optimized application performance and loading times",
        "Implemented reusable component libraries"
      ],
      tech: ["React.js", "Tailwind CSS", "REST APIs", "JavaScript", "Git"],
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-900 rounded-lg">
            <Briefcase size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Work Experience
            </h2>
            <p className="text-gray-600 mt-1">Professional journey timeline</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 ml-4"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-3 h-3 rounded-full border-2 border-white z-10 ml-3.5 ${
                  exp.type === "current" ? "bg-gray-900" : "bg-gray-400"
                }`}></div>
                
                {/* Content Card */}
                <div className={`ml-12 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors ${
                  exp.type === "current" ? "border-gray-900" : ""
                }`}>
                  {/* Card Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {exp.role}
                          </h3>
                          {exp.type === "current" && (
                            <span className="px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-gray-700">
                            <Building size={16} className="text-gray-600" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="p-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight size={16} className="text-gray-800 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="px-6 pb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Legend */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-900"></div>
              <span>Current Position</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <span>Previous Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;