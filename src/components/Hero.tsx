
import { ArrowDown } from 'lucide-react';

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
            <span className="block text-gradient">Gourab Ghosh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Front-End Developer crafting digital experiences with modern technologies
          </p>

          {/* 3D Floating Code Block */}
          <div className="perspective-1000 mx-auto w-fit">
            <div className="card-3d bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 font-mono text-sm text-left max-w-md mx-auto">
              <div className="text-green-400 mb-2">// Welcome to my portfolio</div>
              <div className="text-blue-400">const <span className="text-yellow-400">developer</span> = {'{'}
              </div>
              <div className="ml-4 text-gray-300">
                <div>name: <span className="text-orange-400">&quot;Gourab Ghosh&quot;</span>,</div>
                <div>skills: [<span className="text-orange-400">&quot;React&quot;, &quot;JavaScript&quot;, &quot;TypeScript&quot;</span>],</div>
                <div>passion: <span className="text-orange-400">&quot;Building amazing web apps&quot;</span></div>
              </div>
              <div className="text-blue-400">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
