
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I am a dedicated B.Tech Computer Science student with a passion for creating 
            innovative solutions through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Designing Solutions, Not Just Visuals
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              As a passionate Computer Science student at Babu Banarasi Das University, 
              I specialize in creating efficient and dynamic web applications. My journey 
              in software development has equipped me with strong problem-solving skills 
              and a deep understanding of modern web technologies.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Full Stack Development</h4>
                  <p className="text-gray-600">Expertise in both frontend and backend technologies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Problem Solving</h4>
                  <p className="text-gray-600">Strong foundation in Data Structures and Algorithms</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-700">
                <strong>B.Tech Computer Science</strong><br/>
                Babu Banarasi Das University<br/>
                Expected Graduation: 2026
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">B.Tech CS Student graduating in 2026</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Specialization</h4>
                <p className="text-gray-600">Software & Web Development</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                <p className="text-gray-600">Modern Web Technologies</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Passion</h4>
                <p className="text-gray-600">Creating Efficient Solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
