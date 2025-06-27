
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      subtitle: "Full Stack Solutions",
      description: "Building responsive, modern, and scalable websites using cutting-edge technologies like React.js, Node.js, and modern databases.",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization", "SEO Friendly"]
    },
    {
      icon: "💻",
      title: "Frontend Development",
      subtitle: "User Interface Design",
      description: "Creating beautiful and intuitive user interfaces with React.js, modern CSS frameworks, and interactive animations.",
      features: ["React.js Development", "Tailwind CSS", "Interactive UI", "Cross-browser Compatible"]
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      subtitle: "Server-side Solutions",
      description: "Developing robust backend systems with Node.js, Express.js, and database management for complete web applications.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Server Management"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gradient-primary font-semibold text-lg">SERVICES</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-2">
            What I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional web development services tailored to bring your ideas to life 
            with modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="bg-gradient-primary p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-primary hover:opacity-90 text-white group-hover:bg-gradient-secondary transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm here to help bring your ideas to life 
              with professional web development services.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-secondary hover:opacity-90 text-white px-8 py-3 text-lg font-semibold"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
