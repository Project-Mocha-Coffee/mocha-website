import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Info } from 'lucide-react';

const InvestmentCalculator = () => {
  const [totalBonds, setTotalBonds] = useState(0.01); // Start with equivalent of $1
  const [moneyToInvest, setMoneyToInvest] = useState(1); // Minimum $1
  const sectionRef = useRef(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Debounce for input
  const debounce = (callback: () => void, delay: number) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(callback, delay);
  };

  const costPerBond = 100;
  const maxBonds = 20;
  const maxInvestment = 2000;

  // Calculate bonds and returns
  const actualBonds = moneyToInvest / costPerBond; // Allow fractional bonds
  const annualInterest = actualBonds * 10;
  const lifetimeReturn = actualBonds * 50;
  const roi = lifetimeReturn > 0 ? (lifetimeReturn / moneyToInvest) * 100 : 0;
  const roiPercentage = Math.min(roi, 100);

  // Slider calculations
  const bondPercentage = ((totalBonds - 0.01) / (maxBonds - 0.01)) * 100;
  const requiredInvestment = totalBonds * costPerBond;

  const handleBondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bonds = parseFloat(e.target.value);
    setTotalBonds(bonds);
    setMoneyToInvest(bonds * costPerBond);
  };

  const handleBondInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0.01, Math.min(maxBonds, parseFloat(e.target.value) || 0.01));
    setTotalBonds(value);
    setMoneyToInvest(value * costPerBond);
  };

  const handleBondsFromInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(() => {
      const value = Math.max(0.01, Math.min(maxBonds, parseFloat(e.target.value) || 0.01));
      setTotalBonds(value);
      setMoneyToInvest(value * costPerBond);
    }, 100);
  };

  return (
    <section
      ref={sectionRef}
      className={`section bg-cream-50 py-8 md:py-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="calculator"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-700 mb-2 animate-fade-in-custom">
              Mocha Asset-Backed Investment Calculator
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-forest-700 mb-2 animate-fade-in-custom delay-200">
                     Explore Your Investment Potential
                   </h3>
           
          </div>

          <div className="card-large bg-white/90 backdrop-blur-lg p-4 md:p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Left side - Controls */}
              <div className="order-2 lg:order-1 space-y-4 md:space-y-6">
                {/* Profit Scenario Selection */}
                <div>
                 
                  <p className="text-gray-600 text-sm md:text-base mb-3 animate-fade-in-custom delay-200">
                    Discover Your Returns with Mocha Asset-Backed Investments
                  </p>
                  
                </div>

                {/* Scenario Details */}
                <div className="space-y-1 bg-cream-50 p-2 rounded-md animate-fade-in-custom delay-300">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs">Annual Interest Rate</span>
                    <span className="text-forest-700 font-semibold text-xs">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs">Tenor</span>
                    <span className="text-forest-700 font-semibold text-xs">5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs">Tree Cost</span>
                    <span className="text-forest-700 font-semibold text-xs">$100 per tree</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs">Max Trees per Investor</span>
                    <span className="text-forest-700 font-semibold text-xs">20</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 animate-fade-in-custom delay-400">
                  <button 
                    onClick={() => window.open('https://portal-rho-lemon.vercel.app/', '_blank', 'noopener,noreferrer')}
                    className="flex-1 bg-[#7A5540] text-white py-1.5 px-2.5 rounded-md hover:bg-[#5A3F2F] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 text-xs"
                  >
                    Invest Now <ArrowRight className="ml-1 h-3 w-3 inline" />
                  </button>
                  {/* <button className="flex-1 bg-cream-100 text-forest-700 py-3 px-6 rounded-lg hover:bg-cream-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500">
                    View Term Sheet <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button> */}
                </div>
                {/* <p className="text-gray-500 text-sm md:text-base animate-fade-in delay-400">
                  Click "Invest Now" to start your investment journey or "View Term Sheet" for detailed terms and conditions.
                </p> */}
               {/*  <p className="text-gray-500 text-sm md:text-base animate-fade-in delay-400">
                  Click "Invest Now" to start your investment journey.
                </p> */}
              </div>

              {/* Right side - Sliders and Results */}
              <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
                {/* Bond Slider */}
                <div>
                  <label className="block text-forest-700 font-semibold mb-2 text-xs md:text-sm animate-fade-in-custom delay-200">
                    Number of Trees
                    <span className="ml-2 text-gray-500 cursor-pointer relative group">
                      <Info className="h-3 w-3 inline" />
                     {/*  <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded p-2 -top-10 left-0 w-48">
                        Select the number of trees to invest in. $100 funds one complete tree investment, with $1 to investing in a share of a tree. The maximum is 20 trees to invest in per investor.
                      </span> */}
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0.01"
                      max={maxBonds}
                      step="0.01"
                      value={totalBonds}
                      onChange={handleBondChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500 range-thumb"
                      style={{
                        background: `linear-gradient(to right, #7A5540 0%, #7A5540 ${bondPercentage}%, #E5E7EB ${bondPercentage}%, #E5E7EB 100%)`
                      }}
                      aria-label="Number of bonds"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs md:text-sm text-gray-500">
                        Required: ${requiredInvestment.toLocaleString()}
                      </span>
                      <input
                        type="number"
                        min="0.01"
                        max={maxBonds}
                        step="0.01"
                        value={totalBonds.toFixed(2)}
                        onChange={handleBondInputChange}
                        className="w-16 px-2 py-1 rounded-full border border-gold-200 text-forest-700 font-semibold text-xs md:text-sm text-center focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        aria-label="Edit number of bonds"
                      />
                    </div>
                  </div>
                </div>

                {/* Bonds from Investment */}
                <div>
                  <label className="block text-forest-700 font-semibold mb-2 text-xs md:text-sm animate-fade-in-custom delay-200">
                    Bonds from Investment
                    <span className="ml-2 text-gray-500 cursor-pointer relative group">
                      <Info className="h-3 w-3 inline" />
                      {/* <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded p-2 -top-10 left-0 w-48">
                        Enter the number of trees to calculate the investment amount. $100 funds one complete tree investment, with $1 investing in a share of a tree which 0.01% share of the tree.
                      </span> */}
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={0.01}
                      max={maxBonds}
                      step="0.01"
                      value={actualBonds.toFixed(2)}
                      onChange={handleBondsFromInvestmentChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-forest-700 text-xs md:text-sm transition-all duration-300"
                      placeholder="Enter number of bonds"
                      aria-label="Bonds from investment"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs md:text-sm">
                      Treee
                    </div>
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-gray-500">
                    Min: 0.01 bonds ($1) | Max: {maxBonds} bonds (${maxInvestment.toLocaleString()}) | Investment: ${moneyToInvest.toLocaleString()}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2 bg-cream-50 p-3 rounded-lg animate-fade-in-custom delay-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-xs md:text-sm">Total Rewards</span>
                    <span className="text-forest-700 font-bold text-sm md:text-base">{actualBonds.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-xs md:text-sm">Annual Interest</span>
                    <span className="text-forest-700 font-bold text-sm md:text-base">
                      ${Math.round(annualInterest).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-1">
                    <span className="text-gray-600 text-xs md:text-sm">To Invest</span>
                    <span className="text-forest-700 font-bold text-sm md:text-base">
                      ${moneyToInvest.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-xs md:text-sm">Total Return (5 yrs)</span>
                    <span className="text-forest-700 font-bold text-sm md:text-base">
                      ${Math.round(lifetimeReturn).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-xs md:text-sm">Principal at Maturity</span>
                    <span className="text-forest-700 font-bold text-sm md:text-base">
                      ${Math.round(moneyToInvest).toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center pt-1 border-t-2 border-gold-200">
                      <span className="text-forest-700 font-semibold text-xs md:text-sm">ROI (5 yrs)</span>
                      <span className="text-gold-500 font-bold text-lg md:text-xl">{roi.toFixed(1)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gold-500 to-[#7A5540] transition-all duration-500"
                        style={{ width: `${roiPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Results are estimates based on a fixed 10% annual return over 5 years. Actual returns may vary. Your principal is returned at maturity.
                  </p>
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