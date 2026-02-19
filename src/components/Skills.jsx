import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNode,
  FaPython,
  FaJava,
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiFirebase, 
  SiDjango, 
  SiFlask,
  SiTypescript,
  SiGraphql,
} from 'react-icons/si';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiDocker, SiFigma, SiPostman } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
      ],
    },
    {
      title: 'BACKEND',
      skills: [
        { name: 'Node.js', icon: FaNode, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
        { name: 'Flask', icon: SiFlask, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      ],
    },
    {
      title: 'TOOLS',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'GitHub', icon: FaGithub, color: '#181717' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Title - Black Box */}
        <div className="flex justify-center mb-12">
          <div className="bg-black px-8 py-3 border-2 border-white">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              SKILLS
            </h2>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            return (
              <div key={index} className="bg-white p-6">
                <h3 className="text-xl font-bold text-black mb-6 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center"
                      >
                        <SkillIcon 
                          className="text-4xl mb-2" 
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm text-gray-700 text-center font-medium">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
