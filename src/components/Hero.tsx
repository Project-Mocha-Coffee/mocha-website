import React, { useEffect, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import contentData from '../data/content.json';
import { ContentData, HeroData } from '../types/content';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroData = (contentData as ContentData).hero;
  
  useEffect(() => {
    setIsVisible(true);
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

  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'scrollToCalculator':
        scrollToCalculator();
        break;
      case 'external':
        // Handle external link or modal for booking a call
        break;
      default:
        break;
    }
  };
  
  return (
    <section className="gradient-forest relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('${heroData.backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10 pt-20 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6">
        <div className="max-w-4xl">
          <h1 
            className={`text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 transform text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
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
            className={`text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl transition-all duration-1000 delay-500 transform ${
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
            {heroData.benefits.map((benefit, index) => (
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
            {heroData.buttons.map((button, index) => {
              const buttonClass = button.type === 'primary' ? 'btn btn-gold' : 'btn btn-secondary';
              
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
        
        {/* Trust indicators */}
        <div 
          className={`card-large p-4 sm:p-6 transition-all duration-1000 delay-1200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-gray-600 text-center mb-3 sm:mb-4 text-xs sm:text-sm font-medium">
            {heroData.trustIndicators.title}
          </p>
          
          {/* Partner logos with rotating animation */}
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
                {heroData.trustIndicators.partners.map((partner, index) => (
                  <img 
                    key={`first-${index}`}
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                  />
                ))}
              </div>
              
              {/* Second set of logos */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
                {heroData.trustIndicators.partners.map((partner, index) => (
                  <img 
                    key={`second-${index}`}
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                  />
                ))}
              </div>

              {/* Third set of logos */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
                {heroData.trustIndicators.partners.map((partner, index) => (
                  <img 
                    key={`third-${index}`}
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;