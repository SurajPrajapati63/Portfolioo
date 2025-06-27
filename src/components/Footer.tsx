
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Suraj Prajapati
            </h3>
            <p className="text-gray-400 leading-relaxed">
              B.Tech Computer Science student specializing in software and web development. 
              Creating efficient and dynamic web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:prajapatisuraj88409@gmail.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                📧 prajapatisuraj88409@gmail.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://github.com/SurajPrajapati63" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/suraj-prajapati-07b076262" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Suraj Prajapati. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with React.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
