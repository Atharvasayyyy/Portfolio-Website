import { Smartphone, Cloud, Bell, Share2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Wear Your PULSE',
      description: 'Lightweight and comfortable. Forget it\'s even there while it tracks everything.',
      icon: '⌚',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      number: '02',
      title: 'Live Your Life',
      description: 'Study, dance, game, sleep. PULSE automatically tracks all your activities.',
      icon: '🎯',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      number: '03',
      title: 'Get Smart Insights',
      description: 'Check your app for personalized insights, scores, and recommendations.',
      icon: '💡',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '04',
      title: 'Level Up',
      description: 'Use data to build better habits, improve performance, and discover talents.',
      icon: '🚀',
      gradient: 'from-emerald-500 to-green-500'
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm">⚡ Simple Process</span>
          </div>
          <h2 className="text-5xl lg:text-7xl tracking-tighter leading-none mb-6">
            Getting Started Is
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Super Easy
            </span>
          </h2>
        </div>

        {/* Steps Timeline */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative group animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-white/20 to-white/5" />
              )}
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <div className="text-6xl tracking-tighter mb-4 text-white/10 text-center">
                  {step.number}
                </div>
                <h3 className="text-2xl tracking-tight mb-4 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* App Preview Section */}
        <div className="relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl shadow-2xl">
                📱
              </div>
              <h3 className="text-4xl lg:text-5xl tracking-tighter">
                Your Data,
                <br />
                Beautiful & Simple
              </h3>
              <p className="text-xl text-gray-400">
                Real-time sync, daily challenges, and social features. Everything you need in one beautiful app.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm">Cloud Sync</div>
                    <div className="text-xs text-gray-500">Instant updates</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shrink-0">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm">Smart Alerts</div>
                    <div className="text-xs text-gray-500">Stay on track</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm">iOS & Android</div>
                    <div className="text-xs text-gray-500">Works everywhere</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm">Share Progress</div>
                    <div className="text-xs text-gray-500">With friends</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock App Interface */}
            <div className="bg-black/50 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <div className="text-2xl tracking-tight">Today's Stats</div>
                  <div className="text-sm text-gray-500">THU, NOV 7</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl mb-2">8.2h</div>
                    <div className="text-sm text-gray-400">Sleep Score</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl mb-2">92%</div>
                    <div className="text-sm text-gray-400">Focus</div>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl mb-2">68</div>
                    <div className="text-sm text-gray-400">Resting HR</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl mb-2">5/7</div>
                    <div className="text-sm text-gray-400">Habits</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-6 shadow-lg">
                  <div className="text-sm mb-2 text-purple-100">🎨 Top Hobby Today</div>
                  <div className="text-2xl">Drawing - 94 Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
