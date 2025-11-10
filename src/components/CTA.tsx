import { Button } from './ui/button';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 animate-pulse" />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 lg:p-16 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">LIMITED PRE-ORDER</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl tracking-tighter leading-none mb-6">
              Start Your Journey
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Today
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of teens discovering their potential. 
              Pre-order now and get exclusive early bird pricing.
            </p>

            {/* Pricing Card */}
            <div className="relative inline-block mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-white text-black rounded-3xl p-10 shadow-2xl">
                <div className="flex items-baseline justify-center gap-3 mb-6">
                  <span className="text-gray-500 line-through text-2xl">$199</span>
                  <span className="text-6xl tracking-tight">$149</span>
                  <span className="text-gray-600 text-xl">USD</span>
                </div>
                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm mb-8">
                  Save $50 with pre-order
                </div>
                
                <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  {[
                    'PULSE Band (Choose Size)',
                    'USB-C Charging Cable',
                    'Premium App (1 Year Free)',
                    'Free Worldwide Shipping',
                    '30-Day Money Back Guarantee'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 py-7 text-lg group relative overflow-hidden shadow-xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    PRE-ORDER NOW
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-12">
              Ships December 2025 • 30-day money back guarantee • No hidden fees
            </p>

            {/* FAQ */}
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                {
                  q: 'When will it ship?',
                  a: 'Pre-orders ship in December 2025. You\'ll receive tracking via email.'
                },
                {
                  q: 'What if it doesn\'t fit?',
                  a: 'Free size exchanges within 30 days. We\'ll send a new size at no cost.'
                },
                {
                  q: 'Is there a subscription?',
                  a: 'First year is free. After that, $4.99/month for premium (optional).'
                },
                {
                  q: 'Compatible devices?',
                  a: 'Works with iOS 14+ and Android 8+. Bluetooth 5.0+ required.'
                }
              ].map((faq) => (
                <div key={faq.q} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h4 className="mb-2">{faq.q}</h4>
                  <p className="text-sm text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
