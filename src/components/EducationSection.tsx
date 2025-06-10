
import React from 'react';
import { Book } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      year: '2022-2027',
      title: 'M.Tech in Software Engineering',
      institution: 'Vellore Institute of Technology',
      grade: 'CGPA: 8.32',
      description: 'Integrated Masters program focusing on advanced software engineering principles, system design, and modern development practices.'
    },
    {
      year: '2022',
      title: '12th Grade',
      institution: 'Seventh Day Adventist Matric Hr. Sec. School, Vellore',
      grade: '88.6%',
      description: 'Completed higher secondary education with strong foundation in mathematics and science.'
    },
    {
      year: '2020',
      title: '10th Grade',
      institution: 'Seventh Day Adventist Matric Hr. Sec. School, Vellore',
      grade: '85.6%',
      description: 'Completed secondary education with consistent academic performance.'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                  <div className="bg-gray-800/60 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center mb-3">
                      <Book className="text-blue-400 mr-3" size={24} />
                      <span className="text-blue-400 font-semibold text-lg">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-2">{item.institution}</p>
                    <p className="text-green-400 font-semibold mb-3">{item.grade}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
