import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Cta: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Configurable booking URL 
  const BOOKING_URL = "https://forms.gle/2Nv1M9KusmZPWn6X8";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const handleInvestClick = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <section className="py-8 sm:py-12 md:py-14 lg:py-16 bg-brown-800">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            className={`bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-6 lg:p-8 xl:p-12 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-12 items-center">
              {/* Left Side - Main CTA */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-6 lg:p-7 xl:p-8 order-2 lg:order-1">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-brown-700 mb-1 sm:mb-2 leading-tight">
                  Ready To Join 2000+
                </h3>
                <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-brown-600 mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-6 leading-tight">
                  Kenyan Coffee Investors?
                </h4>
                <p className="text-gray-700 text-sm sm:text-base md:text-sm lg:text-base mb-4 sm:mb-6 md:mb-5 lg:mb-6 leading-relaxed">
                  Take the first step toward sustainable and profitable growth.
                </p>
                <button 
                  onClick={handleInvestClick}
                  className="btn bg-brown-700 text-white hover:bg-brown-800 w-full sm:w-auto md:w-full lg:w-auto px-6 py-3 text-sm sm:text-base rounded-lg touch-manipulation"
                >
                  Invest now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Right Side - Newsletter */}
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                  Get Our Best Deals Straight In Your Inbox
                </h3>
                <p className="text-brown-200 text-sm sm:text-base md:text-sm lg:text-base mb-4 sm:mb-6 md:mb-5 lg:mb-6 leading-relaxed">
                  Learn more about Kenyan coffee farming opportunities and be the first to know about new investment openings in our Embu plantations.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-0 sm:flex sm:gap-3 md:space-y-3 md:block lg:space-y-0 lg:flex lg:gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full sm:flex-1 md:w-full lg:flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-600 focus:border-transparent text-sm sm:text-base touch-manipulation"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full sm:w-auto md:w-full lg:w-auto btn bg-brown-700 text-white hover:bg-brown-800 px-6 py-3 text-sm sm:text-base rounded-lg touch-manipulation"
                  >
                    Subscribe <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;