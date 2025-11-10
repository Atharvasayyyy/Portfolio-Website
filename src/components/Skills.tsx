import { Card } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript (Node.js)', level: 90 },
        { name: 'Python', level: 80 },
        { name: 'HTML5 & CSS', level: 95 }
      ],
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Nginx', level: 65 }
      ],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 85 }
      ],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'AI/ML Tools',
      skills: [
        { name: 'Google Gemini API', level: 85 },
        { name: 'OpenAI API', level: 80 },
        { name: 'TensorFlow (Basic)', level: 60 }
      ],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS S3', level: 75 },
        { name: 'AWS EC2', level: 70 },
        { name: 'AWS Lambda', level: 65 },
        { name: 'Git', level: 90 }
      ],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Other Tools',
      skills: [
        { name: 'Postman', level: 90 },
        { name: 'WebSockets', level: 85 },
        { name: 'REST APIs', level: 90 }
      ],
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm text-cyan-400">My Arsenal</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${idx * 75}ms` }}
            >
              <div className="relative">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.gradient} rounded-lg mb-6 shadow-lg`}>
                  <h3 className="text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
