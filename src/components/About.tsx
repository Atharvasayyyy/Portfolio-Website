import { Code2, Sparkles, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Expertise in MERN stack with focus on scalable backend architecture',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Sparkles,
      title: 'AI/ML Integration',
      description: 'Building intelligent applications with Google Gemini & OpenAI APIs',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Cloud & DevOps',
      description: 'AWS services, Docker containerization, and CI/CD workflows',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm text-cyan-400">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Building The Future
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Results-driven Full Stack Developer and AI/ML Enthusiast with hands-on experience in building 
            scalable backend systems using the MERN stack and integrating AI capabilities into real-time web 
            applications. Proficient in API design, server-side development, and deploying intelligent features 
            like chatbots using modern ML tools.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun Facts */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { label: 'Years of Experience', value: '2+' },
            { label: 'Projects Completed', value: '10+' },
            { label: 'Technologies', value: '15+' },
            { label: 'CGPA', value: '8.0' }
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all animate-in fade-in duration-700"
              style={{ animationDelay: `${idx * 75}ms` }}
            >
              <div className="text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
