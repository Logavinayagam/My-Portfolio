import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 80 },
        { name: 'C++', level: 65 },
        { name: 'Python', level: 55 },
        { name: 'Php', level: 40 },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 70 },
        { name: 'JavaScript', level: 70 },
        { name: 'CSS', level: 60 },
        { name: 'React', level: 40 },
        { name: 'Express', level: 30 },
        { name: 'Node.js', level: 30 },
      ]
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'MySQL', level: 70 },
        { name: 'MongoDB', level: 40 },
        { name: 'Firebase', level: 40 },
      ]
    },
    {
      title: 'AI & Productivity',
      skills: [
        { name: 'ChatGPT', level: 85 },
        { name: 'Prompt Engineering', level: 75 },
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'Git', level: 70 },
        { name: 'Cursor', level: 70 },
        { name :'Power BI', level: 40},
        { name: 'Android Studio', level: 30 },
      ]
    }
    
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>
        
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-6 py-3">
            <span className="text-blue-300 font-semibold">Self-learning enthusiast</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/60 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Circular progress */}
                    <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
