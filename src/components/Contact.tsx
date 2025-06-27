
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // For demo purposes, we'll just show a success message
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "prajapatisuraj88409@gmail.com",
      link: "mailto:prajapatisuraj88409@gmail.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Suraj Prajapati",
      link: "https://www.linkedin.com/in/suraj-prajapati-07b076262"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "SurajPrajapati63",
      link: "https://github.com/SurajPrajapati63"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400/10 rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 text-white">
          <span className="text-yellow-400 font-semibold text-lg">CONTACT</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Project subject"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 h-32"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, 
                or potential collaborations. Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <a 
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-white hover:text-yellow-400 transition-colors"
                    >
                      <div className="text-3xl">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg">{info.title}</h4>
                        <p className="text-white/90">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-secondary border-0 shadow-xl">
              <CardContent className="p-8 text-center text-white">
                <h4 className="text-2xl font-bold mb-4">Ready to Start?</h4>
                <p className="text-white/90 mb-6">
                  Let's discuss your project and bring your ideas to life.
                </p>
                <Button 
                  onClick={() => window.open('mailto:prajapatisuraj88409@gmail.com', '_blank')}
                  className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3"
                >
                  Email Me Directly
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
