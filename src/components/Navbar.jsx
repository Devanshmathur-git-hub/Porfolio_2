import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black h-12 md:h-14 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-end h-full">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black px-4 py-1.5 border border-black text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              CONTACT ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes size={20} />
            ) : (
              <FaBars size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 py-4 space-y-3 px-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-gray-300 transition-colors py-2"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-white hover:text-gray-300 transition-colors py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-white hover:text-gray-300 transition-colors py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-white text-black px-4 py-2 border border-black font-semibold hover:bg-gray-200 transition-colors text-center"
            >
              CONTACT ME
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
