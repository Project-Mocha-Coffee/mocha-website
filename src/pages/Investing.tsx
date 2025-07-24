import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Users, Shield, Camera, Leaf, Gift, TrendingUp } from 'lucide-react';
import InvestmentCalculator from '../components/InvestmentCalculator';
import ReferralProgram from '../components/ReferralProgram';
import Timeline from '../components/Timeline';
import { useContent } from '../contexts/ContentContext';
import { ContentData } from '../types/content';

const Investing: React.FC = () => {
  const { content } = useContent();
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Early return if content is not available (shouldn't happen due to loading screen)
  if (!content) {
    return null;
  }
  
  const investing = content.investing;

  // Scroll-based visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-element');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('element-visible');
                el.classList.remove('element-hidden');
              }, index * 100); // Staggered delay of 100ms per element
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Icon mapping function for investment benefits
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      TrendingUp: <TrendingUp className="w-4 h-4 text-coffee-600" />,
      Leaf: <Leaf className="w-4 h-4 text-white" />,
      Gift: <Gift className="w-4 h-4 text-forest-600" />,
      Camera: <Camera className="w-4 h-4 text-white" />,
    };
    return iconMap[iconName] || null;
  };

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section 
        ref={(el) => el && sectionRefs.current.set('hero', el)}
        className="gradient-forest relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('${investing.hero.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="relative z-10 container-custom pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <div>
                <h1 className="animate-element element-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 font-bold leading-tight">
                  {investing.hero.title}<br />
                  {investing.hero.titleLines[0]}<br />
                  <span className="text-brown-400">{investing.hero.titleHighlight}</span>
                </h1>
                <p className="animate-element element-hidden text-sm sm:text-base md:text-lg text-cream-100 max-w-3xl leading-relaxed mb-6 sm:mb-8">
                  {investing.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                {investing.hero.buttons.map((button: any, index: number) => (
                  <button 
                    key={index} 
                    className={`animate-element element-hidden ${button.type === 'primary' ? 'btn btn-gold' : 'btn btn-secondary'} w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 touch-manipulation`}
                  >
                    {button.text} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                ))}
              </div>

              <div>
                <p className="animate-element element-hidden text-cream-200 italic text-sm sm:text-base">
                  {investing.hero.callToAction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invest From All Around The World */}
      <section 
        ref={(el) => el && sectionRefs.current.set('globalInvestment', el)}
        className="py-8 sm:py-12 md:py-16 bg-cream-50"
      >
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="animate-element element-hidden text-xl sm:text-2xl md:text-3xl font-bold text-brown-700 mb-1">{investing.globalInvestment.sectionTitle}</h2>
            <h3 className="animate-element element-hidden text-xl sm:text-2xl md:text-3xl font-bold text-brown-800 mb-4 sm:mb-6">
              {investing.globalInvestment.sectionSubtitle}
            </h3>
            <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
              <p className="animate-element element-hidden text-gray-600 text-sm sm:text-base leading-relaxed px-4">
                <span className="font-semibold text-brown-700">Project Mocha</span> {investing.globalInvestment.description}
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
            <div className="card bg-brown-800 rounded-2xl sm:rounded-3xl overflow-hidden relative animate-element element-hidden">
              <img
                src={investing.globalInvestment.showcaseCard.image}
                alt={investing.globalInvestment.showcaseCard.imageAlt}
                className="animate-element element-hidden w-full h-48 sm:h-56 md:h-64 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-brown-800 bg-opacity-60 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <div className="animate-element element-hidden text-2xl sm:text-3xl mb-3">{investing.globalInvestment.showcaseCard.flagEmoji}</div>
                  <h4 className="animate-element element-hidden text-base sm:text-lg md:text-xl font-bold text-brown-400 mb-2 sm:mb-3">{investing.globalInvestment.showcaseCard.title}</h4>
                  <p className="animate-element element-hidden text-cream-100 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                    {investing.globalInvestment.showcaseCard.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {investing.globalInvestment.buttons.map((button: any, index: number) => (
              <button 
                key={index} 
                className={`animate-element element-hidden ${button.type === 'primary' ? 'btn bg-brown-700 text-white hover:bg-brown-800' : 'btn bg-brown-800 text-white hover:bg-brown-900'} w-full sm:w-auto px-6 py-3 text-sm sm:text-base rounded-full touch-manipulation`}
              >
                {button.text} <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How Does My Investment Work */}
      <section 
        ref={(el) => el && sectionRefs.current.set('howItWorks', el)}
        className="py-8 sm:py-12 md:py-16 bg-brown-800"
      >
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="animate-element element-hidden text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">{investing.howItWorks.sectionTitle}</h2>
            <p className="animate-element element-hidden text-cream-100 text-sm sm:text-base max-w-3xl mx-auto">
              {investing.howItWorks.sectionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-6 sm:mb-8">
            {investing.howItWorks.steps.map((step: any, index: number) => (
              <div key={index} className="card p-4 sm:p-6 text-center animate-element element-hidden">
                <div className="animate-element element-hidden text-2xl sm:text-3xl mb-3 sm:mb-4">{step.icon}</div>
                <h4 className="animate-element element-hidden text-sm sm:text-base font-bold text-brown-700 mb-3 sm:mb-4 leading-tight">{step.title}</h4>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                  <span className="animate-element element-hidden bg-brown-600 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    Step {step.step}:
                  </span>
                  <span className="animate-element element-hidden text-gray-600 text-xs sm:text-sm">{step.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="animate-element element-hidden btn bg-brown-600 text-white hover:bg-brown-700 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base touch-manipulation">
              {investing.howItWorks.ctaButton.text} <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Investment Calculator */}
      <section ref={(el) => el && sectionRefs.current.set('investmentCalculator', el)}>
        <InvestmentCalculator />
      </section>

      {/* Cash Flow Forecast */}
      <section 
        ref={(el) => el && sectionRefs.current.set('cashFlowForecast', el)}
        className="py-8 sm:py-12 md:py-16 bg-cream-100"
      >
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="animate-element element-hidden text-xl sm:text-2xl md:text-3xl font-bold text-brown-700 mb-2">{investing.cashFlowForecast.sectionTitle}</h2>
                <h3 className="animate-element element-hidden text-lg sm:text-xl md:text-2xl font-semibold text-brown-800 mb-4 sm:mb-6">{investing.cashFlowForecast.sectionSubtitle}</h3>
                <p className="animate-element element-hidden text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {investing.cashFlowForecast.description}
                </p>
                <button className="animate-element element-hidden btn bg-coffee-600 text-white hover:bg-coffee-700 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base touch-manipulation">
                  {investing.cashFlowForecast.downloadButton.text} <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="card p-4 sm:p-6 bg-white rounded-2xl shadow-lg animate-element element-hidden">
                  <h4 className="animate-element element-hidden text-sm sm:text-base font-bold text-forest-600 mb-3 sm:mb-4">{investing.cashFlowForecast.chartTitle}</h4>
                  
                  {/* Chart representation */}
                  <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-cream-50 to-gold-50 rounded-xl p-3 sm:p-4 animate-element element-hidden">
                    {/* Y-axis labels */}
                    <div className="absolute left-1 sm:left-2 top-3 sm:top-4 text-xs text-gray-500 space-y-4 sm:space-y-6 animate-element element-hidden">
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
                      <svg className="w-full h-full animate-element element-hidden" viewBox="0 0 300 200">
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
                        <circle cx="20" cy="180" r="3" fill="#D97706" className="animate-element element-hidden" />
                        <circle cx="80" cy="140" r="3" fill="#DC2626" className="animate-element element-hidden" />
                        <circle cx="160" cy="80" r="3" fill="#059669" className="animate-element element-hidden" />
                        <circle cx="240" cy="40" r="3" fill="#10B981" className="animate-element element-hidden" />
                        <circle cx="280" cy="30" r="3" fill="#10B981" className="animate-element element-hidden" />
                      </svg>
                      
                      {/* Phase labels */}
                      <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 flex justify-between text-xs text-gray-500 animate-element element-hidden">
                        <span>Year 1</span>
                        <span className="hidden sm:inline">Year 3</span>
                        <span>Year 5</span>
                        <span className="hidden sm:inline">Year 7</span>
                        <span>Year 10+</span>
                      </div>
                      
                      {/* Phase annotations - Dynamic from content */}
                      {investing.cashFlowForecast.chartPhases.map((phase: any, index: number) => {
                        const positionClasses: { [key: string]: string } = {
                          'top-left': 'top-4 left-4',
                          'top-right': 'top-8 right-4',
                          'bottom-right': 'bottom-12 right-8'
                        };
                        
                        const colorClasses: { [key: string]: string } = {
                          'top-left': 'bg-coffee-100 text-coffee-600',
                          'top-right': 'bg-forest-100 text-forest-600',
                          'bottom-right': 'bg-gold-100 text-coffee-600'
                        };
                        
                        const hideClasses: { [key: string]: string } = {
                          'top-left': 'hidden sm:block',
                          'top-right': 'hidden md:block',
                          'bottom-right': 'hidden lg:block'
                        };
                        
                        return (
                          <div 
                            key={index}
                            className={`${hideClasses[phase.position]} absolute ${positionClasses[phase.position]} ${colorClasses[phase.position]} px-2 py-1 rounded text-xs animate-element element-hidden`}
                          >
                            {phase.description ? (
                              <div>
                                <div className="font-semibold text-gold-600">{phase.phase}</div>
                                <div className="text-xs">{phase.description}</div>
                              </div>
                            ) : (
                              phase.phase.split(' & ').map((line: string, lineIndex: number) => (
                                <div key={lineIndex}>{line}</div>
                              ))
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Life Cycle */}
      <section ref={(el) => el && sectionRefs.current.set('lifeCycle', el)}>
        <Timeline 
          stages={investing.lifeCycle.stages}
          title={investing.lifeCycle.title}
          subtitle={investing.lifeCycle.subtitle}
          backgroundColor="bg-forest-200"
          textColor="text-white"
          accentColor="bg-gold-400"
          showCurvedConnectors={true}
          autoScroll={true}
        />
      </section>

      {/* Referral Program */}
      <section ref={(el) => el && sectionRefs.current.set('referralProgram', el)}>
        <ReferralProgram />
      </section>

      {/* Risk Mitigation */}
      <section 
        ref={(el) => el && sectionRefs.current.set('riskMitigation', el)}
        className="py-8 sm:py-12 md:py-16 bg-cream-50"
      >
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="animate-element element-hidden text-xl sm:text-2xl md:text-3xl font-bold text-forest-600 mb-2">
              {investing.riskMitigation.sectionTitle}
            </h2>
            <h3 className="animate-element element-hidden text-lg sm:text-xl md:text-2xl font-bold text-coffee-600">
              {investing.riskMitigation.sectionSubtitle}
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
            {/* Risk Mitigation Card */}
            <div className="card bg-forest-100 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 animate-element element-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-2 order-2 md:order-1">
                  <h3 className="animate-element element-hidden text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{investing.riskMitigation.riskCard.title}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {investing.riskMitigation.riskCard.descriptions.map((description: string, index: number) => (
                      <p key={index} className="animate-element element-hidden leading-relaxed text-white/90 text-sm sm:text-base">
                        {description}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1 order-1 md:order-2">
                  <img
                    src={investing.riskMitigation.riskCard.image}
                    alt={investing.riskMitigation.riskCard.imageAlt}
                    className="animate-element element-hidden w-full h-40 sm:h-48 md:h-32 object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Insurance Card */}
            <div className="card bg-coffee-600 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 animate-element element-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-1 order-1">
                  <img
                    src={investing.riskMitigation.insuranceCard.image}
                    alt={investing.riskMitigation.insuranceCard.imageAlt}
                    className="animate-element element-hidden w-full h-40 sm:h-48 md:h-32 object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
                <div className="md:col-span-2 order-2">
                  <h3 className="animate-element element-hidden text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{investing.riskMitigation.insuranceCard.title}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {investing.riskMitigation.insuranceCard.descriptions.map((description: string, index: number) => (
                      <p key={index} className="animate-element element-hidden leading-relaxed text-white/90 text-sm sm:text-base">
                        {description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section 
        ref={(el) => el && sectionRefs.current.set('investmentBenefits', el)}
        className="py-8 sm:py-12 md:py-16 bg-forest-100"
      >
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="animate-element element-hidden text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{investing.investmentBenefits.sectionTitle}</h2>
            <h3 className="animate-element element-hidden text-lg sm:text-xl md:text-2xl font-bold text-gold-400 mb-3 sm:mb-4">{investing.investmentBenefits.sectionSubtitle}</h3>
            <p className="animate-element element-hidden text-cream-100 text-sm sm:text-base max-w-4xl mx-auto">
              {investing.investmentBenefits.sectionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {investing.investmentBenefits.benefits.map((benefit: any, index: number) => {
              const getCardClass = (index: number, cardType: string) => {
                if (cardType === 'image') return 'card overflow-hidden animate-element element-hidden';
                return index % 2 === 0 ? 'card bg-white animate-element element-hidden' : 'card bg-coffee-600 text-white animate-element element-hidden';
              };
              
              const getIconClass = (index: number) => {
                return index % 2 === 0 ? 'w-8 h-8 bg-coffee-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 animate-element element-hidden' : 'w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 animate-element element-hidden';
              };
              
              const getTitleClass = (index: number) => {
                return index % 2 === 0 ? 'text-sm sm:text-base font-bold leading-tight text-brown-800 animate-element element-hidden' : 'text-sm sm:text-base font-bold leading-tight text-white animate-element element-hidden';
              };
              
              const getDescriptionClass = (index: number) => {
                return index % 2 === 0 ? 'leading-relaxed text-xs sm:text-sm text-gray-600 break-words animate-element element-hidden' : 'leading-relaxed text-xs sm:text-sm text-white/90 break-words animate-element element-hidden';
              };
              
              return (
                <div key={index} className={getCardClass(index, benefit.cardType)} >
                  {benefit.cardType === 'text' ? (
                    <>
                      <div className="flex items-start mb-3">
                        <div className={getIconClass(index)}>
                          {getIcon(benefit.icon)}
                        </div>
                        <h4 className={getTitleClass(index)}>{benefit.title}</h4>
                      </div>
                      <p className={getDescriptionClass(index)}>
                        {benefit.description}
                      </p>
                    </>
                  ) : (
                    <img
                      src={benefit.image}
                      alt={benefit.imageAlt}
                      className="animate-element element-hidden w-full h-full object-cover"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investing;