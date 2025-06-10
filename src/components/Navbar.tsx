import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Users } from 'lucide-react';
import Cookies from 'js-cookie';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const checkAuth = () => {
      const token = Cookies.get('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('scroll', handleScroll);
    checkAuth();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home', action: () => scrollToSection('home') },
    { name: 'About', href: '#about', action: () => scrollToSection('about') },
    { name: 'Projects', href: '#projects', action: () => scrollToSection('projects') },
    { name: 'Team', href: '#team', action: () => scrollToSection('team') },
    { name: 'Partners', href: '#partners', action: () => scrollToSection('partners') },
    { name: 'Contact', href: '#contact', action: () => scrollToSection('contact') },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal-800/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold text-white">
              Enactus <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">BITS Pilani</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-white hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="text-yellow-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-charcoal-700 text-white px-4 py-2 rounded-full hover:bg-charcoal-600 transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-yellow-400 to-blue-500 text-charcoal-800 px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal-700/95 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="block w-full text-left text-white hover:text-yellow-400 py-2 transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            {isLoggedIn ? (
              <div className="space-y-2 pt-2 border-t border-charcoal-600">
                <Link
                  to="/dashboard"
                  className="block text-yellow-400 hover:text-blue-400 py-2 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-white py-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block bg-gradient-to-r from-yellow-400 to-blue-500 text-charcoal-800 px-4 py-2 rounded-full font-semibold text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;