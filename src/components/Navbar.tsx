import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [isHeroEnd, setIsHeroEnd] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About us', href: '/about', type: 'route' },
    { name: 'Investing', href: '/investing', type: 'route' },
    { name: 'Projects', href: '/projects', type: 'route' },
    { name: 'Blog', href: '/blog', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (href, type) => {
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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 50);

      // Show navbar at the top of the page
      if (currentScrollY === 0) {
        setIsVisible(true);
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          setHideTimeout(null);
        }
        return;
      }

      // Handle scroll behavior
      if (scrollDelta > 5) {
        if (isScrollingDown && !isHeroEnd) {
          // Hide navbar when scrolling down, unless at hero end
          setIsVisible(false);
        } else {
          // Show navbar when scrolling up
          setIsVisible(true);
          if (hideTimeout) {
            clearTimeout(hideTimeout);
          }
          // Set timeout to hide after 10 seconds
          const timeout = setTimeout(() => {
            setIsVisible(false);
            setHideTimeout(null);
          }, 10000);
          setHideTimeout(timeout);
        }
      }

      setLastScrollY(currentScrollY);
    };

    // Observe hero section to detect its end
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroEnd(!entry.isIntersecting);
        if (!entry.isIntersecting) {
          setIsVisible(true); // Show navbar when hero section is out of view
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            setHideTimeout(null);
          }
        }
      },
      { threshold: 0 }
    );

    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      heroObserver.observe(heroSection);
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroSection) {
        heroObserver.unobserve(heroSection);
      }
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [lastScrollY, hideTimeout, isHeroEnd]);

  // Handle navbar interaction to show navbar
  const handleNavbarInteraction = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setIsVisible(true);
  };

  // Close menu on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.getElementById('mobile-nav');
      if (nav && !nav.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
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
        } animate-nav-load`}
        onMouseEnter={handleNavbarInteraction}
        onFocus={handleNavbarInteraction}
      >
        <div className="container-custom">
          <div
            className={`nav-pill px-4 sm:px-6 py-3 flex justify-between items-center transition-all duration-500 ${
              isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-lg' : 'shadow-lg bg-white/90 backdrop-blur-md'
            }`}
          >
            <Link to="/" className="flex items-center z-20" onClick={closeMenu}>
              <img
                src="/mocha.jpg"
                alt="Project Mocha Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.type === 'route' ? (
                    <Link
                      to={item.href}
                      className={`text-sm font-semibold transition-colors duration-300 hover:scale-105 transform ${
                        location.pathname === item.href
                          ? 'text-coffee-800 border-b-2 border-coffee-600'
                          : 'text-gray-600 hover:text-coffee-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href, item.type)}
                      className={`text-sm font-semibold transition-colors duration-300 hover:scale-105 transform ${
                        location.pathname === item.href
                          ? 'text-coffee-800 border-b-2 border-coffee-600'
                          : 'text-gray-600 hover:text-coffee-600'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/signup"
                className="text-sm font-semibold text-white bg-coffee-800 hover:bg-coffee-900 transition-all duration-300 px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-sm font-semibold text-white bg-gradient-to-r from-brown-200 to-brown-600 hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Login
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              className="lg:hidden focus:outline-none z-20 relative"
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

      {/* Mobile/Tablet Menu */}
      <div
        className={`fixed top-16 sm:top-20 right-4 w-80 max-w-sm bg-white bg-opacity-95 backdrop-blur-lg shadow-2xl rounded-2xl z-50 transform transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
        }`}
      >
        <div className="flex flex-col">
          {/* Mobile/Tablet Menu Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 border-opacity-50">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img
                src="/mocha.jpg"
                alt="Project Mocha Logo"
                className="w-10 h-10 object-cover"
              />
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
                <div key={item.name}>
                  {item.type === 'route' ? (
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        location.pathname === item.href
                          ? 'text-coffee-800 bg-coffee-50 bg-opacity-70'
                          : 'text-gray-700 hover:text-coffee-600 hover:bg-coffee-50 hover:bg-opacity-70'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href, item.type)}
                      className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        location.pathname === item.href
                          ? 'text-coffee-800 bg-coffee-50 bg-opacity-70'
                          : 'text-gray-700 hover:text-coffee-600 hover:bg-coffee-50 hover:bg-opacity-70'
                      }`}
                    >
                      {item.name}
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

      <style>{`
        @keyframes nav-load {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-nav-load {
          animation: nav-load 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;