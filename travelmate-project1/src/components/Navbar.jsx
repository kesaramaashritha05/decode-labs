import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Trip Planner', path: '/planner' },
    { label: 'Packages', path: '/packages' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Plane className={`w-8 h-8 ${scrolled ? 'text-primary' : 'text-primary'}`} />
          <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-black' : 'text-white'}`}>
            Travel<span className="text-primary">Mate</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium hover:text-primary transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : (scrolled ? 'text-slate-700' : 'text-white')
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/planner" className="btn btn-primary">
            Plan a Trip
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`w-8 h-8 ${scrolled ? 'text-black' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${scrolled ? 'text-black' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 md:hidden flex flex-col items-center gap-6 border-t"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-semibold hover:text-primary transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-slate-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/planner" 
              className="btn btn-primary w-[80%]"
              onClick={() => setIsOpen(false)}
            >
              Plan a Trip
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        nav {
          transition: all 0.3s ease;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .gap-2 { gap: 0.5rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none; }
        }
        @media (min-width: 769px) {
          .md\\:hidden { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
