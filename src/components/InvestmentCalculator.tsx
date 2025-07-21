import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const scenarios = {
  realistic: { name: 'Realistic', interestRate: 0.1, tenor: 5, description: 'Fixed 10% annual return over 5 years.' },
  optimistic: { name: 'Optimistic', interestRate: 0.1, tenor: 5, description: 'Fixed 10% annual return with high confidence.' },
  pessimistic: { name: 'Pessimistic', interestRate: 0.1, tenor: 5, description: 'Fixed 10% annual return for cautious investors.' }
};

const InvestmentCalculator = () => {
  const [totalBonds, setTotalBonds] = useState(1);
  const [moneyToInvest, setMoneyToInvest] = useState(100);
  const [selectedScenario, setSelectedScenario] = useState('realistic');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const debounceRef = useRef(null);

  // Scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Debounce for money input
  const debounce = (callback, delay) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(callback, delay);
  };

  const costPerBond = 100;
  const maxBonds = 20; // Updated to reflect per-investor cap
  const minInvestment = 100;
  const maxInvestment = 2000; // Updated to 20 bonds * $100

  // Calculate returns based on documentation
  const actualBonds = Math.floor(moneyToInvest / costPerBond);
  const annualInterest = actualBonds * 10; // $10 per bond per year
  const lifetimeReturn = actualBonds * 50; // $50 total interest per bond over 5 years
  const totalPayout = (actualBonds * costPerBond) + lifetimeReturn; // Principal + total interest
  const roi = (lifetimeReturn / moneyToInvest) * 100;
  const roiPercentage = Math.min(roi, 100);

  // Slider calculations
  const bondPercentage = ((totalBonds - 1) / (maxBonds - 1)) * 100;
  const requiredInvestment = totalBonds * costPerBond;

  const handleBondChange = (e) => {
    const bonds = parseInt(e.target.value);
    setTotalBonds(bonds);
    setMoneyToInvest(bonds * costPerBond);
  };

  const handleBondInputChange = (e) => {
    const value = Math.max(1, Math.min(maxBonds, parseInt(e.target.value) || 1));
    setTotalBonds(value);
    setMoneyToInvest(value * costPerBond);
  };

  const handleMoneyChange = (e) => {
    debounce(() => {
      const value = Math.max(minInvestment, Math.min(maxInvestment, parseInt(e.target.value) || minInvestment));
      setMoneyToInvest(value);
      setTotalBonds(Math.floor(value / costPerBond));
    }, 100);
  };

  return (
    <section
      ref={sectionRef}
      className={`section bg-cream-50 py-12 md:py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="calculator"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-700 mb-3 animate-fade-in">
              Mocha Asset-Backed Bond Calculator
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto animate-fade-in delay-100">
              Estimate your earnings with Mocha Asset-Backed Bonds (MABB), secured by geo-tagged coffee trees in Kenya.
            </p>
          </div>

          <div className="card-large bg-white/90 backdrop-blur-lg p-6 md:p-8 lg:p-10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Left side - Controls */}
              <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
                {/* Profit Scenario Selection */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-forest-700 mb-4 animate-fade-in delay-200">
                    Pick Your Profit Scenario
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.entries(scenarios).map(([key, scenario]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedScenario(key)}
                        className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                          selectedScenario === key
                            ? 'bg-[#7A5540] text-white shadow-md'
                            : 'bg-cream-100 text-forest-700 hover:bg-cream-200'
                        }`}
                        aria-label={`Select ${scenario.name} scenario`}
                      >
                        <span className="text-sm md:text-base font-semibold">{scenario.name}</span>
                        <p className={`text-xs mt-1 ${selectedScenario === key ? 'text-gray-200' : 'text-gray-500'}`}>
                          {scenario.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scenario Details */}
                <div className="space-y-3 bg-cream-50 p-4 rounded-xl animate-fade-in delay-300">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Annual Interest Rate</span>
                    <span className="text-forest-700 font-semibold text-sm md:text-base">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Tenor</span>
                    <span className="text-forest-700 font-semibold text-sm md:text-base">5 years</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 animate-fade-in delay-400">
                  <button className="flex-1 bg-[#7A5540] text-white py-3 px-6 rounded-lg hover:bg-[#5A3F2F] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500">
                    Invest Now <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                  <button className="flex-1 bg-cream-100 text-forest-700 py-3 px-6 rounded-lg hover:bg-cream-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500">
                    View Term Sheet <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                </div>
              </div>

              {/* Right side - Sliders and Results */}
              <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
                {/* Bond Slider */}
                <div>
                  <label className="block text-forest-700 font-semibold mb-3 text-sm md:text-base animate-fade-in delay-200">
                    Number of Bonds
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max={maxBonds}
                      value={totalBonds}
                      onChange={handleBondChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500"
                      style={{
                        background: `linear-gradient(to right, #7A5540 0%, #7A5540 ${bondPercentage}%, #E5E7EB ${bondPercentage}%, #E5E7EB 100%)`
                      }}
                      aria-label="Number of bonds"
                    />
                    <div className="flex justify-between mt-3">
                      <span className="text-sm md:text-base text-gray-500">
                        Required: ${requiredInvestment.toLocaleString()}
                      </span>
                      <input
                        type="number"
                        min="1"
                        max={maxBonds}
                        value={totalBonds}
                        onChange={handleBondInputChange}
                        className="w-20 px-2 py-1 rounded-full border border-gold-200 text-forest-700 font-semibold text-sm md:text-base text-center focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        aria-label="Edit number of bonds"
                      />
                    </div>
                  </div>
                </div>

                {/* Money Input Field */}
                <div>
                  <label className="block text-forest-700 font-semibold mb-3 text-sm md:text-base animate-fade-in delay-200">
                    Money to Invest
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={minInvestment}
                      max={maxInvestment}
                      step="100"
                      value={moneyToInvest}
                      onChange={handleMoneyChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-forest-700 text-sm md:text-base transition-all duration-300"
                      placeholder="Enter amount"
                      aria-label="Investment amount"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm md:text-base">
                      $
                    </div>
                  </div>
                  <div className="mt-2 text-sm md:text-base text-gray-500">
                    Min: ${minInvestment.toLocaleString()} | Max: ${maxInvestment.toLocaleString()}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4 bg-cream-50 p-4 rounded-xl animate-fade-in delay-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm md:text-base">Total Bonds</span>
                    <span className="text-forest-700 font-bold text-base md:text-lg">{actualBonds}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm md:text-base">Annual Interest</span>
                    <span className="text-forest-700 font-bold text-base md:text-lg">
                      ${Math.round(annualInterest).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-2">
                    <span className="text-gray-600 text-sm md:text-base">To Invest</span>
                    <span className="text-forest-700 font-bold text-base md:text-lg">
                      ${moneyToInvest.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm md:text-base">Total Return (5 yrs)</span>
                    <span className="text-forest-700 font-bold text-base md:text-lg">
                      ${Math.round(lifetimeReturn).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm md:text-base">Principal at Maturity</span>
                    <span className="text-forest-700 font-bold text-base md:text-lg">
                      ${Math.round(actualBonds * costPerBond).toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center pt-2 border-t-2 border-gold-200">
                      <span className="text-forest-700 font-semibold text-sm md:text-base">ROI (5 yrs)</span>
                      <span className="text-gold-500 font-bold text-xl md:text-2xl">{roi.toFixed(1)}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gold-500 to-[#7A5540] transition-all duration-500"
                        style={{ width: `${roiPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: #7A5540;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s;
        }
        
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #7A5540;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s;
        }
        
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default InvestmentCalculator;