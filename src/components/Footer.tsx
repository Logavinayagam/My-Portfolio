import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Logavinayagam M
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Software Engineer passionate about creating innovative solutions and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Certificates', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    } else {
                      console.warn(`Section #${link.toLowerCase()} not found`);
                    }
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Logavinayagam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
              >
                <Github size={20} className="text-gray-300" />
              </a>
              <a 
                href="https://linkedin.com/in/loga2345" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
              >
                <Linkedin size={20} className="text-gray-300" />
              </a>
              <a 
                href="mailto:logavinayagam74@gmail.com" 
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
              >
                <Mail size={20} className="text-gray-300" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for opportunities and collaborations.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © All Rights Reserved Logavinayagam M (2025) | Made with ❤️ Lovable.Ai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
