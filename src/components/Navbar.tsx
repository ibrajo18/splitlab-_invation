import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Rocket } from 'lucide-react';

import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
              Splitlab
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  location.pathname === link.path ? 'text-brand-primary' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="px-6 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-full hover:bg-brand-primary-hover transition-colors shadow-lg shadow-indigo-100">
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-brand-blue transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 absolute top-20 left-0 w-full shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-semibold ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-brand-blue'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center btn-primary"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
