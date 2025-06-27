
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Suraj
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-gradient-primary hover:opacity-90 text-white"
          >
            Hire Me
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-700">Skills</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
