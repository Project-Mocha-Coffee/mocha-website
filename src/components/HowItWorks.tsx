import React from 'react';
import { ShoppingCart, Sprout, DollarSign, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-8 md:py-10 gradient-forest">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-white mb-4 fade-in text-2xl md:text-3xl font-bold">How Does My Investment Work?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto fade-in text-emphasis">
            Simple steps to grow your sustainable investment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6 text-center fade-in stagger-1">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-6 w-6 text-gold-600" />
            </div>
            <h3 className="text-lg font-bold text-gold-500 mb-3">You Place An Order</h3>
            <p className="text-gray-600 mb-3 text-sm text-emphasis">
              👉 <strong>Step 1:</strong> Choose your package.
            </p>
            <p className="text-gray-600 text-xs">
              Wander through our interactive marketplace to select anywhere from 1 to 1,000+ coffee trees, each nestled in prime coffee-growing regions like the gentle slopes of Embu.
            </p>
          </div>
          
          <div className="card p-6 text-center fade-in stagger-2">
            <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="h-6 w-6 text-forest-600" />
            </div>
            <h3 className="text-lg font-bold text-gold-500 mb-3">We Plant And Grow Your Tree(S)</h3>
            <p className="text-gray-600 mb-3 text-sm text-emphasis">
              👉 <strong>Step 2:</strong> We handle the rest.
            </p>
            <p className="text-gray-600 text-xs">
              Our team of expert agronomists oversees every detail: planting the highest-grade Arabica varietals, installing drip-irrigation, pursuing organic certification, and tending each tree.
            </p>
          </div>
          
          <div className="card p-6 text-center fade-in stagger-3">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-gold-600" />
            </div>
            <h3 className="text-lg font-bold text-gold-500 mb-3">You Collect Your Payouts Every Year</h3>
            <p className="text-gray-600 mb-3 text-sm text-emphasis">
              👉 <strong>Step 3:</strong> Enjoy the returns.
            </p>
            <p className="text-gray-600 text-xs">
              In Year 3, the first harvest arrives—about 20% of peak yield—culminating in your first dividends. By Year 5, your grove reaches full production.
            </p>
          </div>
        </div>
        
        <div className="text-center fade-in stagger-4">
          <button className="btn btn-gold">
            Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;