import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

const packages = [
  {
    name: "Starter Package",
    trees: 50,
    investment: 5000,
    annualYield: 12,
    term: 5,
    features: [
      "50 Premium Arabica Trees",
      "Digital Ownership Certificate",
      "Quarterly Farm Reports",
      "Annual Harvest Updates",
      "Option to Reinvest Returns"
    ]
  },
  {
    name: "Professional Package",
    trees: 200,
    investment: 20000,
    annualYield: 14,
    term: 7,
    features: [
      "200 Premium Arabica Trees",
      "Digital Ownership Certificate",
      "Monthly Farm Reports",
      "Quarterly Video Updates",
      "Personalized Dashboard",
      "Physical Certificate of Ownership",
      "1 Annual Farm Visit (optional)"
    ]
  },
  {
    name: "Enterprise Package",
    trees: 1000,
    investment: 100000,
    annualYield: 16,
    term: 10,
    features: [
      "1,000 Premium Arabica Trees",
      "Digital Ownership Certificate",
      "Weekly Farm Reports",
      "Monthly Video Updates",
      "Advanced Analytics Dashboard",
      "Framed Certificate of Ownership",
      "Annual Farm Visits",
      "Personalized Coffee Shipments",
      "Priority Harvest Access"
    ]
  }
];

const InvestmentPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [investment, setInvestment] = useState(packages[1].investment);
  
  const handlePrev = () => {
    setSelectedPackage(prev => (prev > 0 ? prev - 1 : prev));
    setInvestment(packages[selectedPackage > 0 ? selectedPackage - 1 : 0].investment);
  };
  
  const handleNext = () => {
    setSelectedPackage(prev => (prev < packages.length - 1 ? prev + 1 : prev));
    setInvestment(packages[selectedPackage < packages.length - 1 ? selectedPackage + 1 : packages.length - 1].investment);
  };

  const calculateReturns = (amount: number, rate: number, years: number) => {
    const returns = [];
    let total = amount;
    
    for (let i = 1; i <= years; i++) {
      // First 2 years no returns
      if (i <= 2) {
        returns.push(0);
      } 
      // Year 3 - 20% of full yield
      else if (i === 3) {
        const yearReturn = amount * (rate * 0.2) / 100;
        total += yearReturn;
        returns.push(yearReturn);
      }
      // Year 4 - 60% of full yield
      else if (i === 4) {
        const yearReturn = amount * (rate * 0.6) / 100;
        total += yearReturn;
        returns.push(yearReturn);
      }
      // Year 5+ - 100% of yield
      else {
        const yearReturn = amount * rate / 100;
        total += yearReturn;
        returns.push(yearReturn);
      }
    }
    
    return { annual: returns, total };
  };
  
  const activePackage = packages[selectedPackage];
  const returns = calculateReturns(investment, activePackage.annualYield, activePackage.term);
  
  return (
    <section id="packages" className="section bg-coffee-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-coffee-800 mb-6 fade-in">Investment Packages</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-8 fade-in"></div>
          <p className="text-coffee-700 fade-in">
            Each tier is crafted to align with distinct aspirations—whether you're planting a modest garden of 50 trees or cultivating a vast estate of 1,000.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex md:space-x-4 bg-cream-100 shadow-md rounded-sm overflow-hidden flex-col md:flex-row">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className={`p-6 md:p-8 cursor-pointer transition-all ${
                  selectedPackage === index 
                    ? 'bg-forest-500 text-cream-50' 
                    : 'bg-cream-100 text-coffee-700 hover:bg-cream-200'
                }`}
                onClick={() => {
                  setSelectedPackage(index);
                  setInvestment(pkg.investment);
                }}
              >
                <h3 className="text-xl font-serif mb-2">{pkg.name}</h3>
                <p className={selectedPackage === index ? 'text-cream-100' : 'text-coffee-600'}>
                  {pkg.trees} Trees • {pkg.annualYield}% Yield
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-cream-50 p-8 shadow-md border border-cream-200 fade-in">
            <h3 className="text-2xl font-serif mb-6 text-coffee-800">{activePackage.name}</h3>
            
            <div className="mb-6">
              <div className="flex justify-between text-coffee-600 mb-2">
                <span>Trees</span>
                <span className="font-medium">{activePackage.trees}</span>
              </div>
              <div className="flex justify-between text-coffee-600 mb-2">
                <span>Minimum Investment</span>
                <span className="font-medium">${activePackage.investment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-coffee-600 mb-2">
                <span>Annual Yield</span>
                <span className="font-medium">{activePackage.annualYield}%</span>
              </div>
              <div className="flex justify-between text-coffee-600 mb-2">
                <span>Term</span>
                <span className="font-medium">{activePackage.term} years</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-serif mb-4 text-coffee-800">Package Features</h4>
              <ul className="space-y-2">
                {activePackage.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-forest-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-coffee-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="btn btn-primary w-full">
              Select This Package
            </button>
          </div>
          
          <div className="bg-cream-50 p-8 shadow-md border border-cream-200 fade-in" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-serif mb-6 text-coffee-800">Investment Calculator</h3>
            
            <div className="mb-6">
              <label className="block text-coffee-700 mb-2">Investment Amount</label>
              <div className="flex items-center">
                <button 
                  className="h-10 w-10 flex items-center justify-center bg-cream-200 text-coffee-700"
                  onClick={handlePrev}
                  disabled={selectedPackage === 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  value={`$${investment.toLocaleString()}`}
                  readOnly
                  className="h-10 w-full text-center border-t border-b border-cream-200 bg-cream-50 text-coffee-800"
                />
                <button 
                  className="h-10 w-10 flex items-center justify-center bg-cream-200 text-coffee-700"
                  onClick={handleNext}
                  disabled={selectedPackage === packages.length - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-serif mb-4 text-coffee-800">Projected Returns</h4>
              <div className="space-y-3">
                {returns.annual.map((yearlyReturn, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${
                        index < 2 ? 'bg-cream-300' : 'bg-forest-500'
                      }`}></div>
                      <span className="text-coffee-600">Year {index + 1}</span>
                    </div>
                    <span className={`font-medium ${
                      index < 2 ? 'text-coffee-400' : 'text-coffee-800'
                    }`}>
                      ${yearlyReturn.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-cream-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-coffee-700">Total Investment</span>
                <span className="font-medium text-coffee-800">${investment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-coffee-700">Total Returns</span>
                <span className="font-medium text-forest-600">
                  ${returns.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-coffee-700">Net Profit</span>
                <span className="font-medium text-forest-600">
                  ${(returns.total - investment).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPackages;