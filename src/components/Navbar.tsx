import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { navLinks, contactData } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#"
            className="text-2xl font-bold text-slate-900"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-blue-500">Multi</span>Sport
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-blue-500 font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${contactData.phone}`}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-500 transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span className="text-sm font-medium">{contactData.phone}</span>
            </a>
            <motion.a
              href="#cta"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium transition-all neon-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Zapisz się
            </motion.a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-700 hover:text-blue-500 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${contactData.phone}`}
                className="flex items-center gap-2 text-slate-700 py-2"
              >
                <FiPhone className="w-4 h-4" />
                <span>{contactData.phone}</span>
              </a>
              <a
                href="#cta"
                className="block bg-blue-500 text-white text-center px-5 py-3 rounded-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Zapisz się
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
