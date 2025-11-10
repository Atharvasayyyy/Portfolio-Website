import { Card } from './ui/card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Chen',
      age: 16,
      hobby: 'Digital Art',
      quote: 'PULSE helped me realize I\'m way better at digital art in the morning. My focus scores are 30% higher before noon! Game changer.',
      score: 94,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Maya Patel',
      age: 15,
      hobby: 'Dance',
      quote: 'I always loved dancing, but PULSE showed me my heart rate patterns are perfect during practice. Now I know it\'s my thing!',
      score: 91,
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Jordan Lee',
      age: 17,
      hobby: 'Coding',
      quote: 'The focus tracking is insane. I can see exactly when I\'m most productive and schedule my hardest projects for those times.',
      score: 89,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Emma Rodriguez',
      age: 14,
      hobby: 'Writing',
      quote: 'PULSE showed me I\'m actually amazing at creative writing! The focus metrics during my writing sessions are off the charts.',
      score: 92,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Tyler Johnson',
      age: 16,
      hobby: 'Basketball',
      quote: 'Love tracking my recovery after games. The sleep insights help me perform better every week. My coach is impressed!',
      score: 96,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Zara Kim',
      age: 15,
      hobby: 'Photography',
      quote: 'Never knew photography was my calling until PULSE showed my attention patterns. Now it\'s literally my favorite thing ever.',
      score: 88,
      gradient: 'from-violet-500 to-purple-500'
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm">💬 Real Stories</span>
          </div>
          <h2 className="text-5xl lg:text-7xl tracking-tighter leading-none mb-6">
            What Teens Are
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Discovering
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, idx) => (
            <Card 
              key={testimonial.name} 
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${idx * 75}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>

                {/* User Info */}
                <div className="border-t border-white/10 pt-6 flex justify-between items-end">
                  <div>
                    <div className="mb-1">{testimonial.name}, {testimonial.age}</div>
                    <div className="text-sm text-gray-500">{testimonial.hobby}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                      {testimonial.score}
                    </div>
                    <div className="text-xs text-gray-500">SCORE</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: '10K+', label: 'BETA TESTERS', gradient: 'from-pink-500 to-rose-500' },
            { value: '4.9', label: 'APP RATING', gradient: 'from-purple-500 to-indigo-500' },
            { value: '94%', label: 'SATISFACTION', gradient: 'from-blue-500 to-cyan-500' },
            { value: '15+', label: 'HOBBY TYPES', gradient: 'from-emerald-500 to-teal-500' },
          ].map((stat, idx) => (
            <div 
              key={stat.label} 
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`text-5xl lg:text-6xl mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
