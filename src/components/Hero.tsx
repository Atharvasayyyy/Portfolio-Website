import { Button } from './ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer & AWS Specialist';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm text-cyan-400">Available for opportunities</span>
            </div>
            
            <div>
              <h1 className="text-5xl lg:text-7xl mb-4 tracking-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Atharva Sable</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl text-gray-400 mb-6 min-h-[3rem]">
                {displayText}<span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Building scalable backend systems with <span className="text-cyan-400">MERN stack</span> and 
              integrating <span className="text-cyan-400">AI capabilities</span> into real-time web applications. 
              Currently pursuing B.Tech in Electronics & Computer Science.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg group">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg backdrop-blur-sm"
                onClick={() => window.open('mailto:atharvasable1204@gmail.com?subject=Resume Request&body=Hi Atharva, I would like to request your resume.')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/Atharvasayyyy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/atharva-sable-886552258/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:atharvasable1204@gmail.com"
                className="w-12 h-12 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Animated Code Window */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm text-gray-500 ml-4">portfolio.js</span>
              </div>

              {/* Code Content */}
              <div className="font-mono text-sm space-y-3">
                <div className="flex gap-3">
                  <span className="text-gray-600">1</span>
                  <span className="text-purple-400">const</span>
                  <span className="text-cyan-400"> developer</span>
                  <span className="text-white"> = {`{`}</span>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">2</span>
                  <span className="text-blue-400">name:</span>
                  <span className="text-green-400">"Atharva Sable"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">3</span>
                  <span className="text-blue-400">role:</span>
                  <span className="text-green-400">"Full Stack Developer"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">4</span>
                  <span className="text-blue-400">location:</span>
                  <span className="text-green-400">"Mumbai, India"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">5</span>
                  <span className="text-blue-400">skills:</span>
                  <span className="text-white"> [</span>
                </div>
                <div className="flex gap-3 pl-12">
                  <span className="text-gray-600">6</span>
                  <span className="text-green-400">"MERN Stack"</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">"AWS"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-12">
                  <span className="text-gray-600">7</span>
                  <span className="text-green-400">"AI/ML Integration"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex gap-3 pl-12">
                  <span className="text-gray-600">8</span>
                  <span className="text-green-400">"Docker"</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">"PostgreSQL"</span>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">9</span>
                  <span className="text-white">],</span>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">10</span>
                  <span className="text-blue-400">passion:</span>
                  <span className="text-green-400">"Building Intelligent Apps"</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-600">11</span>
                  <span className="text-white">{`}`};</span>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl mb-1">8.0</div>
                <div className="text-xs text-cyan-100">CGPA</div>
              </div>

              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl mb-1">2026</div>
                <div className="text-xs text-purple-100">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}