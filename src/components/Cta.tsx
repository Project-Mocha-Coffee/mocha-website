import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  const [email, setEmail] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="section bg-brown-800 py-6 sm:py-8 md:py-10" ref={sectionRef}>
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`card-large p-6 sm:p-8 md:p-12 bg-white shadow-2xl rounded-2xl transition-all duration-1200 ease-out ${
              isVisible ? 'animate-slide-in-card' : 'opacity-0 translate-y-16 scale-95'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Left Side - Main CTA */}
              <div 
                className={`bg-white p-6 sm:p-8 rounded-2xl  duration-300 ${
                  isVisible ? 'animate-card-pop' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.1s' }}
              >
                <h3 className={`heading-secondary text-xl sm:text-2xl md:text-3xl font-bold text-brown-700 mb-2 animate-text-slide ${
                  isVisible ? 'animate-text-slide' : 'opacity-0'
                }`}>
                  Ready To Join 2000+
                </h3>
                <h4 className={`heading-secondary text-lg sm:text-xl md:text-2xl font-semibold text-brown-600 mb-4 sm:mb-6 animate-text-slide ${
                  isVisible ? 'animate-text-slide' : 'opacity-0'
                }`} style={{ animationDelay: '0.1s' }}>
                  Kenyan Coffee Investors?
                </h4>
                <p className={`text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed animate-text-slide ${
                  isVisible ? 'animate-text-slide' : 'opacity-0'
                }`} style={{ animationDelay: '0.2s' }}>
                  Take the first step toward sustainable and profitable growth.
                </p>
                <button 
                  className={`btn btn-primary w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-brown-700 hover:bg-brown-800 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg touch-manipulation animate-button-pop ${
                    isVisible ? 'animate-button-pop' : 'opacity-0'
                  }`} 
                  style={{ animationDelay: '0.3s' }}
                >
                  Invest now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 animate-icon-bounce" />
                </button>
              </div>

              {/* Right Side - Newsletter */}
              <div>
                <h3 className={`heading-secondary text-xl sm:text-2xl md:text-3xl font-bold text-brown-600 mb-2 animate-text-slide ${
                  isVisible ? 'animate-text-slide' : 'opacity-0'
                }`} style={{ animationDelay: '0.4s' }}>
                  Get Our Best Deals Straight In Your Inbox
                </h3>
                <p className={`text-brown-200 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed animate-text-slide ${
                  isVisible ? 'animate-text-slide' : 'opacity-0'
                }`} style={{ animationDelay: '0.5s' }}>
                  Learn more about Kenyan coffee farming opportunities and be the first to know about new investment openings in our Embu plantations.
                </p>
                <form 
                  onSubmit={handleSubmit} 
                  className={`flex flex-col sm:flex-row gap-4 animate-form-pop ${
                    isVisible ? 'animate-form-pop' : 'opacity-0'
                  }`} 
                  style={{ animationDelay: '0.6s' }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-600 focus:border-transparent bg-white text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md transition-shadow duration-200"
                    required
                  />
                  <button 
                    type="submit"
                    className={`btn w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-brown-700 hover:bg-brown-800 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg touch-manipulation animate-button-pop ${
                      isVisible ? 'animate-button-pop' : 'opacity-0'
                    }`} 
                    style={{ animationDelay: '0.7s' }}
                  >
                    Subscribe <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 animate-icon-bounce" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
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
        @keyframes cardPop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          70% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
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
        @keyframes formPop {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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
        .animate-slide-in-card {
          animation: slideInCard 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-card-pop {
          animation: cardPop 0.7s ease-out forwards;
        }
        .animate-text-slide {
          animation: textSlide 0.8s ease-out forwards;
        }
        .animate-button-pop {
          animation: buttonPop 0.8s ease-out forwards;
        }
        .animate-form-pop {
          animation: formPop 1s ease-out forwards;
        }
        .animate-icon-bounce {
          animation: iconBounce 0.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Cta;