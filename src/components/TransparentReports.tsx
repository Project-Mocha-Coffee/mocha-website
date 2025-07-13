import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransparentReports = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const newsItems = [
    {
      id: 1,
      icon: '🍃☕',
      title: "A Sweet Collaboration: Joining Forces With Kenya's Largest Coffee Cooperative",
      date: '23. January',
      description: "As we are officially in harvest season with our plantations and trees, it's the perfect time to shift...",
      category: 'Latest news'
    },
    {
      id: 2,
      icon: '🌱',
      title: 'Coffee Growing Success in Nyeri: 80 Hands, 3 Days, And A Growing Opportunity',
      date: '13. January', 
      description: 'The Mocha Coffee Fund is excited to announce that the first phase of planting at our Nyeri location has...',
      category: 'Updates'
    }
  ];

  return (
    <section className="bg-[#FFFCF7] py-8 sm:py-12 md:py-16" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Content */}
          <div 
            className={`text-forest-800 ${
              isVisible ? 'animate-slide-in-header' : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Transparent Operational Reports And News
            </h2>
            <p className="text-sm sm:text-base text-forest-600 mb-4 sm:mb-6 leading-relaxed">
              Stay informed at all times with real-time updates from our plantations and projects.
            </p>
            <Link 
              to="/blog"
              className={`inline-flex items-center bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg touch-manipulation animate-button-pop ${
                isVisible ? 'animate-button-pop' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              View all
              <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 animate-icon-bounce" />
            </Link>
          </div>

          {/* Right Content - News Box */}
          <div 
            className={`bg-white rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-xl transition-shadow duration-300 ${
              isVisible ? 'animate-slide-in-card' : 'opacity-0 translate-y-16 scale-95'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            {/* Latest News Badge */}
            <div className={`inline-flex items-center bg-gradient-to-r from-brown-600 to-brown-700 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-5 animate-badge-pop ${
              isVisible ? 'animate-badge-pop' : 'opacity-0'
            }`}>
              Latest news
            </div>

            {/* News Items */}
            <div className="space-y-4 sm:space-y-6">
              {newsItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline Line */}
                  {index < newsItems.length - 1 && (
                    <div className="absolute left-5 top-10 w-0.5 h-8 sm:h-12 bg-brown-200"></div>
                  )}
                  
                  <div className="flex items-start space-x-3">
                    {/* Icon Circle */}
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-brown-100 rounded-full flex items-center justify-center text-sm sm:text-base animate-icon-pop ${
                      isVisible ? 'animate-icon-pop' : 'opacity-0'
                    }`} style={{ animationDelay: `${0.2 + index * 0.2}s` }}>
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-forest-800 mb-1 sm:mb-2 leading-tight text-sm sm:text-base animate-text-slide ${
                        isVisible ? 'animate-text-slide' : 'opacity-0'
                      }`} style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                        {item.title}
                      </h3>
                      <div className={`flex items-center text-xs sm:text-sm text-forest-600 mb-2 animate-text-slide ${
                        isVisible ? 'animate-text-slide' : 'opacity-0'
                      }`} style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0 animate-icon-pop" />
                        {item.date}
                      </div>
                      <p className={`text-forest-600 text-xs sm:text-sm mb-3 leading-relaxed animate-text-slide ${
                        isVisible ? 'animate-text-slide' : 'opacity-0'
                      }`} style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                        {item.description}
                      </p>
                      <Link 
                        to="/blog"
                        className={`inline-flex items-center bg-gradient-to-r from-brown-600 to-brown-700 hover:from-brown-700 hover:to-brown-800 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm touch-manipulation animate-button-pop ${
                          isVisible ? 'animate-button-pop' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                      >
                        Read more
                        <ArrowRight className="ml-1 w-2 h-2 sm:w-3 sm:h-3 animate-icon-bounce" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideInHeader {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
        @keyframes slideInCard {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.9) rotate(-2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
        @keyframes textSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes iconPop {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          70% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes badgePop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          70% {
            transform: scale(1.15);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes buttonPop {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          70% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes iconBounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-slide-in-header {
          animation: slideInHeader 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-slide-in-card {
          animation: slideInCard 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-text-slide {
          animation: textSlide 0.8s ease-out forwards;
        }
        .animate-icon-pop {
          animation: iconPop 0.6s ease-out forwards;
        }
        .animate-badge-pop {
          animation: badgePop 0.7s ease-out forwards;
        }
        .animate-button-pop {
          animation: buttonPop 0.8s ease-out forwards;
        }
        .animate-icon-bounce {
          animation: iconBounce 0.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TransparentReports;