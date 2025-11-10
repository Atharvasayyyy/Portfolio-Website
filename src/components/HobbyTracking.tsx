import { Card } from './ui/card';
import { Palette, Music, Camera, Pen, Dumbbell, Gamepad2, BookOpen, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HobbyTracking() {
  const hobbies = [
    { 
      icon: Palette, 
      name: 'Drawing & Art', 
      metric: 'Hand stability • Focus time', 
      score: 92,
      emoji: '🎨',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      icon: Music, 
      name: 'Dancing', 
      metric: 'Rhythm • Energy levels', 
      score: 88,
      emoji: '💃',
      gradient: 'from-purple-500 to-indigo-500'
    },
    { 
      icon: Camera, 
      name: 'Photography', 
      metric: 'Patience • Attention', 
      score: 85,
      emoji: '📸',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Pen, 
      name: 'Writing', 
      metric: 'Focus • Creativity', 
      score: 90,
      emoji: '✍️',
      gradient: 'from-emerald-500 to-teal-500'
    },
    { 
      icon: Dumbbell, 
      name: 'Sports', 
      metric: 'Heart rate • Recovery', 
      score: 94,
      emoji: '⚽',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      icon: Gamepad2, 
      name: 'Gaming', 
      metric: 'Reaction time • Focus', 
      score: 87,
      emoji: '🎮',
      gradient: 'from-violet-500 to-purple-500'
    },
    { 
      icon: BookOpen, 
      name: 'Reading', 
      metric: 'Attention span • Calm', 
      score: 91,
      emoji: '📚',
      gradient: 'from-amber-500 to-yellow-500'
    },
    { 
      icon: Code, 
      name: 'Coding', 
      metric: 'Problem-solving • Focus', 
      score: 89,
      emoji: '💻',
      gradient: 'from-green-500 to-lime-500'
    },
  ];

  const hobbyImages = [
    'https://images.unsplash.com/photo-1687394768192-cb9f4221d1bb?w=800',
    'https://images.unsplash.com/photo-1633994097244-e5be02cc3e1b?w=800',
    'https://images.unsplash.com/photo-1758525861793-f278aacf6bb5?w=800'
  ];

  return (
    <section id="hobbies" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm">🎯 Discover Your Talents</span>
          </div>
          <h2 className="text-5xl lg:text-7xl tracking-tighter leading-none mb-6">
            Find Your
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Hidden Superpowers
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AI analyzes your biometrics while you do what you love. Discover which hobbies match your natural abilities.
          </p>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {hobbyImages.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/5] rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
              <ImageWithFallback
                src={img}
                alt="Hobby activity"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          ))}
        </div>

        {/* Hobby Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {hobbies.map((hobby, idx) => {
            const Icon = hobby.icon;
            return (
              <Card 
                key={hobby.name} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${hobby.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                      {hobby.emoji}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl">{hobby.score}</div>
                      <div className="text-xs text-gray-500">SCORE</div>
                    </div>
                  </div>
                  <h3 className="text-xl mb-2">{hobby.name}</h3>
                  <p className="text-sm text-gray-400">{hobby.metric}</p>
                  
                  {/* Animated Progress Bar */}
                  <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${hobby.gradient} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ width: `${hobby.score}%` }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 lg:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl" />
          
          <div className="relative">
            <h3 className="text-4xl lg:text-5xl tracking-tighter mb-12 text-center">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-2xl">
                  1️⃣
                </div>
                <h4 className="text-xl mb-3">Wear & Play</h4>
                <p className="text-gray-400">
                  Just wear your PULSE while doing different activities. No extra setup needed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-2xl">
                  2️⃣
                </div>
                <h4 className="text-xl mb-3">AI Analyzes</h4>
                <p className="text-gray-400">
                  Smart algorithms track your heart rate, focus, and physical responses.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-2xl">
                  3️⃣
                </div>
                <h4 className="text-xl mb-3">Get Insights</h4>
                <p className="text-gray-400">
                  See which hobbies match your natural talents and where you excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
