import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-100 pt-14">
      {/* Logo - Top Left (below navbar) */}
      <div className="absolute top-16 left-8 z-20">
        <span className="text-2xl md:text-3xl font-bold text-black">DM</span>
      </div>

      {/* Split Screen Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-3.5rem)]">
        {/* Left Side - Light Gray */}
        <div className="bg-gray-100 flex flex-col justify-center items-start px-8 md:px-12 lg:px-16 py-20 md:py-0 relative z-10">
          <div className="max-w-lg">
            <div className="inline-flex items-center mb-4 px-3 py-1 border border-black bg-white text-[11px] font-medium tracking-wide uppercase">
              Open to SDE / Full-Stack Internships
            </div>
            <p className="text-lg md:text-xl text-black mb-2 font-normal">
              Hi, I am
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">
              Devansh Mathur
            </h1>
            <p className="text-lg md:text-xl text-black mb-6 font-normal">
              Full-Stack Developer (MERN) / UI/UX Enthusiast
            </p>
            
            {/* Social Icons - Square Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:devanshmathur745@gmail.com"
                className="group w-12 h-12 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-black hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label="Email"
              >
                <FaEnvelope className="text-black group-hover:text-white transition-colors" size={20} />
              </a>
              <a
                href="https://github.com/Devanshmathur-git-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-black hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label="GitHub"
              >
                <FaGithub className="text-black group-hover:text-white transition-colors" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/devanshmathur-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-black hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-black group-hover:text-white transition-colors" size={20} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3 bg-black text-white text-sm font-semibold border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:translate-x-[1.5px] hover:translate-y-[1.5px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                View projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-white text-black text-sm font-semibold border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:translate-x-[1.5px] hover:translate-y-[1.5px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Deep Black */}
        <div className="bg-black flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-20 md:py-0 relative">
          {/* Portrait Image - Overlapping */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-80 h-96 md:w-96 md:h-[28.8rem] lg:w-[28.8rem] lg:h-[33.6rem] overflow-hidden relative -ml-16 md:-ml-24">
              <img 
                src="/profile-image.png" 
                alt="Devansh Mathur" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
