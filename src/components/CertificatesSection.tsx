import React, { useState } from 'react';
import { Award, ArrowRight, X } from 'lucide-react';

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const certificates = [
    {
      title: 'Full Stack Web Development',
      issuer: 'SmartEd Innovations',
      date: '2025',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, and modern web development practices.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: '/images/certificates/fullstack.jpg'
    },
    {
      title: 'Communication Skills',
      issuer: 'TCS iON',
      date: '2025',
      description: 'Basic understanding of communication skills.',
      skills: ['Communication'],
      image: '/images/certificates/communication.jpg'
    },
    {
      title: 'Learn Php and MySQL for Web Application and Web Development',
      issuer: 'Udemy',
      date: '2025',
      description: 'Basic understanding of Php and MySQL for Web Application and Web Development.',
      skills: ['Php', 'MySQL'],
      image: '/images/certificates/php-mysql.jpg'
    },
    {
      title: 'The Complete HTML5 Course: From Beginner to Expert',
      issuer: 'Udemy',
      date: '2024',
      description: 'Certification focused on HTML5 with a focus on modern web development practices.',
      skills: ['HTML5'],
      image: '/images/certificates/html5.jpg'
    },
    {
      title: 'Getting Started with Microsoft Excel',
      issuer: 'Coursera',
      date: '2024',
      description: 'Basic understanding of Microsoft Excel.',
      skills: ['Excel'],
      image: '/images/certificates/excel.jpg'
    },
    {
      title: 'Java Programming',
      issuer: 'RineX',
      date: '2023',
      description: 'Advanced Java programming certification covering OOP concepts, data structures, and application development.',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
      image: '/images/certificates/java.jpg'
    },
    {
      title: 'Learning c++',
      issuer: 'LinkedIn Learning',
      date: '2023',
      description: 'Comprehensive understanding of c++ programming language.',
      skills: ['c++'],
      image: '/images/certificates/cpp.jpg'
    },
    {
      title: 'Learning Java',
      issuer: 'LinkedIn Learning',
      date: '2023',
      description: 'Comprehensive understanding of Java programming language.',
      skills: ['Java'],
      image: '/images/certificates/java-linkedin.jpg'
    },
    {
      title: 'Python Fundamentals for beginners',
      issuer: 'Great Learning',
      date: '2022',
      description: 'Foundation certification in Python programming, covering syntax, data types, and basic programming concepts.',
      skills: ['Python', 'Programming Logic', 'Data Types', 'Functions'],
      image: '/images/certificates/python.jpg'
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Certificates
        </h2>
        
        <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex-none w-80 bg-gray-800/60 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => setSelectedCertificate(index)}
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors">
                    <Award className="text-blue-400" size={24} />
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
                  {certificates[selectedCertificate].title}
                </h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <img
                    src={certificates[selectedCertificate].image}
                    alt={certificates[selectedCertificate].title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;
