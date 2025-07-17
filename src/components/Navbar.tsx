import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Start with navbar visible
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const heroObserverRef = useRef<IntersectionObserver | null>(null);

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
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
        return;
      }
      
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const heroSection = document.querySelector('.gradient-forest');
    
    if (heroSection) {
      heroObserverRef.current = new IntersectionObserver(
        ([entry]) => {
          // Show navbar when hero section is not intersecting or when at top of page
          setIsVisible(!entry.isIntersecting || window.scrollY === 0);
        },
        {
          root: null,
          threshold: 0.1,
        }
      );
      
      heroObserverRef.current.observe(heroSection);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Ensure navbar is visible at the top of the page
      if (currentScrollY === 0) {
        setIsVisible(true);
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          setHideTimeout(null);
        }
        return;
      }

      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      if (scrollDelta > 5 && isVisible) {
        setIsVisible(true);
        setIsScrolled(true);
      }

      // Clear any existing timeout
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      if (heroObserverRef.current) {
        heroObserverRef.current.disconnect();
      }
    };
  }, [lastScrollY, hideTimeout, isVisible]);

  const handleNavbarInteraction = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setIsVisible(true);
  };

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
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'py-1' : 'py-2'
        } ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onMouseEnter={handleNavbarInteraction}
        onFocus={handleNavbarInteraction}
      >
        <div className="container-custom">
          <div className={`nav-pill px-6 py-3 flex justify-between items-center transition-all duration-500 ${
            isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-md' : 'shadow-lg bg-white'
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
                <div key={item.name} className="relative">
                  {item.type === 'route' ? (
                    <Link
                      to={item.href}
                      className={`text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                        location.pathname === item.href
                          ? 'text-coffee-800 font-bold bg-coffee-50 bg-opacity-50 rounded-lg px-3 py-1'
                          : 'text-gray-600 hover:text-coffee-600'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.href && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-coffee-600 animate-[underline_0.3s_ease-in-out_forwards]" />
                      )}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href, item.type)}
                      className={`text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                        location.pathname === item.href
                          ? 'text-coffee-800 font-bold bg-coffee-50 bg-opacity-50 rounded-lg px-3 py-1'
                          : 'text-gray-600 hover:text-coffee-600'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.href && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-coffee-600 animate-[underline_0.3s_ease-in-out_forwards]" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button className="hidden md:block btn bg-[#7a5540] text-white text-sm px-4 py-2 rounded-full hover:bg-[#6a4a38] transition-all duration-300">
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

      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
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
          {/* Mobile/Tablet Menu Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 border-opacity-50">
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

          {/* Mobile/Tablet Menu Items */}
          <div className="py-4">
            <div className="px-4 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.type === 'route' ? (
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        location.pathname === item.href
                          ? 'text-coffee-800 font-bold bg-coffee-50 bg-opacity-70'
                          : 'text-gray-700 hover:text-coffee-600 hover:bg-coffee-50 hover:bg-opacity-70'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.href && (
                        <span className="absolute bottom-2 left-4 w-[calc(100%-2rem)] h-0.5 bg-coffee-600 animate-[underline_0.3s_ease-in-out_forwards]" />
                      )}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href, item.type)}
                      className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        location.pathname === item.href
                          ? 'text-coffee-800 font-bold bg-coffee-50 bg-opacity-70'
                          : 'text-gray-700 hover:text-coffee-600 hover:bg-coffee-50 hover:bg-opacity-70'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.href && (
                        <span className="absolute bottom-2 left-4 w-[calc(100%-2rem)] h-0.5 bg-coffee-600 animate-[underline_0.3s_ease-in-out_forwards]" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Menu Footer */}
          <div className="p-4 border-t border-gray-200 border-opacity-50 space-y-3">
            <Link
              to="/signup"
              onClick={closeMenu}
              className="w-full block text-center px-4 py-3 text-sm font-semibold text-white bg-coffee-800 hover:bg-coffee-900 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register
            </Link>
            <Link
              to="/login"
              onClick={closeMenu}
              className="w-full block text-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brown-200 to-brown-600 hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;