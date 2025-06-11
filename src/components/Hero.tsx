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
    <section className="min-h-screen gradient-forest relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.pexels.com/photos/2909083/pexels-photo-2909083.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-16">
        <div className="max-w-4xl">
          <h1 
            className={`text-white mb-6 leading-tight transition-all duration-1000 transform heading-primary ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Invest In Coffee Trees
          </h1>
          <p 
            className={`text-white/90 text-lg mb-6 max-w-2xl transition-all duration-1000 delay-300 transform text-emphasis ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Create passive income, diversify your portfolio & get outstanding returns.
          </p>
          <p 
            className={`text-white/80 text-base mb-6 max-w-2xl transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            An investment you can see, touch, smell, and taste.
          </p>
          
          <div 
            className={`space-y-3 mb-6 transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center text-white">
              <Check className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-emphasis text-sm">12-18% average annual returns.</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-emphasis text-sm">Simple Investment, Great Returns.</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-emphasis text-sm">Join 2000+ investors.</span>
            </div>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-3 mb-12 transition-all duration-1000 delay-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button onClick={scrollToCalculator} className="btn btn-gold">
              Start investing <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn btn-secondary">
              Book a call <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div 
          className={`card-large p-6 transition-all duration-1000 delay-1200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-gray-600 text-center mb-4 text-emphasis text-sm">Trusted by leading media:</p>
          
          {/* Partner logos with rotating animation */}
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-8 md:gap-12 animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center gap-8 md:gap-12 flex-shrink-0">
                <img 
                  src="/partners/MAGUTA-COFFEE-ESTATE-LOGO.png" 
                  alt="Maguta Coffee Estate" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/tagcc.png" 
                  alt="TAGCC" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/aya.png" 
                  alt="AYA" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/lisk.png" 
                  alt="Lisk" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/blck-iot.png" 
                  alt="BLCK IoT" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/Kotani-Pay-logo.png" 
                  alt="Kotani Pay" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/omo.png" 
                  alt="OMO" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/swypt-logo.png" 
                  alt="Swypt" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </div>
              
              {/* Second set of logos */}
              <div className="flex items-center gap-8 md:gap-12 flex-shrink-0">
                <img 
                  src="/partners/MAGUTA-COFFEE-ESTATE-LOGO.png" 
                  alt="Maguta Coffee Estate" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/tagcc.png" 
                  alt="TAGCC" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/aya.png" 
                  alt="AYA" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/lisk.png" 
                  alt="Lisk" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/blck-iot.png" 
                  alt="BLCK IoT" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/Kotani-Pay-logo.png" 
                  alt="Kotani Pay" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/omo.png" 
                  alt="OMO" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/swypt-logo.png" 
                  alt="Swypt" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </div>

              {/* Third set of logos */}
              <div className="flex items-center gap-8 md:gap-12 flex-shrink-0">
                <img 
                  src="/partners/MAGUTA-COFFEE-ESTATE-LOGO.png" 
                  alt="Maguta Coffee Estate" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/tagcc.png" 
                  alt="TAGCC" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/aya.png" 
                  alt="AYA" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/lisk.png" 
                  alt="Lisk" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/blck-iot.png" 
                  alt="BLCK IoT" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/Kotani-Pay-logo.png" 
                  alt="Kotani Pay" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/omo.png" 
                  alt="OMO" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <img 
                  src="/partners/swypt-logo.png" 
                  alt="Swypt" 
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
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