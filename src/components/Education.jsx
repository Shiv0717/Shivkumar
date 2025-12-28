import React from "react";
import { GraduationCap, Award, Shield, Target, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gray-900 rounded-lg">
          <GraduationCap size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Education & Certifications
          </h2>
          <p className="text-gray-600 mt-1">Academic background and professional certifications</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Column */}
        <div className="space-y-6">
          {/* KL University */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-900 rounded">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    KL University
                  </h3>
                  <p className="text-gray-700">
                    Bachelor of Technology in Computer Science
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">8.83</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">CGPA</div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={14} />
                <span>2020 – 2024 | Vijayawada, Andhra Pradesh</span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  Key Courses Studied
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Data Structures",
                    "Database Management",
                    "Computer Networks",
                    "Web Technologies",
                  ].map((course, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 border border-gray-200 rounded">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                      <span className="text-sm text-gray-800">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Intermediate Education */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-900 rounded">
                  <BookOpen size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Board of Intermediate Education
                  </h3>
                  <p className="text-gray-700">
                    Higher Secondary Education (Class XII)
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">8.44</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">CGPA</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={14} />
                <span>2018 – 2020 | Andhra Pradesh</span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  Subjects
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Mathematics", "Physics", "Chemistry"].map((subject, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 text-gray-800 rounded-md text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div className="space-y-6">
          {/* Microsoft Certification */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-200">
              <div className="p-3 bg-gray-900 rounded">
                <Shield size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900">
                    Microsoft Azure Fundamentals (AZ-900)
                  </h4>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                    Certified
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Cloud concepts, Azure services, security, pricing, and cloud architecture
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">Microsoft Certified</span>
              <span className="text-gray-600">Issued 2024</span>
            </div>
          </div>

          {/* Production Excellence */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-200">
              <div className="p-3 bg-gray-900 rounded">
                <Target size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900">
                    Production Excellence
                  </h4>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                    Verified
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  10+ live production-level web projects successfully deployed and maintained
                </p>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                Project Domains
              </h5>
              <div className="flex flex-wrap gap-2">
                {["E-commerce", "Real Estate", "Healthcare", "Travel", "Education", "AI/ML"].map((domain, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-800 text-xs rounded-md"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Certifications */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-900 rounded">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Additional Achievements
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-700">Multiple hackathon participations</span>
                  </li>
                 
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-700">Technical workshop conductor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Education;