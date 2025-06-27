
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Job Listing Portal",
      category: "Full Stack Web Application",
      description: "A comprehensive web platform connecting job seekers with recruiters, featuring user authentication, job posting, application tracking, and advanced search functionality.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Certificate Verification System",
      category: "Web-based Security Platform",
      description: "A secure platform for validating certificates with blockchain-inspired verification, QR code generation, and tamper-proof certificate management.",
      technologies: ["React.js", "Node.js", "MySQL", "QR Code API", "Crypto"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI Image Generator",
      category: "AI-Powered Web Tool",
      description: "An innovative web application that generates high-quality images from text prompts using advanced AI models, with user-friendly interface and gallery features.",
      technologies: ["React.js", "AI API Integration", "JavaScript", "CSS3", "REST APIs"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      color: "from-orange-500 to-red-600"
    }
  ];

  const workingProcess = [
    {
      step: "01",
      title: "Business Planning",
      description: "Understanding your requirements and planning the project architecture for optimal results.",
      icon: "📋"
    },
    {
      step: "02", 
      title: "Design Strategy",
      description: "Creating user-centered designs with modern UI/UX principles and responsive layouts.",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building robust applications with clean code, thorough testing, and performance optimization.",
      icon: "🚀"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <span className="text-gradient-primary font-semibold text-lg">PORTFOLIO</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-2">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my latest work in web development, from full-stack applications 
            to innovative AI-powered tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">{project.category}</span>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gradient-primary hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1 bg-gradient-primary hover:opacity-90 text-white">
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-shrink-0">
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Working Process Section */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <span className="text-gradient-primary font-semibold text-lg">PROCESS</span>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              My Working Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering high-quality solutions from concept to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workingProcess.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{process.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{process.step}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
