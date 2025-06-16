import { User, MapPin, Calendar } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with 3D Effect */}
          <div className="relative group perspective-1000">
            <div className="card-3d w-full max-w-md mx-auto">
              <div className="glow-border group">
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-2xl">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" alt="Gourab Ghosh" className="w-full h-[500px] object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold text-white mb-6">Front-End Developer</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate front-end developer with over 3 years of experience creating 
                beautiful and responsive web applications. I specialize in modern JavaScript 
                frameworks and love bringing designs to life with clean, efficient code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new front-end technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                <User className="h-8 w-8 text-blue-400 mb-2" />
                <div className="text-sm text-gray-400">Name</div>
                <div className="text-white font-semibold">Gourab Ghosh</div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                <MapPin className="h-8 w-8 text-purple-400 mb-2" />
                <div className="text-sm text-gray-400">Location</div>
                <div className="text-white font-semibold">India</div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;