
import React from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: '首页', href: '/' },
    { name: '产品功能', href: '#' },
    { name: '解决方案', href: '#' },
    { name: '客户案例', href: '#' },
    { name: '关于我们', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="text-2xl font-bold text-primary">致趣百川</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
            >
              <Link to="/free-trial?source=header" className="btn btn-primary">
                免费试用
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Link to="/free-trial?source=header-mobile" className="btn btn-primary w-full block text-center">
              免费试用
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;