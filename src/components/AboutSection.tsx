
import React from 'react';

const AboutSection = () => {
  const languages = [
    { name: 'Tamil', level: 100, description: 'Native' },
    { name: 'English', level: 85, description: 'Working Proficiency' },
    { name: 'Hindi', level: 30, description: 'Beginner' },
    { name: 'French', level: 25, description: 'Beginner' },
  ];

  const quotes = [
    "Always learning, always growing.",
    "The best way to predict the future is to create it."
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-900/60 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm pursuing an <span className="text-blue-400 font-semibold">Integrated M.Tech in Software Engineering</span> at VIT (2022–2027). 
                As a native Tamil speaker, I love building user-friendly websites and exploring new technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm social, curious, and always eager to learn. My passion lies in creating innovative solutions 
                that make a difference in people's lives through technology.
              </p>
            </div>

            {/* Animated Quotes */}
            <div className="space-y-4">
              {quotes.map((quote, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border-l-4 border-blue-400 transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className="text-blue-200 italic text-lg">"{quote}"</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Language Proficiency</h3>
            
            {languages.map((lang, index) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-200">{lang.name}</span>
                  <span className="text-sm text-gray-400">{lang.description}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${lang.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
