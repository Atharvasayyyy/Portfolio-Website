import { Card } from './ui/card';
import { Cpu, Battery, Wifi, Shield, Activity, Smartphone } from 'lucide-react';

export function TechSpecs() {
  const specs = [
    { 
      category: 'SENSORS', 
      icon: Activity,
      items: ['Optical HR sensor', '3-axis Accelerometer', '3-axis Gyroscope', 'Ambient light sensor'],
      gradient: 'from-red-500 to-pink-500'
    },
    { 
      category: 'BATTERY', 
      icon: Battery,
      items: ['Up to 7 days', 'Fast charging (60 min)', 'USB-C connector', 'Low power mode'],
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      category: 'CONNECTIVITY', 
      icon: Wifi,
      items: ['Bluetooth 5.2', 'iOS & Android apps', 'Auto sync', 'Cloud backup'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      category: 'DESIGN', 
      icon: Shield,
      items: ['Water resistant (5ATM)', 'Adjustable strap', 'Hypoallergenic', 'Lightweight (18g)'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    { 
      category: 'TRACKING', 
      icon: Cpu,
      items: ['24/7 heart rate', 'Sleep stages', 'Focus metrics', 'Hobby analysis'],
      gradient: 'from-orange-500 to-amber-500'
    },
    { 
      category: 'FEATURES', 
      icon: Smartphone,
      items: ['Silent alarms', 'Smart notifications', 'Goal setting', 'Weekly reports'],
      gradient: 'from-pink-500 to-rose-500'
    },
  ];

  return (
    <section id="specs" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
            <Cpu className="w-4 h-4" />
            <span className="text-sm">Technical Specifications</span>
          </div>
          <h2 className="text-5xl lg:text-7xl tracking-tighter leading-none mb-6">
            Engineered For
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Peak Performance
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {specs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <Card 
                key={spec.category} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${idx * 75}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${spec.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm tracking-widest">
                      {spec.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {spec.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${spec.gradient} shrink-0`} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Size Comparison */}
        <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-3xl shadow-2xl">
                📏
              </div>
              <h3 className="text-4xl lg:text-5xl tracking-tighter">Perfect Fit</h3>
              <p className="text-xl text-gray-400">
                Designed specifically for teenage wrists. Two sizes ensure comfort and accurate readings all day long.
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xl mb-1">Small</div>
                      <div className="text-sm text-gray-400">13-15 cm wrist</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Ages 13-15</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xl mb-1">Medium</div>
                      <div className="text-sm text-gray-400">15-18 cm wrist</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Ages 16-19</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual representation */}
            <div className="flex justify-center items-center gap-12">
              <div className="text-center group">
                <div className="relative">
                  <div className="w-32 h-32 border-4 border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:border-white/40 transition-colors">
                    <div className="w-20 h-20 border-2 border-white/30 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-lg animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-xs">S</div>
                </div>
                <div className="text-sm tracking-wide text-gray-400">SMALL</div>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <div className="w-40 h-40 border-4 border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:border-white/40 transition-colors">
                    <div className="w-28 h-28 border-2 border-white/30 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full shadow-lg animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xs">M</div>
                </div>
                <div className="text-sm tracking-wide text-gray-400">MEDIUM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
