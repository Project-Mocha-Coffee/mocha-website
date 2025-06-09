import React, { useState, useEffect } from 'react';
import { Coffee, Play, ArrowRight } from 'lucide-react';

const AvailableOpportunities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="available-opportunities" className="section bg-cream-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`card-large p-8 md:p-12 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  Available Plantation
                </div>
                <h2 className="heading-secondary text-forest-600 mb-4">
                  Available Investment Opportunities
                </h2>
                <h3 className="heading-primary text-coffee-600 mb-8">
                  Embu Hills 2024 Is Ready To Grow
                </h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-forest-600 text-white rounded-2xl p-6 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Coffee className="h-6 w-6 mr-2" />
                      <span className="text-3xl font-bold">15480</span>
                    </div>
                    <p className="text-sm opacity-90 font-medium">trees sold</p>
                  </div>
                  <div className="bg-coffee-600 text-white rounded-2xl p-6 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Coffee className="h-6 w-6 mr-2" />
                      <span className="text-3xl font-bold">9720</span>
                    </div>
                    <p className="text-sm opacity-90 font-medium">trees available</p>
                  </div>
                </div>
                
                <button className="btn btn-primary">
                  Explore plantation <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/6752664/pexels-photo-6752664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                    alt="Coffee Plantation Aerial View" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="w-20 h-20 bg-coffee-600 bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableOpportunities;