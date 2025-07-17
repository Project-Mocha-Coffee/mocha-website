import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Sprout, DollarSign, ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { ContentData } from '../types/content';

const HowItWorks: React.FC = () => {
  const { content } = useContent();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Early return if content is not available
  if (!content) {
    return null;
  }

  const sectionData = content.howItWorks;

  // Scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
      className={`py-12 md:py-16 bg-cream-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ backgroundColor: '#F5F0E5' }}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-700 mb-3 animate-fade-in">
            {sectionData.sectionTitle}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto animate-fade-in delay-100">
            {sectionData.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div
            className="card bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in stagger-1"
          >
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-6 w-6 text-gold-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gold-500 mb-3">{sectionData.steps[0].title}</h3>
            <p className="text-gray-600 mb-3 text-sm md:text-base font-medium">
              <strong>{sectionData.steps[0].stepNumber}:</strong> {sectionData.steps[0].actionText}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {sectionData.steps[0].description}
            </p>
          </div>

          <div
            className="card bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in stagger-2"
          >
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="h-6 w-6 text-gold-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gold-500 mb-3">{sectionData.steps[1].title}</h3>
            <p className="text-gray-600 mb-3 text-sm md:text-base font-medium">
              <strong>{sectionData.steps[1].stepNumber}:</strong> {sectionData.steps[1].actionText}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {sectionData.steps[1].description}
            </p>
          </div>

          <div
            className="card bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in stagger-3 sm:col-span-2 md:col-span-1"
          >
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-gold-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gold-500 mb-3">{sectionData.steps[2].title}</h3>
            <p className="text-gray-600 mb-3 text-sm md:text-base font-medium">
              <strong>{sectionData.steps[2].stepNumber}:</strong> {sectionData.steps[2].actionText}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {sectionData.steps[2].description}
            </p>
          </div>
        </div>

        <div className="text-center animate-fade-in stagger-4">
          <button
            className="btn w-full sm:w-auto text-base md:text-lg px-8 py-4 bg-[#7A5540] text-white hover:bg-[#5A3F2F] rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 touch-manipulation"
          >
            {sectionData.ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .stagger-1 {
          animation-delay: 0.2s;
        }

        .stagger-2 {
          animation-delay: 0.3s;
        }

        .stagger-3 {
          animation-delay: 0.4s;
        }

        .stagger-4 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;