import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Frontend-only e-commerce website with responsive design, product catalog, shopping cart functionality, and modern user interface built with vanilla web technologies.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://gourab-0.github.io/e-commerce-website/",
      githubUrl: "https://github.com/gourab-0/e-commerce-website",
      featured: false
    },
    {
      title: "3D Todo List Web App",
      description: "Interactive 3D todo list application with stunning visual effects, drag-and-drop functionality, and smooth animations for task management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://gourab-0.github.io/3d-todolist-webapp/",
      githubUrl: "https://github.com/gourab-0/3d-todolist-webapp",
      featured: false
    },
    {
      title: "Ludo Game in Python Master",
      description: "Classic Ludo board game implementation with multiplayer support, dice mechanics, player turns, and complete game logic built in Python.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      technologies: ["Python", "Pygame", "Tkinter"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Static Event Manager",
      description: "Event management website with event listings, registration forms, schedule display, and responsive design for organizing and showcasing events.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://gourab-0.github.io/static-event-manager/",
      githubUrl: "https://github.com/gourab-0/static-event-manager",
      featured: true
    },
    {
      title: "Gym Website",
      description: "Modern gym website with membership plans, trainer profiles, class schedules, and facility showcase with responsive design and smooth animations.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://gourab-0.github.io/GYM-website/",
      githubUrl: "https://github.com/gourab-0/GYM-website",
      featured: false
    },
    {
      title: "Secure Login System",
      description: "Cybersecurity-focused secure login system with advanced authentication, password hashing, session management, and security vulnerability protection.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["Python", "Flask", "SQLite", "Bcrypt"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">My Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group perspective-1000 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden h-full hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Glassmorphism background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      className="bg-blue-600/90 hover:bg-blue-600 text-white backdrop-blur-sm border border-blue-400/30 shadow-lg"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full shadow-lg">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/60 backdrop-blur-sm text-gray-300 text-xs rounded-lg border border-gray-600/50 hover:border-blue-400/50 hover:text-blue-300 hover:bg-blue-600/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300 group/link"
                    >
                      <ExternalLink className="h-4 w-4 mr-1 transition-transform duration-300 group-hover/link:scale-110" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-gray-300 text-sm transition-colors duration-300 group/link"
                    >
                      <Github className="h-4 w-4 mr-1 transition-transform duration-300 group-hover/link:scale-110" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
