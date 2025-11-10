import { GraduationCap, BookOpen, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Academic Background</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl mb-2">B.Tech in Electronics and Computer Science</h3>
                  <p className="text-xl text-cyan-400">Shah & Anchor Engineering College</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
                    <div className="text-2xl">8.0</div>
                    <div className="text-xs text-green-100">CGPA</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Currently in 4th Year</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Graduating: 2026</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-sm text-gray-400 mb-4">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {['Artificial Intelligence', 'Web Development', 'Data Structures', 'Database Management', 'Cloud Computing', 'Software Engineering'].map((course) => (
                    <span
                      key={course}
                      className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🏆',
              title: 'Academic Excellence',
              description: 'Maintained 8.0 CGPA throughout the program',
              gradient: 'from-yellow-500 to-orange-600'
            },
            {
              icon: '💡',
              title: 'Innovation Focus',
              description: 'Specialized in AI/ML and Full Stack Development',
              gradient: 'from-purple-500 to-pink-600'
            },
            {
              icon: '🎯',
              title: 'Practical Learning',
              description: 'Applied classroom knowledge to real-world projects',
              gradient: 'from-cyan-500 to-blue-600'
            }
          ].map((achievement, idx) => (
            <div
              key={achievement.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg text-2xl`}>
                {achievement.icon}
              </div>
              <h4 className="mb-2">{achievement.title}</h4>
              <p className="text-sm text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
