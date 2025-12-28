import React from "react";
import {
  CpuIcon,
  Palette,
  Server,
  Database,
  GitBranch,
  Terminal,
  Layers,
  Wrench,
} from "lucide-react";

const Skills = () => {
  const skill = {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5/CSS3",
      "Framer Motion",
      "Redux Toolkit"
    ],
    backend: [
      "Node.js", 
      "Express.js", 
      "REST APIs", 
      "Laravel",
      "JWT Authentication",
      "API Design"
    ],
    database: [
      "MongoDB", 
      "MySQL", 
      "Firebase", 
    ],
    tools: [
      "Git & GitHub", 
      "VS Code", 
      "Figma", 
      "Postman", 
      "npm/yarn",
      "Dev Tools"
    ],
   
  };

  const icons = {
    frontend: Palette,
    backend: Server,
    database: Database,
    tools: Wrench,
    deployment: Terminal
  };

  const categoryTitles = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    database: "Database & Storage",
    tools: "Development Tools",
    deployment: "Deployment & DevOps"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-900 rounded-lg">
            <CpuIcon size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Technical Skills
            </h2>
            <p className="text-gray-600 mt-1">Technologies & tools expertise</p>
          </div>
        </div>

       

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(skill).map(([category, items], index) => {
            const Icon = icons[category];
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="p-2 bg-gray-900 rounded">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {categoryTitles[category]}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {items.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-md hover:border-gray-300 hover:bg-gray-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Proficiency Level */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Proficiency Level</span>
                    <span className="text-sm font-medium text-gray-900">
                      {category === "frontend" || category === "backend" ? "Advanced" : "Intermediate"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`bg-gray-900 h-1.5 rounded-full ${
                        category === "frontend" || category === "backend" ? "w-4/5" : "w-3/5"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                Primary Focus
              </h4>
              <p className="text-gray-700">
                MERN Stack Development with emphasis on scalable architecture
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                Learning Currently
              </h4>
              <p className="text-gray-700">
                Advanced TypeScript, Microservices, Cloud Architecture
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                Experience Level
              </h4>
              <p className="text-gray-700">
                1+ years of production-level experience across all stacks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;