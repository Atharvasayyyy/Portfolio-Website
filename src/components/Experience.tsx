import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Work Experience</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

          {/* Experience Card */}
          <div className="relative mb-12 animate-in fade-in slide-in-from-left duration-700">
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 md:pr-12">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl">Intern Developer</h3>
                      <p className="text-cyan-400">TBI</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Mumbai, India</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      Working on enterprise-level projects including Hospital ERP System
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Designed patient, doctor, and billing modules using Node.js and MongoDB</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Integrated dashboard for real-time data visualization and system efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Implemented RESTful APIs and optimized database queries for performance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Node.js', 'MongoDB', 'Express.js', 'REST APIs'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-4 border-slate-950 shadow-lg shadow-cyan-500/50" />
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-3xl mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'MERN Stack Development', status: 'Completed', color: 'from-green-500 to-emerald-600' },
              { name: 'IBM AI Professional Certificate', status: 'In Progress via Coursera', color: 'from-blue-500 to-cyan-600' },
              { name: 'AWS Basics (S3, Lambda)', status: 'Self-learned', color: 'from-orange-500 to-red-600' }
            ].map((cert, idx) => (
              <div
                key={cert.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-400">{cert.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
