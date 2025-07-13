import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const benefits = [
  {
    title: "12-18% Average Expected Annual Returns",
    subtitle: "See, Touch, Smell, And Taste",
    description: "Your wealth grows with your trees: with 12-18% historical annual returns, this investment truly bears fruit.",
    image: "https://images.pexels.com/photos/4050359/pexels-photo-4050359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "An Investment You Can",
    subtitle: "See, Touch, Smell, And Taste", 
    description: "Unlike traditional investments you often don't understand, this one is simple: plant trees, grow fruit and sell the harvest.",
    image: "https://images.pexels.com/photos/2909083/pexels-photo-2909083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Sustainable & Ethical",
    subtitle: "Investment",
    description: "Every tree planted contributes to environmental restoration while providing fair compensation to local farmers.",
    image: "https://images.pexels.com/photos/6231772/pexels-photo-6231772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const WhyJoin = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const navRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (cardRef.current) observer.observe(cardRef.current);
    if (navRef.current) observer.observe(navRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (cardRef.current) observer.unobserve(cardRef.current);
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, []);

  return (
    <section className="section bg-cream-50" ref={sectionRef}>
      <div className="container-custom px-4 sm:px-6">
        <div ref={headingRef} className="text-center mb-12 sm:mb-16 opacity-0 translate-y-12 scale-95 transition-all duration-1000 ease-out">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-700 mb-4 heading-secondary">Why Join</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-500 heading-primary">Project Mocha?</h3>
        </div>
        
        <div ref={cardRef} className="card-large p-6 sm:p-8 md:p-12 relative opacity-0 translate-y-16 scale-95 transition-all duration-1000 ease-out delay-200">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-700 mb-4 heading-secondary animate-slide-in-text">
                {benefits[currentSlide].title}
              </h3>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gold-500 mb-6 heading-secondary animate-slide-in-text" style={{ animationDelay: '0.1s' }}>
                {benefits[currentSlide].subtitle}
              </h4>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed animate-slide-in-text" style={{ animationDelay: '0.2s' }}>
                {benefits[currentSlide].description}
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img 
                  src={benefits[currentSlide].image}
                  alt={benefits[currentSlide].title}
                  className="w-full h-full object-cover transition-opacity duration-500 animate-fade-in-image"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div ref={navRef} className="flex justify-between items-center mt-8 opacity-0 translate-y-12 scale-95 transition-all duration-1000 ease-out delay-400">
            <button 
              onClick={prevSlide}
              className="px-6 py-3 bg-gradient-to-r from-forest-600/90 to-forest-700/90 text-white rounded-xl flex items-center justify-center gap-2 hover:from-forest-700 hover:to-forest-800 hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-sm border border-gold-500/20"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="text-sm sm:text-base font-medium">Previous</span>
            </button>
            
            <div className="flex space-x-2">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gold-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="px-6 py-3 bg-gradient-to-r from-forest-600/90 to-forest-700/90 text-white rounded-xl flex items-center justify-center gap-2 hover:from-forest-700 hover:to-forest-800 hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-sm border border-gold-500/20"
            >
              <span className="text-sm sm:text-base font-medium">Next</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
        @keyframes fadeInImage {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInText {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .is-visible {
          animation: slideIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-slide-in-text {
          animation: slideInText 0.8s ease-out forwards;
        }
        .animate-fade-in-image {
          animation: fadeInImage 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyJoin;