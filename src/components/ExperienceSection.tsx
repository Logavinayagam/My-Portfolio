import React, { useState } from 'react';
import { Briefcase, X } from 'lucide-react';

const ExperienceSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const experiences = [
    {
      period: 'May - June 2025',
      title: 'Web Development Intern - Online',
      company: 'InternPe',
      description: 'Developed responsive web applications using modern frameworks. Gained hands-on experience in full-stack development, working with HTML, CSS, JavaScript, and various web technologies. Collaborated with senior developers on real-world projects.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Git'],
      certificate: '/images/certificates/internpe.jpg'
    },
    {
      period: 'Oct - Nov 2023',
      title: 'Java Programming Intern - Online',
      company: 'RineX',
      description: 'Enhanced Java programming skills through practical projects. Learned object-oriented programming concepts, data structures, and algorithms. Developed console-based applications and gained experience in debugging and code optimization.',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms', 'Problem Solving'],
      certificate: '/images/certificates/rinex.jpg'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/60 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-blue-400 text-sm font-semibold mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-gray-300 font-medium">{exp.company}</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Button */}
              <button
                onClick={() => setSelectedCertificate(index)}
                className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2 transition-colors"
              >
                View Certificate
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <X className="text-white" size={24} />
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {experiences[selectedCertificate].title} - Certificate
              </h3>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img
                  src={experiences[selectedCertificate].certificate}
                  alt={`${experiences[selectedCertificate].title} Certificate`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
