
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-primary relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }, (_, i) => (
              <div 
                key={i} 
                className="border border-white/20 animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-lg animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full blur-md animate-float" style={{animationDelay: '-4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-lg animate-float" style={{animationDelay: '-1s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '-3s'}}></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            {/* Status Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full mb-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for hire</span>
                <span className="text-xl">👋</span>
              </div>
              
              {/* Enhanced Typography */}
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Suraj
                <span className="block text-4xl lg:text-5xl bg-gradient-secondary bg-clip-text text-transparent mt-2 font-light">
                  Prajapati
                </span>
              </h1>
              
              {/* Animated Role Text */}
              <div className="mb-8">
                <div className="text-2xl lg:text-3xl text-purple-200 mb-4 font-light">
                  I'm a{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-secondary bg-clip-text text-transparent font-semibold">
                      Software Developer
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-secondary animate-pulse"></div>
                  </span>
                </div>
                <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                  B.Tech Computer Science student passionate about creating 
                  <span className="text-yellow-300 font-medium"> efficient</span> and 
                  <span className="text-purple-300 font-medium"> dynamic</span> web applications 
                  with modern technologies.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-secondary hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-lg text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <span>Hire Me</span>
                <Mail className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              
              <Button 
                variant="ghost"
                className="group text-white/80 hover:text-white hover:bg-white/10 px-6 py-4 text-lg rounded-xl transition-all duration-300"
              >
                <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Resume
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-white/60 text-sm font-medium">Follow me:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/SurajPrajapati63" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/suraj-prajapati-07b076262" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="mailto:prajapatisuraj88409@gmail.com"
                  className="group p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Profile Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              {/* Glassmorphism Container */}
              <div className="relative p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                  {/* Animated Ring */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full opacity-75 animate-spin" style={{animationDuration: '8s'}}></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full opacity-50 animate-ping"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-white via-purple-50 to-white rounded-full shadow-2xl overflow-hidden">
                    <img 
                      src="public/suraj image.jpg" 
                      alt="Suraj Prajapati - Software Developer" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-lg rounded-2xl p-4 shadow-2xl animate-float border border-white/20">
                  <div className="text-white text-sm font-bold">B.Tech CS</div>
                  <div className="text-white/80 text-xs">2026 Graduate</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-secondary backdrop-blur-lg rounded-2xl p-4 shadow-2xl animate-float border border-white/20" style={{animationDelay: '-1s'}}>
                  <div className="text-white text-sm font-bold">Full Stack</div>
                  <div className="text-white/80 text-xs">Developer</div>
                </div>
                
                <div className="absolute top-1/4 -left-8 bg-gradient-to-r from-cyan-500 to-blue-500 backdrop-blur-lg rounded-2xl p-3 shadow-2xl animate-float" style={{animationDelay: '-3s'}}>
                  <div className="text-white text-xs font-bold">React.js</div>
                </div>
                
                <div className="absolute top-3/4 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 backdrop-blur-lg rounded-2xl p-3 shadow-2xl animate-float" style={{animationDelay: '-2s'}}>
                  <div className="text-white text-xs font-bold">Node.js</div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center animate-fade-in">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-xs text-white/80">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-white/80">Skills</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="text-2xl font-bold text-white">2026</div>
                <div className="text-xs text-white/80">Graduate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            <ArrowDown className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
