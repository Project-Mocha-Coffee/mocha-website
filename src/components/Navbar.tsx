import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const navigationItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Why Invest', href: '#why-join' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Plans', href: '#plans' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        isScrolled ? 'py-3' : 'py-5'
      } ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      onMouseEnter={handleNavbarInteraction}
      onFocus={handleNavbarInteraction}
    >
      <div className="container-custom">
        <div className={`nav-pill px-8 py-5 flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'shadow-xl' : 'shadow-lg'
        }`}>
          <a 
            href="#hero" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <div className="w-9 h-9 mr-3 rounded-full overflow-hidden bg-white shadow-sm border border-coffee-200">
              <img 
                src="/mocha.jpg" 
                alt="Project Mocha Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-coffee-800 text-emphasis">
              Project Mocha
            </span>
          </a>

          <div className="hidden md:flex space-x-10">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-base font-semibold text-gray-600 hover:text-coffee-600 transition-colors duration-300 hover:scale-105 transform"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button className="hidden md:block btn btn-gold text-base px-6 py-3">
            Start Investing
          </button>

          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-coffee-800" />
            ) : (
              <Menu className="h-7 w-7 text-coffee-800" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`mt-4 nav-pill transition-all duration-300 md:hidden ${
            isMenuOpen ? 'max-h-screen py-6' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="px-8 flex flex-col space-y-5">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-coffee-800 py-3 border-b border-gray-100 text-base font-semibold hover:text-coffee-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button 
              className="btn btn-gold mt-6 text-base"
              onClick={() => {
                setIsMenuOpen(false);
                handleNavClick('#plans');
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