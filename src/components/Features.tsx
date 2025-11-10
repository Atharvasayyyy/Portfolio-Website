import { Card } from './ui/card';
import { Heart, Moon, Brain, Target, TrendingUp, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Features() {
  const features = [
    {
      icon: Heart,
      title: 'Heart Rate Tracking',
      description: '24/7 monitoring with real-time zones and cardiovascular health insights.',
      metrics: ['Resting HR', 'Peak HR', 'Recovery Rate', 'HRV'],
      gradient: 'from-red-500 to-pink-500',
      emoji: '❤️'
    },
    {
      icon: Moon,
      title: 'Sleep Analysis',
      description: 'Deep insights into your sleep stages, quality, and patterns.',
      metrics: ['Sleep Score', 'REM Cycles', 'Deep Sleep', 'Wake Times'],
      gradient: 'from-indigo-500 to-purple-500',
      emoji: '😴'
    },
    {
      icon: Brain,
      title: 'Focus Metrics',
      description: 'Track concentration levels during study sessions and activities.',
      metrics: ['Focus Time', 'Distraction Rate', 'Peak Hours', 'Flow State'],
      gradient: 'from-cyan-500 to-blue-500',
      emoji: '🧠'
    },
    {
      icon: Target,
      title: 'Habit Tracking',
      description: 'Build better routines with intelligent reminders and streaks.',
      metrics: ['Streaks', 'Completion Rate', 'Weekly Goals', 'Patterns'],
      gradient: 'from-emerald-500 to-green-500',
      emoji: '🎯'
    },
    {
      icon: TrendingUp,
      title: 'Progress Analytics',
      description: 'Visualize your growth with detailed charts and insights.',
      metrics: ['Weekly Trends', 'Improvements', 'Benchmarks', 'Predictions'],
      gradient: 'from-orange-500 to-amber-500',
      emoji: '📈'
    },
    {
      icon: Zap,
      title: 'Energy Levels',
      description: 'Understand your daily energy patterns and optimize your schedule.',
      metrics: ['Energy Score', 'Peak Times', 'Burnout Risk', 'Recovery'],
      gradient: 'from-yellow-500 to-orange-500',
      emoji: '⚡'
    },
  ];

  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm">Powerful Features</span>
          </div>
          <h2 className="text-5xl lg:text-7xl tracking-tighter leading-none mb-6">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              On Your Wrist
            </span>
          </h2>
        </div>

        {/* Feature with Image Highlight */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-2xl">
                ⚙️
              </div>
              <h3 className="text-4xl tracking-tighter">Advanced Sensors</h3>
              <p className="text-xl text-gray-400">
                Medical-grade sensors track every heartbeat, movement, and breath. Get lab-quality data on your wrist.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl mb-2">5ATM</div>
                  <div className="text-sm text-gray-400">Water Resistant</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl mb-2">18g</div>
                  <div className="text-sm text-gray-400">Ultra Light</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740573859230-c15ba45ece73?w=800"
                alt="Sensors closeup"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${idx * 75}ms` }}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{feature.emoji}</span>
                  </div>
                  <h3 className="text-2xl mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {feature.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
