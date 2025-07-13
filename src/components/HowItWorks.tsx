import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Sprout, DollarSign, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
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

  return (
    <section id="how-it-works" className="py-6 sm:py-8 md:py-10 bg-[#f5f0e5]" ref={sectionRef}>
      <div className="container-custom px-4 sm:px-6">
        <div 
          className={`text-center mb-8 sm:mb-10 ${
            isVisible ? 'animate-slide-in-header' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          <h2 className="text-forest-800 mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
            How Does My Investment Work?
          </h2>
          <p className="text-forest-700 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Simple steps to grow your sustainable investment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div 
            className={`card p-4 sm:p-6 bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              isVisible ? 'animate-slide-in-card' : 'opacity-0 translate-y-16 scale-95'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600 animate-icon-pop" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-forest-800 mb-2 sm:mb-3 animate-text-slide">
              Choose Your Coffee Farm
            </h3>
            <p className="text-forest-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium animate-text-slide" style={{ animationDelay: '0.1s' }}>
              👉 <strong>Step 1:</strong> Select your trees.
            </p>
            <p className="text-forest-600 text-xs sm:text-sm leading-relaxed animate-text-slide" style={{ animationDelay: '0.2s' }}>
              Select from 1 to 1,000+ trees in our marketplace of prime coffee-growing regions. Choose the investment package that fits your goals and budget.
            </p>
          </div>
          
          <div 
            className={`card p-4 sm:p-6 bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              isVisible ? 'animate-slide-in-card' : 'opacity-0 translate-y-16 scale-95'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Sprout className="h-5 w-5 sm:h-6 sm:w-6 text-forest-600 animate-icon-pop" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-forest-800 mb-2 sm:mb-3 animate-text-slide">
              We Plant & Manage
            </h3>
            <p className="text-forest-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium animate-text-slide" style={{ animationDelay: '0.1s' }}>
              👉 <strong>Step 2:</strong> Expert care guaranteed.
            </p>
            <p className="text-forest-600 text-xs sm:text-sm leading-relaxed animate-text-slide" style={{ animationDelay: '0.2s' }}>
              Our expert agronomists handle every aspect—planting, irrigation, organic certification, and harvest. You own the trees, we manage everything.
            </p>
          </div>
          
          <div 
            className={`card p-4 sm:p-6 bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1 ${
              isVisible ? 'animate-slide-in-card' : 'opacity-0 translate-y-16 scale-95'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600 animate-icon-pop" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-forest-800 mb-2 sm:mb-3 animate-text-slide">
              Receive Annual Payouts
            </h3>
            <p className="text-forest-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium animate-text-slide" style={{ animationDelay: '0.1s' }}>
              👉 <strong>Step 3:</strong> Passive income starts.
            </p>
            <p className="text-forest-600 text-xs sm:text-sm leading-relaxed animate-text-slide" style={{ animationDelay: '0.2s' }}>
              Enjoy direct deposits from your share of the harvest starting in Year 3, with options to reinvest for compounding returns.
            </p>
          </div>
        </div>
        
        <div 
          className={`text-center ${
            isVisible ? 'animate-button-pop' : 'opacity-0 translate-y-12 scale-95'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <button className="btn w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 bg-gold-500 text-forest-800 hover:bg-gold-600 hover:scale-105 transition-all duration-300 shadow-lg touch-manipulation">
            Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4 animate-icon-bounce" />
          </button>
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

export default HowItWorks;