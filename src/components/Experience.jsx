const Experience = () => {
  const experiences = [
    {
      company: 'Insightful Technologies',
      role: 'Full-Stack Developer Intern',
      period: 'Feb 2026 – April 2026',
      location: 'Noida, Uttar Pradesh, India',
      responsibilities: [
        'Architected and delivered production-ready full-stack features using React.js, Node.js, Express.js, and MongoDB',
        'Designed and implemented RESTful API endpoints with authentication (JWT) and error handling',
        'Improved data communication efficiency and reduced frontend load times',
        'Optimized MongoDB queries and schema design for faster database performance',
      ],
    },
    {
      company: 'AniXon',
      role: 'Junior Frontend Web Developer',
      period: 'Jun 2025 – December 2025',
      location: 'Gwalior, Madhya Pradesh, India',
      responsibilities: [
        'Built responsive UI components using React.js, HTML5, and CSS3',
        'Integrated REST APIs for dynamic data fetching',
        'Implemented search, filtering, and pagination features',
        'Refactored legacy code into modular reusable components',
      ],
    },
    {
      company: 'EduSkills Academy / AICTE',
      role: 'Python Full Stack Developer Virtual Intern',
      period: 'Oct 2024 – Dec 2024',
      location: 'Remote',
      responsibilities: [
        'Developed full-stack applications using Python, Django/Flask, and MySQL',
        'Implemented backend systems with CRUD functionality',
        'Built authentication systems',
        'Designed normalized database schemas',
      ],
    },
    {
      company: 'Google for Developers / EduSkills',
      role: 'Android Developer Virtual Intern',
      period: 'Jan 2025 – Mar 2025',
      location: 'Remote',
      responsibilities: [
        'Built Android applications using Java and Firebase',
        'Implemented CRUD functionality and authentication',
        'Learned Android Activity Lifecycle',
        'Developed multi-screen applications',
      ],
    },
    {
      company: 'Google Developer Groups (GDG) ITM Gwalior',
      role: 'Campus Organizer',
      period: 'Sep 2026 - Sept 2027',
      location: 'Gwalior, Madhya Pradesh, India',
      responsibilities: [
        'Launched GDG campus chapter',
        'Organized developer workshops and technical sessions',
        'Mentored students in web development',
        'Engaged 100+ student participants',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section Title - Black Box */}
        <div className="flex justify-center mb-12">
          <div className="bg-black px-8 py-3 border-2 border-white">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              EXPERIENCE
            </h2>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isCurrent = exp.period.includes('Present');
            return (
              <div key={index} className="bg-white p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-bold text-black">
                    {exp.company}
                  </h3>
                  {isCurrent && (
                    <span className="ml-4 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide bg-black text-white">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-700 mb-1">{exp.role}</p>
                <p className="text-sm text-gray-600 mb-1">{exp.period}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="text-gray-700 text-sm flex items-start">
                      <span className="mr-2">-</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
