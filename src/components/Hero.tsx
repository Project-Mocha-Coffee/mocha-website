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
            className={`text-white/90 text-xl mb-8 max-w-2xl transition-all duration-1000 delay-300 transform text-emphasis ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Create passive income, diversify your portfolio & get outstanding returns.
          </p>
          <p 
            className={`text-white/80 text-lg mb-8 max-w-2xl transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            An investment you can see, touch, smell, and taste.
          </p>
          
          <div 
            className={`space-y-4 mb-8 transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center text-white">
              <Check className="h-5 w-5 mr-3 text-green-400" />
              <span className="text-emphasis">12-18% average annual returns.</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="h-5 w-5 mr-3 text-green-400" />
              <span className="text-emphasis">Simple Investment, Great Returns.</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="h-5 w-5 mr-3 text-green-400" />
              <span className="text-emphasis">Join 2000+ investors.</span>
            </div>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button className="btn btn-gold">
              Start investing <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn btn-secondary">
              Book a call <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div 
          className={`card-large p-8 transition-all duration-1000 delay-1200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-gray-600 text-center mb-6 text-emphasis">Trusted by leading media:</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="h-8 bg-gray-300 rounded"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-300 rounded"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-300 rounded"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-300 rounded"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-300 rounded"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;