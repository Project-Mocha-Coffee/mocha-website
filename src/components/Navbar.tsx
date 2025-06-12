import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About us', href: '/about', type: 'route' },
    { name: 'Investing', href: '/investing', type: 'route' },
    { name: 'Projects', href: '/projects', type: 'route' },
    { name: 'Blog', href: '/blog', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string, type: string) => {
    setIsMenuOpen(false);
    
    if (type === 'scroll') {
      // If we're not on the home page, go to home first then scroll
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
        return;
      }
      
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For route type, React Router Link will handle the navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Basic scroll detection for background change
      setIsScrolled(currentScrollY > 50);
      
      // Implement consistent auto-hiding behavior
      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      // Only react to significant scroll movements (avoid tiny movements)
      if (scrollDelta > 5) {
        // Show navbar immediately on any scroll action
        setIsVisible(true);
        
        // Clear existing timeout
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        
        // Set new timeout to hide after 10 seconds
        const timeout = setTimeout(() => {
          setIsVisible(false);
          setHideTimeout(null);
        }, 10000);
        setHideTimeout(timeout);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [lastScrollY, hideTimeout]);

  // Clear hide timeout when user interacts with navbar
  const handleNavbarInteraction = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setIsVisible(true);
  };

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        id="mobile-nav"
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-1' : 'py-2'
        } ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onMouseEnter={handleNavbarInteraction}
        onFocus={handleNavbarInteraction}
      >
        <div className="container-custom">
          <div className={`nav-pill px-6 py-3 flex justify-between items-center transition-all duration-500 ${
            isScrolled ? 'shadow-xl' : 'shadow-lg'
          }`}>
            <Link 
              to="/" 
              className="flex items-center z-20"
              onClick={closeMenu}
            >
              <div className="w-7 h-7 mr-2 rounded-full overflow-hidden bg-white shadow-sm border border-coffee-200">
                <img 
                  src="/mocha.jpg" 
                  alt="Project Mocha Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-coffee-800 text-emphasis">
                Project Mocha
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.type === 'route' ? (
                    <Link
                      to={item.href}
                      className="text-sm font-semibold text-gray-600 hover:text-coffee-600 transition-colors duration-300 hover:scale-105 transform"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href, item.type)}
                      className="text-sm font-semibold text-gray-600 hover:text-coffee-600 transition-colors duration-300 hover:scale-105 transform"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button className="hidden md:block btn btn-gold text-sm px-4 py-2">
              Start Investing
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none z-20 relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-coffee-800" />
              ) : (
                <Menu className="h-6 w-6 text-coffee-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-20 right-4 w-80 max-w-sm bg-white bg-opacity-95 backdrop-blur-lg shadow-2xl rounded-2xl z-50 transform transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
        }`}
      >
        <div className="flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 border-opacity-50">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={closeMenu}
            >
              <div className="w-6 h-6 mr-2 rounded-full overflow-hidden bg-white shadow-sm border border-coffee-200">
                <img 
                  src="/mocha.jpg" 
                  alt="Project Mocha Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-coffee-800 text-emphasis">
                Project Mocha
              </span>
            </Link>
            <button 
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-100 hover:bg-opacity-50 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="py-4">
            <div className="px-4 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.type === 'route' ? (
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-coffee-600 hover:bg-coffee-50 hover:bg-opacity-70 rounded-lg transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href, item.type)}
                      className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-coffee-600 hover:bg-coffee-50 hover:bg-opacity-70 rounded-lg transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-200 border-opacity-50">
            <button 
              className="w-full btn btn-gold text-sm py-3 hover:shadow-lg transition-all duration-200"
              onClick={() => {
                closeMenu();
                handleNavClick('#plans', 'scroll');
              }}
            >
              Start Investing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;