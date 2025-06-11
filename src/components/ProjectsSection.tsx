import React from 'react';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Gym Management Website',
      description: 'A comprehensive web application for managing gym operations including member registration, payment tracking, and workout plans.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Logavinayagam/Gym-Management-Website'
    },
    {
      title: 'Money Manager App',
      description: 'Ai (ChatGPT) assisted - Money manager app with features like expense tracking, budget management, and financial insights.',
      tech: ['Java', 'Android Studio', 'Firebase', 'Prompt Engineering'],
      github: 'https://github.com/Logavinayagam/Money_Manager'
    },
    {
      title: 'Task Manager',
      description: 'Task manager app with features like task creation, task completion, and task deletion.',
      tech: ['Java', 'IntelliJ IDEA'],
      github: 'https://github.com/Logavinayagam/Task_Manager'
    },
    {
      title: 'Web Calculator',
      description: 'Advanced calculator with scientific functions, memory operations, and history tracking built with vanilla JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Logavinayagam/web-calculator'
    },
    {
      title: 'To-Do List Website',
      description: 'Interactive task management application with drag-and-drop functionality, categories, and local storage.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/Logavinayagam/To-Do-List-Website'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio showcasing projects and skills with modern animations and smooth transitions.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Animations'],
      github: 'https://github.com/Logavinayagam/My-Portfolio'
    }
    
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h2>
        
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-gray-900/60 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors"
                      >
                        <Github size={20} className="text-blue-400" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed h-20 overflow-hidden">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="text-gray-400 text-sm">← Scroll to see more projects →</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
