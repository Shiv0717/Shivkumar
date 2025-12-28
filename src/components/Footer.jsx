import React from 'react';
import { Terminal, Mail, Github, Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <div>
        <footer className=" bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Terminal size={20} />
              </div>
              <div>
                <p className="font-semibold">U Shiv Kumar</p>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a href="mailto:shivaku5544@gmail.com" className="hover:text-gray-300 transition-colors">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/Shiv0717" target="_blank" className="hover:text-gray-300 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/U Shiv Kumar" target="_blank" className="hover:text-gray-300 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© 2025 U Shiv Kumar. Crafted with passion and precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
