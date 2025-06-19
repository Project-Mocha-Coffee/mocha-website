import React from 'react';
import { ShoppingCart, Sprout, DollarSign, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-6 sm:py-8 md:py-10 gradient-forest">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-white mb-3 sm:mb-4 fade-in text-xl sm:text-2xl md:text-3xl font-bold">How Does My Investment Work?</h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto fade-in font-medium">
            Simple steps to grow your sustainable investment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="card p-4 sm:p-6 text-center fade-in stagger-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gold-500 mb-2 sm:mb-3">Choose Your Coffee Farm</h3>
            <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
              👉 <strong>Step 1:</strong> Select your trees.
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Select from 1 to 1,000+ trees in our marketplace of prime coffee-growing regions. Choose the investment package that fits your goals and budget.
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 text-center fade-in stagger-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Sprout className="h-5 w-5 sm:h-6 sm:w-6 text-forest-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gold-500 mb-2 sm:mb-3">We Plant & Manage</h3>
            <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
              👉 <strong>Step 2:</strong> Expert care guaranteed.
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Our expert agronomists handle every aspect—planting, irrigation, organic certification, and harvest. You own the trees, we manage everything.
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 text-center fade-in stagger-3 sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gold-500 mb-2 sm:mb-3">Receive Annual Payouts</h3>
            <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
              👉 <strong>Step 3:</strong> Passive income starts.
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Enjoy direct deposits from your share of the harvest starting in Year 3, with options to reinvest for compounding returns.
            </p>
          </div>
        </div>
        
        <div className="text-center fade-in stagger-4">
          <button className="btn btn-gold w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 touch-manipulation">
            Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;