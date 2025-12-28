import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Globe, CpuIcon, GraduationCap, Terminal, Mail, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Extract active section from pathname
  const activeSection = location.pathname.split('/')[1] || '';

  const sections = [
    { id: 'experience', label: 'Experience', icon: Briefcase, path: '/experience' },
    { id: 'projects', label: 'Projects', icon: Globe, path: '/projects' },
    { id: 'skills', label: 'Skills', icon: CpuIcon, path: '/skills' },
    { id: 'education', label: 'Education', icon: GraduationCap, path: '/education' },
  ];

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Home Link */}
            <Link 
              to="/" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              onClick={handleNavClick}
            >
              <div className="p-2 bg-gray-900 rounded-lg">
                <Terminal size={20} className="text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">SK</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100 p-1 rounded-full">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.path}
                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <section.icon size={16} />
                  {section.label}
                </Link>
              ))}
            </div>
            
            {/* Desktop Contact/Links */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-2">
                <a 
                  href="mailto:shivaku5544@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Mail size={16} />
                  Contact
                </a>
                <a 
                  href="https://linkedin.com/in/U Shiv Kumar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                >
                  <Linkedin size={18} className="text-gray-700" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3 border-t border-gray-200 pt-3">
              <div className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={handleNavClick}
                  >
                    <section.icon size={18} />
                    <span className="font-medium">{section.label}</span>
                  </Link>
                ))}
                
                <div className="flex items-center gap-2 pt-2">
                  <a 
                    href="mailto:shivaku5544@gmail.com"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={handleNavClick}
                  >
                    <Mail size={16} />
                    Contact
                  </a>
                  <a 
                    href="https://linkedin.com/in/U Shiv Kumar" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                    onClick={handleNavClick}
                  >
                    <Linkedin size={20} className="text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;