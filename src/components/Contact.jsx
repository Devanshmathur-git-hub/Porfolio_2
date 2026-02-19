import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section Title - Black Box */}
        <div className="flex justify-center mb-12">
          <div className="bg-black px-8 py-3 border-2 border-white">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              GET IN TOUCH
            </h2>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 border-2 border-white font-semibold hover:bg-gray-800 transition-colors"
            >
              SEND
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">OR FIND ME ON</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/devanshmathur-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/Devanshmathur-git-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="mailto:devanshmathur745@gmail.com"
                className="text-gray-800 hover:text-black transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
