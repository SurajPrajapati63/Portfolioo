
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js"]
    },
    {
      title: "Styling & Frameworks",
      icon: "🎨",
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL", "Database Design"]
    },
    {
      title: "Core Concepts",
      icon: "🧠",
      skills: ["OOPs", "Data Structures", "Algorithms"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "MS Office", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages 
            that I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gradient-primary hover:text-white transition-all duration-300"
                    >
                      <span className="font-medium">{skill}</span>
                      <div className="w-2 h-2 bg-current rounded-full opacity-70"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Languages Highlight */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Core Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-yellow-400">4+</div>
              <div className="text-white/90">Programming Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">10+</div>
              <div className="text-white/90">Web Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">3+</div>
              <div className="text-white/90">Major Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
