
import React from 'react';
import { Certificate, ArrowRight } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      title: 'Web Development Certification',
      issuer: 'FreeCodeCamp',
      date: '2024',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, and modern web development practices.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
    {
      title: 'Java Programming',
      issuer: 'Oracle',
      date: '2023',
      description: 'Advanced Java programming certification covering OOP concepts, data structures, and application development.',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms']
    },
    {
      title: 'Python Basics',
      issuer: 'Python Institute',
      date: '2023',
      description: 'Foundation certification in Python programming, covering syntax, data types, and basic programming concepts.',
      skills: ['Python', 'Programming Logic', 'Data Types', 'Functions']
    },
    {
      title: 'Responsive Web Design',
      issuer: 'Google Developers',
      date: '2024',
      description: 'Certification focused on creating responsive, mobile-first web designs using modern CSS techniques.',
      skills: ['CSS Grid', 'Flexbox', 'Media Queries', 'Mobile Design']
    },
    {
      title: 'Git & Version Control',
      issuer: 'GitHub',
      date: '2024',
      description: 'Comprehensive understanding of version control systems, Git workflows, and collaborative development.',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration']
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Certificates
        </h2>
        
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-gray-800/60 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors">
                      <Certificate className="text-blue-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium">{cert.issuer}</p>
                      <p className="text-blue-400 text-sm">{cert.date}</p>
                    </div>
                    <button className="p-1 hover:bg-blue-500/20 rounded transition-colors">
                      <ArrowRight size={16} className="text-gray-400" />
                    </button>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed h-16 overflow-hidden">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="text-gray-400 text-sm">← Scroll to see more certificates →</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
