const Projects = () => {
  const featuredProject = {
    title: 'Product Catalog Management System',
    description:
      'Built scalable backend supporting categories, sub-categories, and products using Node.js, Express.js, MongoDB, REST API, JWT. Implemented full CRUD operations, authentication, and optimized database performance.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT', 'MVC'],
    image: '/project-images/product-catalog.png',
    codeUrl: 'https://github.com/Devanshmathur-git-hub/Product-Catalog-Management',
  };

  const projects = [
    {
      title: 'User-Scoped Todo API',
      description:
        'Engineered a secure, multi-user task management REST API with strict user isolation via JWT middleware. Features authentication, authorization, and CRUD operations.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
      image: '/project-images/todo-api.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/User-Scoped-Todo-API',
    },
    {
      title: 'Gemini AI Chatbot',
      description:
        'Built a multi-turn conversational AI chatbot powered by the Google Gemini API with streaming UI responses in React.js. Maintains conversation context and provides real-time responses.',
      technologies: ['React.js', 'Node.js', 'Google Gemini API'],
      image: '/project-images/gemini-chatbot.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/Chatbot-using-Google-Gemini',
    },
    {
      title: 'Business Card Scanner Software',
      description:
        'Extracts and stores contact information from business cards. Built scalable backend system with MongoDB, designed database schema, and implemented CRUD functionality.',
      technologies: ['Node.js', 'MongoDB'],
      image: '/project-images/business-card-scanner.png',
    },
    {
      title: 'E-Commerce Application',
      description:
        'Built product listing system with backend logic and scalable architecture. Implemented product management, cart functionality, and order processing.',
      technologies: ['Node.js', 'MongoDB', 'JavaScript'],
      image: '/project-images/ecommerce.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/E-commerce',
    },
    {
      title: 'Book Store Application',
      description:
        'Built bookstore management system with structured logic and clean interface. Features book catalog, search functionality, and inventory management.',
      technologies: ['JavaScript'],
      image: '/project-images/bookstore.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/BOOK-STORE',
    },
    {
      title: 'Profile App',
      description:
        'Built profile management system applying OOP concepts. Features user profile creation, editing, and data management with clean architecture.',
      technologies: ['C++'],
      image: '/project-images/profile-app.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/profile_app',
    },
    {
      title: 'New User Management App',
      description:
        'Backend application to manage user data with RESTful APIs for registration, retrieval, updating, and deletion using a structured MongoDB schema.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Backend Development'],
      image: '/project-images/new-user-management.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/new-user-management-app',
    },
    {
      title: 'Photo Sharing Gallery',
      description:
        'Full-stack photo gallery to upload and manage images with backend APIs for file upload, retrieval, and metadata storage.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'File Upload'],
      image: '/project-images/photo-gallery.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/Photo_Sharing-Gallery',
    },
    {
      title: 'Portfolio (Old Version)',
      description:
        'Personal portfolio website to showcase projects and skills with a responsive layout and structured sections for work and contact info.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Frontend Development'],
      image: '/project-images/portfolio-old.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/Porfolio-',
    },
    {
      title: 'Portfolio_2 (New Version)',
      description:
        'Modern portfolio website focused on full-stack projects with improved performance, responsive UI, and better overall user experience.',
      technologies: ['React.js', 'Tailwind CSS', 'Frontend Development'],
      image: '/project-images/portfolio-2.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/Porfolio_2',
    },
    {
      title: 'Comment Model (Nested Comment System)',
      description:
        'Backend comment and review system supporting nested threads with REST APIs and MongoDB schema for parent-child relationships.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Database Design'],
      image: '/project-images/comment-model.png',
      codeUrl: 'https://github.com/Devanshmathur-git-hub/Comment_model',
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Title - Black Box */}
        <div className="flex justify-center mb-12">
          <div className="bg-black px-8 py-3 border-2 border-white">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              PROJECTS
            </h2>
          </div>
        </div>

        {/* Featured Project */}
        <div className="mb-16 bg-white p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <a
            href={featuredProject.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-6 h-64 md:h-80 bg-gray-200 overflow-hidden relative group"
            aria-label={`${featuredProject.title} code repository`}
          >
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-300">
              <span className="text-gray-500">Project Image</span>
            </div>
          </a>
          <a
            href={featuredProject.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 hover:underline underline-offset-4">
              {featuredProject.title}
            </h3>
          </a>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {featuredProject.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {featuredProject.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={featuredProject.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 border-2 border-white font-semibold hover:bg-gray-800 transition-colors"
            >
              CODE
            </a>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-gray-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-transform transition-shadow duration-200"
            >
              <a
                href={project.codeUrl || '#'}
                target={project.codeUrl ? '_blank' : undefined}
                rel={project.codeUrl ? 'noopener noreferrer' : undefined}
                className={`block h-40 bg-gray-200 mb-4 overflow-hidden relative group ${
                  project.codeUrl ? 'cursor-pointer' : 'cursor-default'
                }`}
                aria-label={
                  project.codeUrl
                    ? `${project.title} code repository`
                    : `${project.title} (repository link not added)`
                }
                onClick={(e) => {
                  if (!project.codeUrl) e.preventDefault();
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextElementSibling;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-300">
                  <span className="text-gray-500 text-sm">Project Image</span>
                </div>
              </a>
              <a
                href={project.codeUrl || '#'}
                target={project.codeUrl ? '_blank' : undefined}
                rel={project.codeUrl ? 'noopener noreferrer' : undefined}
                className="inline-block"
                onClick={(e) => {
                  if (!project.codeUrl) e.preventDefault();
                }}
              >
                <h3 className="text-xl font-bold text-black mb-2 hover:underline underline-offset-4">
                  {project.title}
                </h3>
              </a>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                {project.codeUrl ? (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-black text-white text-xs font-semibold border-2 border-black hover:bg-gray-800 transition-colors"
                  >
                    CODE
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-500 text-xs font-semibold border-2 border-gray-300 cursor-not-allowed">
                    CODE (N/A)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/Devanshmathur-git-hub?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-black text-white text-sm font-semibold border-2 border-black hover:bg-gray-900 transition-colors"
          >
            For more projects, visit my GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
