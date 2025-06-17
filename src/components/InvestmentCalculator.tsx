import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const scenarios = {
  realistic: { name: 'Realistic', yieldKg: 20, pricePerKg: 4.50 },
  optimistic: { name: 'Optimistic', yieldKg: 25, pricePerKg: 5.00 },
  pessimistic: { name: 'Pessimistic', yieldKg: 15, pricePerKg: 4.00 }
};

const InvestmentCalculator: React.FC = () => {
  const [totalTrees, setTotalTrees] = useState(1);
  const [moneyToInvest, setMoneyToInvest] = useState(200);
  const [selectedScenario, setSelectedScenario] = useState<keyof typeof scenarios>('realistic');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scenario = scenarios[selectedScenario];
  const costPerTree = 200; // €200 per tree
  const actualTrees = Math.floor(moneyToInvest / costPerTree);
  const returnPerYear = actualTrees * scenario.yieldKg * scenario.pricePerKg;
  const lifetimeReturn = returnPerYear * 20; // 20 year lifespan
  const roi = ((lifetimeReturn - moneyToInvest) / moneyToInvest) * 100;

  // Calculate percentage for sliders
  const treePercentage = ((totalTrees - 1) / (50 - 1)) * 100;
  const moneyPercentage = ((moneyToInvest - 200) / (10000 - 200)) * 100;

  return (
    <section className="section bg-cream-50 py-8 md:py-10">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`text-center mb-6 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-coffee-600 mb-2">
              Calculate Your Investment Growth
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Curious about your potential profits? Use this calculator to estimate your earnings.
            </p>
          </div>

          <div 
            className={`card-large p-4 md:p-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left side - Controls */}
              <div>
                {/* Profit Scenario Selection */}
                <div className="mb-4">
                  <h3 className="text-base font-bold text-coffee-700 mb-2">Pick Your Profit Scenario</h3>
                  <div className="space-y-1">
                    {Object.entries(scenarios).map(([key, scenario]) => (
                      <label key={key} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="scenario"
                          value={key}
                          checked={selectedScenario === key}
                          onChange={(e) => setSelectedScenario(e.target.value as keyof typeof scenarios)}
                          className="w-3 h-3 text-coffee-600 mr-2"
                        />
                        <span className={`text-sm ${selectedScenario === key ? 'text-coffee-700 font-semibold' : 'text-gray-600'}`}>
                          {scenario.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Scenario Details */}
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-600 text-xs">Mature tree yield</span>
                    <span className="text-coffee-600 font-semibold text-sm">{scenario.yieldKg}kg</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-600 text-xs">Coffee price</span>
                    <span className="text-coffee-600 font-semibold text-sm">{scenario.pricePerKg}€/kg</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="btn btn-primary flex-1 text-xs px-3 py-2">
                    Invest Now <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                  <button className="btn btn-secondary flex-1 text-xs px-3 py-2">
                    P&L Statement <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Right side - Sliders and Results */}
              <div>
                {/* Tree Slider */}
                <div className="mb-4">
                  <label className="block text-brown-800 font-semibold mb-2 text-xs">
                    Total trees (+0 free)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={totalTrees}
                      onChange={(e) => {
                        const trees = parseInt(e.target.value);
                        setTotalTrees(trees);
                        setMoneyToInvest(trees * costPerTree);
                      }}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #3E2B28 0%, #3E2B28 ${treePercentage}%, #E5E7EB ${treePercentage}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="flex justify-end mt-1">
                      <span className="bg-white px-2 py-0.5 rounded-full border text-brown-800 font-semibold text-xs">
                        {totalTrees}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Money Slider */}
                <div className="mb-4">
                  <label className="block text-brown-800 font-semibold mb-2 text-xs">
                    Money to invest
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="200"
                      max="10000"
                      step="200"
                      value={moneyToInvest}
                      onChange={(e) => {
                        const money = parseInt(e.target.value);
                        setMoneyToInvest(money);
                        setTotalTrees(Math.floor(money / costPerTree));
                      }}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #3E2B28 0%, #3E2B28 ${moneyPercentage}%, #E5E7EB ${moneyPercentage}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="flex justify-end mt-1">
                      <span className="bg-white px-2 py-0.5 rounded-full border text-brown-800 font-semibold text-xs">
                        {moneyToInvest}€
                      </span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-gray-600 text-xs">Total trees</span>
                    <span className="text-coffee-600 font-bold text-sm">{actualTrees}</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-gray-600 text-xs">Return / year</span>
                    <span className="text-coffee-600 font-bold text-sm">{Math.round(returnPerYear)}€</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-gray-200">
                    <span className="text-gray-600 text-xs">To invest</span>
                    <span className="text-coffee-600 font-bold text-sm">{moneyToInvest}€</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-gray-600 text-xs">Lifetime</span>
                    <span className="text-coffee-600 font-bold text-sm">{Math.round(lifetimeReturn).toLocaleString()}€</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t-2 border-coffee-200">
                    <span className="text-gray-600 font-semibold text-xs">ROI</span>
                    <span className="text-coffee-600 font-bold text-lg">{roi.toFixed(1)}%</span>
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