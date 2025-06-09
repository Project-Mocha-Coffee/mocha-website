import React from 'react';
import { ShoppingCart, Sprout, DollarSign, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section gradient-forest">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6 fade-in heading-primary">How Does My Investment Work?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto fade-in text-emphasis">
            Simple steps to grow your sustainable investment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card p-8 text-center fade-in stagger-1">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-bold text-gold-500 mb-4 heading-secondary">You Place An Order</h3>
            <p className="text-gray-600 mb-4 text-emphasis">
              👉 <strong>Step 1:</strong> Choose your package.
            </p>
            <p className="text-gray-600">
              Wander through our interactive marketplace to select anywhere from 1 to 1,000+ coffee trees, each nestled in prime coffee-growing regions like the gentle slopes of Embu.
            </p>
          </div>
          
          <div className="card p-8 text-center fade-in stagger-2">
            <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sprout className="h-8 w-8 text-forest-600" />
            </div>
            <h3 className="text-xl font-bold text-gold-500 mb-4 heading-secondary">We Plant And Grow Your Tree(S)</h3>
            <p className="text-gray-600 mb-4 text-emphasis">
              👉 <strong>Step 2:</strong> We handle the rest.
            </p>
            <p className="text-gray-600">
              Our team of expert agronomists oversees every detail: planting the highest-grade Arabica varietals, installing drip-irrigation, pursuing organic certification, and tending each tree.
            </p>
          </div>
          
          <div className="card p-8 text-center fade-in stagger-3">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-bold text-gold-500 mb-4 heading-secondary">You Collect Your Payouts Every Year</h3>
            <p className="text-gray-600 mb-4 text-emphasis">
              👉 <strong>Step 3:</strong> Enjoy the returns.
            </p>
            <p className="text-gray-600">
              In Year 3, the first harvest arrives—about 20% of peak yield—culminating in your first dividends. By Year 5, your grove reaches full production.
            </p>
          </div>
        </div>
        
        <div className="text-center fade-in stagger-4">
          <button className="btn btn-gold">
            Start Your Journey Today <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;