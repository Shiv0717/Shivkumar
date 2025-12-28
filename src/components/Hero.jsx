import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Code,
  Globe,
  GraduationCap,
  FileText,
  ChevronRight,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function PortfolioDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    {
      label: "Projects",
      value: "12+",
      icon: Globe,
    },
    {
      label: "Experience",
      value: "1+ Years",
      icon: Briefcase,
    },
    {
      label: "Technologies",
      value: "20+",
      icon: Code,
    },
    {
      label: "Education",
      value: "B.Tech",
      icon: GraduationCap,
    },
  ];
  return (
    <div className=" ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div
          className={`transition-all duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Main Dashboard Card */}
          <div className="bg-white rounded-lg border border-gray-200 ">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-800">
                    <img
                      src="/logo/2Q__.jpg"
                      alt="profile"
                      className="w-full h-full object-contain grayscale"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      U Shiv Kumar
                    </h1>
                    <p className="text-gray-600 mt-1">
                      Full Stack Developer
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block w-2 h-2 bg-gray-800 rounded-full"></span>
                      <span className="text-sm text-gray-600">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Contact & Bio */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Contact Info */}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gray-800"></span>
                      Contact Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                        <div className="p-2 bg-gray-100 rounded">
                          <Phone size={18} className="text-gray-800" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="text-gray-900 font-medium">+91 80743 79493</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                        <div className="p-2 bg-gray-100 rounded">
                          <MapPin size={18} className="text-gray-800" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Location</p>
                          <p className="text-gray-900 font-medium">Bhilai, CG</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gray-800"></span>
                      Professional Summary
                    </h2>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">
                        Passionate Full Stack Developer with 1+ years of experience
                        building scalable web applications. Specialized in React,
                        Node.js, and modern JavaScript ecosystems. Focused on
                        creating seamless user experiences with cutting-edge
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Stats & Actions */}
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gray-800"></span>
                      Overview
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className="p-2 mb-2">
                              <stat.icon size={20} className="text-gray-800" />
                            </div>
                            <div className="text-xl font-bold text-gray-900">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
               
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}