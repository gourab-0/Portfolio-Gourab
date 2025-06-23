
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 pt-8">
      <a 
        href="https://github.com/gourab-0/gourab-0" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
      >
        <Github className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
      </a>
      <a 
        href="https://www.linkedin.com/in/gourab-ghosh-327499278" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
      >
        <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
      </a>
      <a 
        href="https://www.instagram.com/gourabghosh25_?igsh=cHB5aXdmNjh2b2p3" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
      >
        <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
      </a>
    </div>
  );
};

export default SocialLinks;
