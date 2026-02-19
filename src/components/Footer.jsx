import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white h-12 md:h-14 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-gray-300 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-gray-300 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-gray-300 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Devansh Mathur</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/devanshmathur-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/Devanshmathur-git-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="mailto:devanshmathur745@gmail.com"
              className="hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
