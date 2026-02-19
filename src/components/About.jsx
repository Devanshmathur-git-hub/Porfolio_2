const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    window.open(
      'https://www.linkedin.com/in/devanshmathur-dev/overlay/1771313427782/single-media-viewer/?profileId=ACoAADkd66YBAas9i34ipKV-4TTkhiqGbrm1_QI',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section Title - Black Box */}
        <div className="flex justify-center mb-12">
          <div className="bg-black px-8 py-3 border-2 border-white">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              ABOUT ME
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-900 leading-relaxed text-base md:text-lg text-center">
            I am a MERN Stack Developer and Computer Science Engineering undergraduate at ITM Gwalior, passionate about building scalable, efficient, and production-ready web applications. Currently, I work as a Full-Stack Developer Intern at Insightful Technologies, where I develop modern web applications using React.js, Node.js, and MongoDB. Beyond development, I actively contribute to the tech community as a GDG Campus Organizer and Placement Coordinator.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={downloadCV}
            className="bg-black text-white px-6 py-3 border-2 border-white font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
          >
            <span>Download CV</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-black text-white px-6 py-3 border-2 border-white font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
          >
            <span>Contact</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
