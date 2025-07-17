import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const scenarios = {
  realistic: { name: 'Realistic', yieldKg: 0.75, pricePerKg: 5.00, description: 'Balanced projection for Arabica coffee.' },
  optimistic: { name: 'Optimistic', yieldKg: 1.00, pricePerKg: 6.00, description: 'High-yield scenario with strong market prices.' },
  pessimistic: { name: 'Pessimistic', yieldKg: 0.50, pricePerKg: 4.00, description: 'Conservative estimate for cautious investors.' }
};

const InvestmentCalculator = () => {
  const [totalTrees, setTotalTrees] = useState(1);
  const [moneyToInvest, setMoneyToInvest] = useState(100);
  const [selectedScenario, setSelectedScenario] = useState<keyof typeof scenarios>('realistic');
  const [isVisible, setIsVisible] = useState(false);
  const [useCompound, setUseCompound] = useState(true); // Default to compound for realistic ROI
  const sectionRef = useRef<HTMLElement | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
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
  const debounce = (callback: () => void, delay: number) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(callback, delay);
  };

  const costPerTree = 100;
  const actualTrees = Math.floor(moneyToInvest / costPerTree);
  const actualFreeTrees = Math.floor(actualTrees / 10);
  const actualTotalTrees = actualTrees + actualFreeTrees;
  const scenario = scenarios[selectedScenario];

  // Calculate returns
  const returnPerYear = actualTotalTrees * scenario.yieldKg * scenario.pricePerKg;
  const lifetimeReturn = useCompound
    ? moneyToInvest * Math.pow(1 + (scenario.yieldKg * scenario.pricePerKg / costPerTree), 20)
    : returnPerYear * 20;
  const roi = ((lifetimeReturn - moneyToInvest) / moneyToInvest) * 100;
  const roiPercentage = Math.min(roi, 100); // Cap at 100% for progress bar

  // Calculate for tree slider
  const treePercentage = ((totalTrees - 1) / (1000 - 1)) * 100;
  const requiredInvestment = totalTrees * costPerTree;
  const freeTrees = Math.floor(totalTrees / 10);
  const totalTreesWithFree = totalTrees + freeTrees;

  const handleTreeChange = (trees: React.SetStateAction<number>) => {
    setTotalTrees(trees);
    if (typeof trees === 'number') {
      setMoneyToInvest(trees * costPerTree);
    } else {
      setMoneyToInvest(prev => {
        const next = typeof trees === 'function' ? trees(prev) : prev;
        return next * costPerTree;
      });
    }
  };

  const handleTreeInputChange = (trees: number) => {
    const value = Math.max(1, Math.min(1000, trees || 1));
    setTotalTrees(value);
    setMoneyToInvest(value * costPerTree);
  };

  const handleMoneyChange = (money: number) => {
    debounce(() => {
      const value = Math.max(100, money || 100);
      setMoneyToInvest(value);
      setTotalTrees(Math.floor(value / costPerTree));
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
              Calculate Your Investment Growth
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto animate-fade-in delay-100">
              Curious about your potential profits? Use this calculator to estimate your earnings with Project Mocha.
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
                        onClick={() => setSelectedScenario(key as keyof typeof scenarios)}
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
                    <span className="text-gray-600 text-sm md:text-base">Mature tree yield</span>
                    <span className="text-forest-700 font-semibold text-sm md:text-base">{scenario.yieldKg}kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Coffee price</span>
                    <span className="text-forest-700 font-semibold text-sm md:text-base">${scenario.pricePerKg}/kg</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="compound-interest"
                      checked={useCompound}
                      onChange={() => setUseCompound(!useCompound)}
                      className="w-4 h-4 text-gold-500 mr-2 focus:ring-gold-500"
                      aria-label="Use compound interest"
                    />
                    <label htmlFor="compound-interest" className="text-sm md:text-base text-forest-700">
                      Use compound interest
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 animate-fade-in delay-400">
                  <button className="flex-1 bg-[#7A5540] text-white py-3 px-6 rounded-lg hover:bg-[#5A3F2F] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500">
                    Invest Now <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                  <button className="flex-1 bg-cream-100 text-forest-700 py-3 px-6 rounded-lg hover:bg-cream-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500">
                    P&L Statement <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                </div>
              </div>

              {/* Right side - Sliders and Results */}
              <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
                {/* Tree Slider */}
                <div>
                  <label className="block text-forest-700 font-semibold mb-3 text-sm md:text-base animate-fade-in delay-200">
                    Total trees (+{freeTrees} free)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="1000"
                      value={totalTrees}
                      onChange={(e) => handleTreeChange(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500"
                      style={{
                        background: `linear-gradient(to right, #7A5540 0%, #7A5540 ${treePercentage}%, #E5E7EB ${treePercentage}%, #E5E7EB 100%)`
                      }}
                      aria-label="Number of trees"
                    />
                    <div className="flex justify-between mt-3">
                      <span className="text-sm md:text-base text-gray-500">
                        Required: ${requiredInvestment.toLocaleString()}
                      </span>
                      <input
                        type="number"
                        min="1"
                        max="1000"
                        value={totalTrees}
                        onChange={(e) => handleTreeInputChange(parseInt(e.target.value))}
                        className="w-20 px-2 py-1 rounded-full border border-gold-200 text-forest-700 font-semibold text-sm md:text-base text-center focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        aria-label="Edit number of trees"
                      />
                    </div>
                  </div>
                </div>

                {/* Money Input Field */}
                <div>
                  <label className="block text-forest-700 font-semibold mb-3 text-sm md:text-base animate-fade-in delay-200">
                    Money to invest
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="100"
                      max="100000"
                      step="100"
                      value={moneyToInvest}
                      onChange={(e) => handleMoneyChange(parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-forest-700 text-sm md:text-base transition-all duration-300"
                      placeholder="Enter amount"
                      aria-label="Investment amount"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm md:text-base">
                      $
                    </div>
                  </div>
                  <div className="mt-2 text-sm md:text-base text-gray-500">
                    Min: $100 | Max: $100,000
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4 bg-cream-50 p-4 rounded-xl animate-fade-in delay-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm md:text-base">Total trees</span>
                    <span className="text-forest-700 font-bold text-base md:text-lg">{actualTotalTrees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm md:text-base">Return / year</span>
                    <span className="text-forest-700 font-bold text-base md:text-lg">
                      ${Math.round(returnPerYear).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-2">
                    <span className="text-gray-600 text-sm md:text-base">To invest</span>
                    <span className="text-forest-700 font-bold text-base md:text-lg">
                      ${moneyToInvest.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm md:text-base">Lifetime (20 yrs)</span>
                    <span className="text-forest-700 font-bold text-base md:text-lg">
                      ${Math.round(lifetimeReturn).toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center pt-2 border-t-2 border-gold-200">
                      <span className="text-forest-700 font-semibold text-sm md:text-base">ROI</span>
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