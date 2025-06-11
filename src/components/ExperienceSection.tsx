
import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      period: 'May - June 2025',
      title: 'Web Development Intern - Online',
      company: 'InternPe',
      description: 'Developed responsive web applications using modern frameworks. Gained hands-on experience in full-stack development, working with HTML, CSS, JavaScript, and various web technologies. Collaborated with senior developers on real-world projects.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Git']
    },
    {
      period: 'Oct - Nov 2023',
      title: 'Java Programming Intern - Online',
      company: 'RineX',
      description: 'Enhanced Java programming skills through practical projects. Learned object-oriented programming concepts, data structures, and algorithms. Developed console-based applications and gained experience in debugging and code optimization.',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms', 'Problem Solving']
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
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
