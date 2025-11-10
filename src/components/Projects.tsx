import { Card } from './ui/card';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: 'AI-Integrated Chatbot Platform',
      description: 'Real-time chat platform with AI integration using @ai command. AI responses powered by Google Gemini API and OpenAI for natural conversation flow.',
      status: 'Ongoing',
      technologies: ['Node.js', 'React.js', 'WebSockets', 'Gemini API', 'OpenAI'],
      gradient: 'from-purple-500 to-pink-600',
      icon: '🤖'
    },
    {
      title: 'Hospital ERP System',
      description: 'Enterprise Resource Planning system for healthcare management. Features patient records, doctor scheduling, billing modules with real-time dashboard.',
      status: 'Completed',
      technologies: ['Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
      gradient: 'from-cyan-500 to-blue-600',
      icon: '🏥'
    },
    {
      title: 'Restaurant Website Backend',
      description: 'Robust backend system for restaurant operations including menu CRUD, order management, and table booking with real-time status tracking.',
      status: 'Completed',
      technologies: ['Express.js', 'Socket.io', 'MongoDB', 'REST APIs'],
      gradient: 'from-orange-500 to-red-600',
      icon: '🍽️'
    }
  ];

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects & Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building real-world applications that solve actual problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Project Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{project.icon}</span>
                </div>

                {/* Status Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs mb-4 ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </div>

                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-gray-300 hover:bg-white/10 flex-1"
                    onClick={() => window.open('https://github.com/Atharvasayyyy', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-gray-300 hover:bg-white/10 flex-1"
                    onClick={() => alert('Demo link coming soon!')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-6"
            onClick={() => window.open('https://github.com/Atharvasayyyy', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}