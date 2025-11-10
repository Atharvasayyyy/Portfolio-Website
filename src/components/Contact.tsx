import { Button } from './ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Send className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:atharvasable1204@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-cyan-400">atharvasable1204@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+919967607699"
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-purple-400">+91 99676 07699</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-orange-400">Mumbai, India</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-sm text-gray-400 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Atharvasayyyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/atharva-sable-886552258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 py-6 text-lg justify-start"
                  onClick={() => window.location.href = 'mailto:atharvasable1204@gmail.com?subject=Let\'s Work Together&body=Hi Atharva,%0D%0A%0D%0AI would like to discuss...'}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 py-6 text-lg justify-start"
                  onClick={() => window.open('mailto:atharvasable1204@gmail.com?subject=Resume Request&body=Hi Atharva, I would like to request your resume.')}
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10 py-6 text-lg justify-start"
                  onClick={() => window.open('https://linkedin.com/in/atharva-sable-886552258/', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  Connect on LinkedIn
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full border-orange-500/30 text-orange-400 hover:bg-orange-500/10 py-6 text-lg justify-start"
                  onClick={() => window.open('https://github.com/Atharvasayyyy', '_blank')}
                >
                  <Github className="w-5 h-5 mr-3" />
                  View GitHub Profile
                </Button>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h4 className="text-green-400">Available for Work</h4>
              </div>
              <p className="text-sm text-gray-400">
                Currently open to full-time positions, internships, and freelance projects. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}