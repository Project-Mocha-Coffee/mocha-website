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

  return (
    <nav 
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
            className="flex items-center"
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

          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-coffee-800" />
            ) : (
              <Menu className="h-5 w-5 text-coffee-800" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`mt-2 nav-pill transition-all duration-300 md:hidden ${
            isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="px-6 flex flex-col space-y-3">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.type === 'route' ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-coffee-800 py-2 border-b border-gray-100 text-sm font-semibold hover:text-coffee-600 transition-colors block"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href, item.type)}
                    className="text-coffee-800 py-2 border-b border-gray-100 text-sm font-semibold hover:text-coffee-600 transition-colors text-left w-full"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <button 
              className="btn btn-gold mt-4 text-sm"
              onClick={() => {
                setIsMenuOpen(false);
                handleNavClick('#plans', 'scroll');
              }}
            >
              Start Investing
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;