
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      skills: ["Node.js", "Python", "Express", "Django", "PostgreSQL"]
    },
    {
      title: "Database",
      icon: Database,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "MySQL"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      skills: ["React Native", "Flutter", "Expo", "iOS", "Android"]
    },
    {
      title: "DevOps",
      icon: Code,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"]
    },
    {
      title: "Design",
      icon: Palette,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      skills: ["Figma", "Adobe XD", "UI/UX", "Photoshop", "Illustrator"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group perspective-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-3d bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-gray-600 transition-all duration-300">
                <div className={`${category.bgColor} ${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-gray-500 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bars for Key Skills */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: "React/TypeScript", level: 95 },
              { skill: "Node.js/Express", level: 90 },
              { skill: "Python/Django", level: 85 },
              { skill: "Database Design", level: 88 },
              { skill: "UI/UX Design", level: 82 },
              { skill: "Cloud/DevOps", level: 78 }
            ].map((item, index) => (
              <div key={item.skill} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-blue-400 font-semibold">{item.level}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-400 group-hover:to-cyan-400"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
