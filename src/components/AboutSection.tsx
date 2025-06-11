import React from 'react';

const AboutSection = () => {
  const languages = [
    { name: 'Tamil', level: 100, description: 'Native' },
    { name: 'English', level: 85, description: 'Working Proficiency' },
    { name: 'Hindi', level: 20, description: 'Beginner' },
    { name: 'French', level: 20, description: 'Beginner' },
  ];

  const quotes = [
    "Single line of CODE can change the world",
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
                Hi, I'm <span className="text-blue-400 font-semibold">Logavinayagam</span>, a passionate and aspiring Software Engineer currently pursuing <span className="text-blue-400 font-semibold">Integrated M.Tech in Software Engineering</span> at VIT , Vellore (2022–2027). 
                As a enthusiastic and aspiring software engineer,  I'm driven by the goal of building impactful applications that solve real-world problems.
                I enjoy developing clean and efficient web applications, with a growing expertise in full-stack development and database management.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm social, curious, and always eager to learn. My interests also include fitness, music,
                and learning about tech innovations. I believe my portfolio reflects the projects, skills and my journey as a software engineer.
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
