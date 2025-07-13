import React, { useEffect, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
  
  return (
    <section className="gradient-forest relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1920&q=80')`,
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
            Invest in Coffee Trees – Earn 12-18% Annual Returns
          </h1>
          <p 
            className={`text-white/90 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-2xl transition-all duration-1000 delay-300 transform font-medium ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Tangible assets, passive income, and a greener future.
          </p>
          <p 
            className={`text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            An investment you can see, touch, smell, and taste.
          </p>
          
          <div 
            className={`space-y-2 sm:space-y-3 mb-6 sm:mb-8 transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center text-white">
              <Check className="h-4 w-4 mr-2 text-brown-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">12-18% average annual returns.</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="h-4 w-4 mr-2 text-brown-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">Simple Investment, Great Returns.</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="h-4 w-4 mr-2 text-brown-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">Join 1,250+ investors since 2022.</span>
            </div>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 delay-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button onClick={scrollToCalculator} className="btn btn-gold w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
              Explore Investment Plans <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button className="btn btn-secondary w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
              Book a call <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div 
          className={`card-large p-4 sm:p-6 rounded-full transition-all duration-1000 delay-1200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-gray-600 text-center mb-3 sm:mb-4 text-xs sm:text-sm font-medium">Trusted by our partners:</p>
          
          {/* Partner logos with rotating animation */}
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
                <img 
                  src="/partners/MAGUTA-COFFEE-ESTATE-LOGO.png" 
                  alt="Maguta Coffee Estate" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/tagcc.png" 
                  alt="TAGCC" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/aya.png" 
                  alt="AYA" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/Scroll.png" 
                  alt="Scroll" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/blck-iot.png" 
                  alt="BLCK IoT" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/Kotani-Pay-logo.png" 
                  alt="Kotani Pay" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/omo.png" 
                  alt="OMO" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/swypt-logo.png" 
                  alt="Swypt" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </div>
              
              {/* Second set of logos */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
                <img 
                  src="/partners/MAGUTA-COFFEE-ESTATE-LOGO.png" 
                  alt="Maguta Coffee Estate" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/tagcc.png" 
                  alt="TAGCC" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/aya.png" 
                  alt="AYA" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/Scroll.png" 
                  alt="Scroll" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/blck-iot.png" 
                  alt="BLCK IoT" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/Kotani-Pay-logo.png" 
                  alt="Kotani Pay" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/omo.png" 
                  alt="OMO" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/swypt-logo.png" 
                  alt="Swypt" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </div>

              {/* Third set of logos */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
                <img 
                  src="/partners/MAGUTA-COFFEE-ESTATE-LOGO.png" 
                  alt="Maguta Coffee Estate" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/tagcc.png" 
                  alt="TAGCC" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/aya.png" 
                  alt="AYA" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/Scroll.png" 
                  alt="Scroll" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/blck-iot.png" 
                  alt="BLCK IoT" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/Kotani-Pay-logo.png" 
                  alt="Kotani Pay" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/omo.png" 
                  alt="OMO" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/swypt-logo.png" 
                  alt="Swypt" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;