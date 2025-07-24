import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Sprout, DollarSign, ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { ContentData } from '../types/content';

const HowItWorks = () => {
  const { content } = useContent();
  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Early return if content is not available
  if (!content) {
    return null;
  }

  const sectionData = content.howItWorks;

  // Scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-12 md:py-16 bg-cream-50"
      style={{ backgroundColor: '#F5F0E5' }}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-forest-700 mb-3 transition-all duration-700 ${
              isSectionVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}
          >
            {sectionData.sectionTitle}
          </h2>
          <p
            className={`text-gray-600 text-base md:text-lg max-w-2xl mx-auto transition-all duration-700 ${
              isSectionVisible ? 'animate-slide-up delay-100' : 'opacity-0 translate-y-10'
            }`}
          >
            {sectionData.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div
            className={`card bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
              isSectionVisible ? 'animate-card-slide-left' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-7 w-7 text-gold-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gold-500 mb-3">{sectionData.steps[0].title}</h3>
            <p className="text-gray-600 mb-3 text-sm md:text-base font-medium">
              <strong>{sectionData.steps[0].stepNumber}:</strong> {sectionData.steps[0].actionText}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">{sectionData.steps[0].description}</p>
          </div>

          <div
            className={`card bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
              isSectionVisible ? 'animate-card-fade-from-top' : 'opacity-0 -translate-y-12'
            }`}
          >
            <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="h-7 w-7 text-gold-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gold-500 mb-3">{sectionData.steps[1].title}</h3>
            <p className="text-gray-600 mb-3 text-sm md:text-base font-medium">
              <strong>{sectionData.steps[1].stepNumber}:</strong> {sectionData.steps[1].actionText}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">{sectionData.steps[1].description}</p>
          </div>

          <div
            className={`card bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
              isSectionVisible ? 'animate-card-slide-right' : 'opacity-0 translate-x-12'
            } sm:col-span-2 md:col-span-1`}
          >
            <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-7 w-7 text-gold-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gold-500 mb-3">{sectionData.steps[2].title}</h3>
            <p className="text-gray-600 mb-3 text-sm md:text-base font-medium">
              <strong>{sectionData.steps[2].stepNumber}:</strong> {sectionData.steps[2].actionText}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">{sectionData.steps[2].description}</p>
          </div>
        </div>

        <div
          className={`text-center transition-all duration-700 ${
            isSectionVisible ? 'animate-slide-up delay-200' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            className="btn w-full sm:w-auto text-base md:text-lg px-8 py-4 bg-[#7A5540] text-white hover:bg-[#5A3F2F] rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 touch-manipulation shadow-md hover:shadow-lg"
          >
            {sectionData.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-slide-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes card-fade-from-top {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-slide-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-card-slide-left {
          animation: card-slide-left 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.2s;
        }

        .animate-card-fade-from-top {
          animation: card-fade-from-top 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.3s;
        }

        .animate-card-slide-right {
          animation: card-slide-right 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.4s;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;