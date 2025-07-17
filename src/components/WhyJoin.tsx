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
  const [investmentAmount, setInvestmentAmount] = useState(10000); // Default investment amount
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Add refs for intersection observer
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % benefits.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
    setIsAutoPlaying(false); // Pause auto-play on manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
    setIsAutoPlaying(false); // Pause auto-play on manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  };

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setInvestmentAmount(isNaN(value) ? 0 : Math.max(0, value)); // Prevent negative values
  };

  // Calculate potential returns for the first benefit (12-18% annual returns)
  const calculateReturns = () => {
    if (currentSlide !== 0) return null; // Only show for the first benefit
    const minReturn = (investmentAmount * 0.12).toFixed(2);
    const maxReturn = (investmentAmount * 0.18).toFixed(2);
    return (
      <div className="mt-6 p-4 bg-gold-50 rounded-xl animate-fade-in delay-300">
        <p className="text-forest-700 text-base font-medium">
          Invest ${investmentAmount.toLocaleString()} and expect annual returns between
          <span className="font-bold text-gold-500"> ${minReturn}</span> and
          <span className="font-bold text-gold-500"> ${maxReturn}</span>.
        </p>
      </div>
    );
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
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h2
          ref={headingRef}
          className="text-forest-700 text-2xl md:text-3xl font-semibold mb-3 animate-fade-in"
        >
          Why Join
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gold-500 animate-fade-in delay-100">
          Project Mocha?
        </h3>
      </div>

      <div
        ref={cardRef}
        className="card-large bg-white/90 backdrop-blur-lg p-6 md:p-10 lg:p-12 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-forest-700 leading-tight">
              {benefits[currentSlide].title}
            </h3>
            <h4 className="text-2xl md:text-3xl font-semibold text-gold-500">
              {benefits[currentSlide].subtitle}
            </h4>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-prose">
              {benefits[currentSlide].description}
            </p>
            {currentSlide === 0 && (
              <div className="mt-6">
                <label
                  htmlFor="investment-amount"
                  className="block text-forest-700 text-sm font-medium mb-2"
                >
                  Enter Investment Amount ($)
                </label>
                <input
                  id="investment-amount"
                  type="number"
                  min="0"
                  step="100"
                  value={investmentAmount}
                  onChange={handleInvestmentChange}
                  className="w-full max-w-xs p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all duration-300 text-forest-700"
                  aria-label="Investment amount"
                />
                {calculateReturns()}
              </div>
            )}
          </div>
          <div className="relative group animate-fade-in delay-200">
            <img
              src={benefits[currentSlide].image}
              alt={benefits[currentSlide].title}
              className="w-full h-full object-cover transition-opacity duration-500 rounded-2xl shadow-lg"
              style={{ opacity: 1 }}
            />
          </div>
        </div>
        {/* Navigation */}
        <div
          ref={navRef}
          className="flex justify-between items-center mt-8 md:mt-10"
        >
          <button
            onClick={prevSlide}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-forest-600 to-forest-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all duration-300 transform hover:scale-110 hover:from-forest-700 hover:to-forest-900"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="text-sm sm:text-base font-medium">Previous</span>
          </button>

          <div className="flex space-x-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                  index === currentSlide ? 'bg-gold-500 scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-forest-600 to-forest-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all duration-300 transform hover:scale-110 hover:from-forest-700 hover:to-forest-900"
            aria-label="Next slide"
          >
            <span className="text-sm sm:text-base font-medium">Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Inline CSS for animations */}
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
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default WhyJoin;