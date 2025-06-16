
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-400" />
            <span className="text-white font-semibold">Alex Johnson</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>
          
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 Alex Johnson. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
