import React, { useEffect, useState } from 'react';
import { Code2, Database, Globe, Laptop } from 'lucide-react';

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'Python', 'Prompt Engineering', 'OOP'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-400/30 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-purple-400/30 animate-pulse"></div>
        </div>

        {/* Tech Icons Floating */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 text-blue-400/30 animate-float">
            <Code2 size={48} />
          </div>
          <div className="absolute bottom-32 left-1/4 text-cyan-400/30 animate-float" style={{ animationDelay: '1s' }}>
            <Database size={40} />
          </div>
          <div className="absolute top-1/3 right-20 text-purple-400/30 animate-float" style={{ animationDelay: '2s' }}>
            <Globe size={44} />
          </div>
          <div className="absolute bottom-1/4 right-1/3 text-blue-400/30 animate-float" style={{ animationDelay: '0.5s' }}>
            <Laptop size={52} />
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl pt-20">
        {/* Profile Photo */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Logavinayagam M"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Hi, I'm Logavinayagam M
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Aspiring Software Engineer | Web Developer
        </h2>

        <div className="text-xl md:text-2xl mb-12 h-12 flex items-center justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-gray-300 mr-2">Skilled in :</span>
          <span className="text-blue-400 font-mono">
            {skills[currentSkill]}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <a 
            href="https://drive.google.com/file/d/1bYRJNprITKNdLwU73fZoBAbXHi-hU_nC/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            View Resume
          </a>
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
