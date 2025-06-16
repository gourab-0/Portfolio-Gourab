
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white">Hi, I'm</span>
            <span className="block text-gradient">Alex Johnson</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer crafting digital experiences with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Button>
          </div>

          {/* 3D Floating Code Block */}
          <div className="perspective-1000 mx-auto w-fit">
            <div className="card-3d bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 font-mono text-sm text-left max-w-md mx-auto">
              <div className="text-green-400 mb-2">// Welcome to my portfolio</div>
              <div className="text-blue-400">const <span className="text-yellow-400">developer</span> = {'{'}
              </div>
              <div className="ml-4 text-gray-300">
                <div>name: <span className="text-orange-400">&quot;Alex Johnson&quot;</span>,</div>
                <div>skills: [<span className="text-orange-400">&quot;React&quot;, &quot;Node.js&quot;, &quot;Python&quot;</span>],</div>
                <div>passion: <span className="text-orange-400">&quot;Building amazing web apps&quot;</span></div>
              </div>
              <div className="text-blue-400">{'}'}</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
