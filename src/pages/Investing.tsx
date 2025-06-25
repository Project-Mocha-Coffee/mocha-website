import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Users, Shield, Camera, Leaf, Gift, TrendingUp } from 'lucide-react';
import InvestmentCalculator from '../components/InvestmentCalculator';
import ReferralProgram from '../components/ReferralProgram';
import Timeline from '../components/Timeline';

const Investing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const lifeCycleStages = [
    {
      stage: "Plantation Setup",
      timeline: "Year 1",
      title: "Coffee Plantation Setup",
      description: "At this stage, you have placed an order for your coffee tree saplings. We will plant them in the first upcoming planting season in our sustainable coffee plantations across Kenya's fertile highlands, including the renowned Nyeri and Kiambu regions.",
      image: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      badge: "Planted"
    },
    {
      stage: "Tree Development",
      timeline: "Years 2-4",
      title: "Coffee Tree Development Period",
      description: "In these first years, your coffee trees focus on building strong roots and structure in Kenya's ideal climate. Although capable of some early yields, initial harvests are reinvested to boost long-term vitality. Kenya's volcanic soil provides perfect conditions for healthy growth, lasting yields, and future returns.",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      badge: "1 - 4 Years"
    },
    {
      stage: "ROI Period",
      timeline: "Years 5-8",
      title: "Initial Returns",
      description: "By year 5, your coffee trees begin to produce meaningful yields of premium Kenyan Arabica beans. From this point onward, returns steadily grow—culminating in full return on your investment typically by year 7 or 8. This stage marks the financial fruition of your long-term commitment to Kenya's coffee excellence.",
      image: "https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      badge: "Reward Years (5-8)"
    },
    {
      stage: "Golden Years",
      timeline: "Years 9-30+",
      title: "The Golden Years",
      description: "Your coffee trees are fully mature and are producing anywhere between 2-5 kg of premium Kenyan Arabica beans annually. Known for their bright acidity and wine-like flavor, these beans command premium prices in global markets, representing peak profitability and consistent returns for decades to come.",
      image: "https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      badge: "9 - 30+ Years"
    }
  ];

  const investmentSteps = [
    {
      step: 1,
      title: "You Place An Order – Pick The Perfect Plan",
      subtitle: "Choose your package.",
      icon: "🛒"
    },
    {
      step: 2,
      title: "We Plant And Grow Your Coffee Trees",
      subtitle: "We handle the rest.",
      icon: "🌱"
    },
    {
      step: 3,
      title: "You Collect Your Payouts Every Year",
      subtitle: "Enjoy the returns.",
      icon: "💰"
    }
  ];

  const referralSteps = [
    {
      step: 1,
      title: "You Invite Friends",
      description: "Invite your friends to register with Project Mocha by sharing your unique referral link.",
      color: "bg-brown-200"
    },
    {
      step: 2,
      title: "They Buy Trees",
      description: "When your friends invest in a 5-tree package or more, they become part of Kenya's sustainable coffee movement and highland farming tradition.",
      color: "bg-brown-800 text-white"
    },
    {
      step: 3,
      title: "You Get Free Trees",
      description: "For every 5-tree package purchased through your referral link, you get one tree for free!",
      color: "bg-brown-600"
    }
  ];

  const benefitCards = [
    {
      title: "Passive Income And Yield",
      description: "Coffee farming is a substantial source of passive income. It might take a couple of years for the yield to start coming in, but when it does, you will enjoy it for the next 25+ years.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-white"
    },
    {
      title: "Good For The Environment",
      description: "Everyone should plant at least one tree in their lifetime... And you are going to get paid for doing so.",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-brown-800 text-white"
    },
    {
      title: "A Gift For The Next Generation",
      description: "Not only are you creating equity for yourself, you are also securing future generations to come.",
      icon: <Gift className="w-6 h-6" />,
      color: "bg-white"
    },
    {
      title: "Photo And Video Updates",
      description: "Project Mocha prides itself on transparency. With photo and video updates directly from the plantation, you will follow your coffee trees thoroughly, from planting to harvesting.",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-brown-600"
    }
  ];



  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="relative z-10 container-custom pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <div 
                className={`transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 font-bold leading-tight">
                  Start Investing In<br />
                  Your Coffee<br />
                  <span className="text-brown-400">Future Today</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-cream-100 max-w-3xl leading-relaxed mb-6 sm:mb-8">
                  Grow premium Arabica coffee trees with us. Expand your portfolio with our fully-managed coffee 
                  plantations in Kenya's renowned highland regions - home to some of the world's finest coffee.
                </p>
              </div>

              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <button className="btn btn-gold w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 touch-manipulation">
                  Free strategy session <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button className="btn btn-secondary w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 touch-manipulation">
                  Make long-term profits <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              <div 
                className={`transition-all duration-1000 delay-1200 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <p className="text-cream-200 italic text-sm sm:text-base">
                  Talk to our advisor and get to know everything you need for a secure investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invest From All Around The World */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brown-700 mb-1">Invest From</h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brown-800 mb-4 sm:mb-6">
              All Around The World
            </h3>
            <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-4">
                <span className="font-semibold text-brown-700">Project Mocha</span> invites global investors to grow high-yield Arabica coffee plantations in Kenya's fertile highlands. 
                After setup, our local agricultural experts and Kenyan farmers ensure each tree thrives in the ideal volcanic soil for maximum long-term profits. We only take our share 
                after your initial investment is fully returned.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
            <div className="card bg-brown-800 rounded-2xl sm:rounded-3xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&h=600&q=80"
                alt="Kenyan coffee plantations in highland terrain"
                className="w-full h-48 sm:h-56 md:h-64 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-brown-800 bg-opacity-60 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <div className="text-2xl sm:text-3xl mb-3">🇰🇪</div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-brown-400 mb-2 sm:mb-3">Kenyan Coffee Investment</h4>
                  <p className="text-cream-100 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                    Our premium Arabica coffee plantations in Kenya's highlands welcome investors from around the world. 
                    Join our community of international investors in Kenya's renowned coffee heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="btn bg-brown-700 text-white hover:bg-brown-800 w-full sm:w-auto px-6 py-3 text-sm sm:text-base rounded-full touch-manipulation">
              Schedule a call <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="btn bg-brown-800 text-white hover:bg-brown-900 w-full sm:w-auto px-6 py-3 text-sm sm:text-base rounded-full touch-manipulation">
              Invest now <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* How Does My Investment Work */}
      <section className="py-8 sm:py-12 md:py-16 bg-brown-800">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">How Does My Investment Work?</h2>
            <p className="text-cream-100 text-sm sm:text-base max-w-3xl mx-auto">
              Simple steps to grow your sustainable coffee investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-6 sm:mb-8">
            {investmentSteps.map((step, index) => (
              <div key={index} className="card p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{step.icon}</div>
                <h4 className="text-sm sm:text-base font-bold text-brown-700 mb-3 sm:mb-4 leading-tight">{step.title}</h4>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                  <span className="bg-brown-600 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    Step {step.step}:
                  </span>
                  <span className="text-gray-600 text-xs sm:text-sm">{step.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn bg-brown-600 text-white hover:bg-brown-700 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base touch-manipulation">
              Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Investment Calculator */}
      <InvestmentCalculator />

      {/* Cash Flow Forecast */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-100">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brown-700 mb-2">Cash Flow Forecast And</h2>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-brown-800 mb-4 sm:mb-6">Investment Pitch Desk</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  Download the 10 years cash flow forecast and investment pitch deck featuring Kenya-specific market data 
                  and get detailed insights into your Kenyan coffee investment.
                </p>
                <button className="btn bg-coffee-600 text-white hover:bg-coffee-700 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base touch-manipulation">
                  Download now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="card p-4 sm:p-6 bg-white rounded-2xl shadow-lg">
                  <h4 className="text-sm sm:text-base font-bold text-forest-600 mb-3 sm:mb-4">Yearly income from one coffee tree</h4>
                  
                  {/* Chart representation */}
                  <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-cream-50 to-gold-50 rounded-xl p-3 sm:p-4">
                    {/* Y-axis labels */}
                    <div className="absolute left-1 sm:left-2 top-3 sm:top-4 text-xs text-gray-500 space-y-4 sm:space-y-6">
                      <div>$100</div>
                      <div>$80</div>
                      <div>$60</div>
                      <div>$40</div>
                      <div>$20</div>
                      <div>$0</div>
                    </div>
                    
                    {/* Chart area */}
                    <div className="ml-6 sm:ml-8 h-full relative">
                      {/* Growth curve representation */}
                      <svg className="w-full h-full" viewBox="0 0 300 200">
                        <defs>
                          <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D97706" stopOpacity="0.3" />
                            <stop offset="70%" stopColor="#059669" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
                          </linearGradient>
                        </defs>
                        
                        {/* Income curve */}
                        <path
                          d="M 20 180 Q 50 160 80 140 Q 120 100 160 80 Q 200 60 240 40 L 280 30"
                          stroke="#059669"
                          strokeWidth="3"
                          fill="none"
                        />
                        
                        {/* Area under curve */}
                        <path
                          d="M 20 180 Q 50 160 80 140 Q 120 100 160 80 Q 200 60 240 40 L 280 30 L 280 180 Z"
                          fill="url(#incomeGradient)"
                        />
                        
                        {/* Data points */}
                        <circle cx="20" cy="180" r="3" fill="#D97706" />
                        <circle cx="80" cy="140" r="3" fill="#DC2626" />
                        <circle cx="160" cy="80" r="3" fill="#059669" />
                        <circle cx="240" cy="40" r="3" fill="#10B981" />
                        <circle cx="280" cy="30" r="3" fill="#10B981" />
                      </svg>
                      
                      {/* Phase labels */}
                      <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 flex justify-between text-xs text-gray-500">
                        <span>Year 1</span>
                        <span className="hidden sm:inline">Year 3</span>
                        <span>Year 5</span>
                        <span className="hidden sm:inline">Year 7</span>
                        <span>Year 10+</span>
                      </div>
                      
                      {/* Phase annotations - Hidden on small screens */}
                      <div className="hidden sm:block absolute top-4 left-4 bg-coffee-100 px-2 py-1 rounded text-xs text-coffee-600">
                        Kenya highland planting<br />& tree development
                      </div>
                      
                      <div className="hidden md:block absolute top-8 right-4 bg-forest-100 px-2 py-1 rounded text-xs text-forest-600">
                        Return on<br />Investment period
                      </div>
                      
                      <div className="hidden lg:block absolute bottom-12 right-8 bg-gold-100 px-2 py-1 rounded text-xs text-coffee-600">
                        <div className="font-semibold text-gold-600">The golden years</div>
                        <div className="text-xs">Premium Kenyan Arabica yields $70-$120/tree</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Life Cycle */}
      <Timeline 
        stages={lifeCycleStages}
        title="Investment Life Cycle"
        subtitle="Discover the growth stages of your coffee investment, from planting to peak profitability."
        backgroundColor="bg-forest-200"
        textColor="text-white"
        accentColor="bg-gold-400"
        showCurvedConnectors={true}
        autoScroll={true}
      />

      {/* Referral Program */}
      <ReferralProgram />

      {/* Risk Mitigation */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-forest-600 mb-2">
              Full ROI
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-coffee-600">
              No Matter What
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
            {/* Risk Mitigation Card */}
            <div className="card bg-forest-100 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-2 order-2 md:order-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Risk Mitigation</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <p className="leading-relaxed text-white/90 text-sm sm:text-base">
                      The calculation of yearly dividends is based on a percentage ownership stake in the Kenyan plantation, 
                      not on an individual "tree yield" basis.
                    </p>
                    <p className="leading-relaxed text-white/90 text-sm sm:text-base">
                      This means that in case something happens to your tree/trees due to weather or other factors affecting Kenyan highlands, you will not be left empty-handed.
                    </p>
                    <p className="leading-relaxed text-white/90 text-sm sm:text-base">
                      We ensure that you receive your entitled profits, and we will replant your trees in our Kenyan plantation sites.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-1 order-1 md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1442544213729-6a15f1611937?auto=format&fit=crop&w=600&h=400&q=80"
                    alt="Coffee farmers working in plantation"
                    className="w-full h-40 sm:h-48 md:h-32 object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Insurance Card */}
            <div className="card bg-coffee-600 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-1 order-1">
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&h=400&q=80"
                    alt="Coffee plantation aerial view"
                    className="w-full h-40 sm:h-48 md:h-32 object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
                <div className="md:col-span-2 order-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Insurance</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <p className="leading-relaxed text-white/90 text-sm sm:text-base">
                      As an additional line of defense from unforeseen circumstances in Kenya's highlands, Project Mocha covers 
                      all insurance-related costs until the plantation has reached self-sustainability.
                    </p>
                    <p className="leading-relaxed text-white/90 text-sm sm:text-base">
                      In case of force majeure affecting our Kenyan operations, insurance settlements paid out to Project Mocha will be 
                      divided among investors proportionally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-8 sm:py-12 md:py-16 bg-forest-100">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Choose Your</h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gold-400 mb-3 sm:mb-4">Investment Future</h3>
            <p className="text-cream-100 text-sm sm:text-base max-w-4xl mx-auto">
              Discover the growth stages of your Kenyan coffee investment, from highland planting to premium Arabica profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {/* Passive Income Card */}
            <div className="card bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 h-auto sm:h-40 md:h-36">
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 bg-coffee-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-coffee-600" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-forest-600 leading-tight">Passive Income And Yield</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Coffee farming is a substantial source of passive income. It might take a couple of years for the yield 
                to start coming in, but when it does, you will enjoy it for the next 25+ years.
              </p>
            </div>

            {/* Good For Environment Card */}
            <div className="card bg-coffee-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 h-auto sm:h-40 md:h-36">
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white leading-tight">Good For The Environment</h4>
              </div>
              <p className="text-white/90 leading-relaxed text-xs sm:text-sm">
                Everyone should plant at least one tree in his or her lifetime... And you are going to get paid for doing so.
              </p>
            </div>

            {/* Tree Image Card */}
            <div className="card rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-40 md:h-36">
              <img
                src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Young coffee trees growing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Family Image Card */}
            <div className="card rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-40 md:h-36">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Coffee farming family"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gift for Next Generation Card */}
            <div className="card bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 h-auto sm:h-40 md:h-36">
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Gift className="w-4 h-4 text-forest-600" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-forest-600 leading-tight">A Gift For The Next Generation</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Not only are you creating equity for yourself, you are also securing future generations to come.
              </p>
            </div>

            {/* Photo and Video Updates Card */}
            <div className="card bg-coffee-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 h-auto sm:h-40 md:h-36">
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Camera className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white leading-tight">Photo And Video Updates</h4>
              </div>
              <p className="text-white/90 leading-relaxed text-xs sm:text-sm">
                Project Mocha prides itself on transparency. With photo and video updates directly from the plantation, 
                you will follow your coffee trees thoroughly, from planting to harvesting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investing;
