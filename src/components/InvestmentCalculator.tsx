import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const scenarios = {
  realistic: { name: 'Realistic', yieldKg: 20, pricePerKg: 4.50 },
  optimistic: { name: 'Optimistic', yieldKg: 25, pricePerKg: 5.00 },
  pessimistic: { name: 'Pessimistic', yieldKg: 15, pricePerKg: 4.00 }
};

const InvestmentCalculator: React.FC = () => {
  const [totalTrees, setTotalTrees] = useState(1);
  const [moneyToInvest, setMoneyToInvest] = useState(100);
  const [selectedScenario, setSelectedScenario] = useState<keyof typeof scenarios>('realistic');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scenario = scenarios[selectedScenario];
  const costPerTree = 100; // $100 per tree
  const actualTrees = Math.floor(moneyToInvest / costPerTree);
  const actualFreeTrees = Math.floor(actualTrees / 10);
  const actualTotalTrees = actualTrees + actualFreeTrees;
  const returnPerYear = actualTotalTrees * scenario.yieldKg * scenario.pricePerKg;
  const lifetimeReturn = returnPerYear * 20; // 20 year lifespan
  const roi = ((lifetimeReturn - moneyToInvest) / moneyToInvest) * 100;

  // Calculate percentage for tree slider
  const treePercentage = ((totalTrees - 1) / (1000 - 1)) * 100;
  
  // Calculate required investment for selected trees
  const requiredInvestment = totalTrees * costPerTree;
  
  // Calculate free trees (1 free for every 10 purchased)
  const freeTrees = Math.floor(totalTrees / 10);
  const totalTreesWithFree = totalTrees + freeTrees;

  const handleTreeChange = (trees: number) => {
    setTotalTrees(trees);
    // Automatically update money to invest to match required amount
    const requiredAmount = trees * costPerTree;
    setMoneyToInvest(requiredAmount);
  };

  const handleMoneyChange = (money: number) => {
    setMoneyToInvest(money);
    // Update trees based on money invested
    setTotalTrees(Math.floor(money / costPerTree));
  };

  return (
    <section className="section bg-cream-50 py-6 sm:py-8 md:py-10" id="calculator">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-coffee-600 mb-2 sm:mb-3">
              Calculate Your Investment Growth
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Curious about your potential profits? Use this calculator to estimate your earnings.
            </p>
          </div>

          <div 
            className={`card-large p-4 sm:p-6 md:p-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left side - Controls */}
              <div className="order-2 lg:order-1">
                {/* Profit Scenario Selection */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-coffee-700 mb-3 sm:mb-4">Pick Your Profit Scenario</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {Object.entries(scenarios).map(([key, scenario]) => (
                      <label key={key} className="flex items-center cursor-pointer p-2 sm:p-3 rounded-lg hover:bg-cream-100 transition-colors touch-manipulation">
                        <input
                          type="radio"
                          name="scenario"
                          value={key}
                          checked={selectedScenario === key}
                          onChange={(e) => setSelectedScenario(e.target.value as keyof typeof scenarios)}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-coffee-600 mr-3 sm:mr-4"
                        />
                        <span className={`text-sm sm:text-base ${selectedScenario === key ? 'text-coffee-700 font-semibold' : 'text-gray-600'}`}>
                          {scenario.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Scenario Details */}
                <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                  <div className="flex justify-between py-2 sm:py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-xs sm:text-sm">Mature tree yield</span>
                    <span className="text-coffee-600 font-semibold text-sm sm:text-base">{scenario.yieldKg}kg</span>
                  </div>
                  <div className="flex justify-between py-2 sm:py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-xs sm:text-sm">Coffee price</span>
                    <span className="text-coffee-600 font-semibold text-sm sm:text-base">${scenario.pricePerKg}/kg</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="btn btn-primary flex-1 text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6 touch-manipulation">
                    Invest Now <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="btn btn-secondary flex-1 text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6 touch-manipulation">
                    P&L Statement <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right side - Sliders and Results */}
              <div className="order-1 lg:order-2">
                {/* Tree Slider */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-brown-800 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    Total trees (+{freeTrees} free)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="1000"
                      value={totalTrees}
                      onChange={(e) => handleTreeChange(parseInt(e.target.value))}
                      className="w-full h-2 sm:h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
                      style={{
                        background: `linear-gradient(to right, #3E2B28 0%, #3E2B28 ${treePercentage}%, #E5E7EB ${treePercentage}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="flex justify-between mt-2 sm:mt-3">
                      <span className="text-xs sm:text-sm text-gray-500">
                        Required: ${requiredInvestment.toLocaleString()}
                      </span>
                      <span className="bg-white px-2 sm:px-3 py-1 rounded-full border text-brown-800 font-semibold text-xs sm:text-sm">
                        {totalTrees}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Money Input Field */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-brown-800 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    Money to invest
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="100"
                      max="100000"
                      step="100"
                      value={moneyToInvest}
                      onChange={(e) => handleMoneyChange(parseInt(e.target.value) || 100)}
                      className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-sm sm:text-base touch-manipulation"
                      placeholder="Enter amount"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm sm:text-base">
                      $
                    </div>
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-gray-500">
                    Min: $100 | Max: $100,000
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 text-sm sm:text-base">Total trees</span>
                    <span className="text-coffee-600 font-bold text-base sm:text-lg">{actualTotalTrees}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 text-sm sm:text-base">Return / year</span>
                    <span className="text-coffee-600 font-bold text-base sm:text-lg">${Math.round(returnPerYear).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-200">
                    <span className="text-gray-600 text-sm sm:text-base">To invest</span>
                    <span className="text-coffee-600 font-bold text-base sm:text-lg">${moneyToInvest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 text-sm sm:text-base">Lifetime</span>
                    <span className="text-coffee-600 font-bold text-base sm:text-lg">${Math.round(lifetimeReturn).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-t-2 border-coffee-200">
                    <span className="text-gray-600 font-semibold text-sm sm:text-base">ROI</span>
                    <span className="text-coffee-600 font-bold text-xl sm:text-2xl">{roi.toFixed(1)}%</span>
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

export default InvestmentCalculator;