import React, { useEffect, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const { content } = useContent();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  
  // Configurable booking URL 
  const BOOKING_URL = "https://forms.gle/2Nv1M9KusmZPWn6X8"; 
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking effect for background panning
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage (-50% to 50%)
      const x = ((clientX / innerWidth) - 0.5) * 100;
      const y = ((clientY / innerHeight) - 0.5) * 100;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('available-opportunities');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = (action: string) => {
   

     window.open('https://portal-rho-lemon.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  // Show loading state if no content data yet
  if (!content || !content.hero) {
    return null; // ContentLoadingScreen will handle this
  }

  const heroData = content.hero;
  
  return (
    <section className="gradient-gold relative overflow-hidden min-h-[85vh]">
      {/* Background media */}
      <div className="absolute inset-0 opacity-40">
        { 
        /*   <img
            src={heroData.backgroundImage}
            alt="Hero background animation"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallbackDiv = target.nextElementSibling as HTMLDivElement;
              if (fallbackDiv) {
                fallbackDiv.style.display = 'block';
              }
            }}
          /> */
        }
        
        {/* Interactive background image */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-in-out sm:rotate-0 rotate-90" 
          style={{
            backgroundImage: `url(${heroData.backgroundImage})`,
            backgroundSize: '100% ',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            opacity: 0.6
          }}
        />
        
        {/* Gainforest Background */}
       
      </div>
      
      <div className="container-custom relative z-10 pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="order-2 lg:order-1">
              <h1 
                className={`text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 transform text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {heroData.title}
              </h1>
              <p 
                className={`text-white/90 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-2xl transition-all duration-1000 delay-300 transform font-medium ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {heroData.primarySubtitle}
              </p>
              <p 
                className={`text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl transition-all duration-1000 delay-500 transform font-medium ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {heroData.secondarySubtitle}
              </p>
              
              <div 
                className={`space-y-2 sm:space-y-3 mb-6 sm:mb-8 transition-all duration-1000 delay-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {heroData.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center text-white">
                    <Check className="h-4 w-4 mr-2 text-brown-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {heroData.buttons.map((button: any, index: number) => {
                  const buttonClass = button.type === 'primary' ? 'btn btn-secondary' : 'btn btn-secondary';
                  
                  return (
                    <button 
                      key={index}
                      onClick={() => handleButtonClick(button.action)} 
                      className={`${buttonClass} w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4`}
                    >
                      {button.text} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column - YouTube Video */}
            <div className="order-2 lg:order-2">
              <div 
                className={`relative w-100% aspect-video rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 transform ${
                  isVisible ? 'translate-y-0 opacity-80' : 'translate-y-10 opacity-0'
                }`}
              >
                <iframe
                  src="https://www.youtube.com/embed/n60Jks4Qmk8?si=cu7QeaIZ7sRjgT33"
                  title="Mocha Investment Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>

    </section>
  );
};

export default Hero;