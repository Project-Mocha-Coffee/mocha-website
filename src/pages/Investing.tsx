import React, { useEffect, useRef } from 'react';
import { ArrowRight, Camera, Leaf, Gift, TrendingUp } from 'lucide-react';
import InvestmentCalculator from '../components/InvestmentCalculator';
import ReferralProgram from '../components/ReferralProgram';
import Timeline from '../components/Timeline';
import { useContent } from '../contexts/ContentContext';

const Investing: React.FC = () => {
  const { content } = useContent();
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Early return if content is not available (shouldn't happen due to loading screen)
  if (!content) {
    return null;
  }
  
  const investing = content.investing;

  const handleCtaClick = () => {
    window.open('https://portal-rho-lemon.vercel.app/', '_blank', 'noopener,noreferrer');
  };

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
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${investing.hero.backgroundImage}')` }}
          ></div>
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
                    onClick={handleCtaClick}
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
            {investing.globalInvestment.buttons.map((button: any, index: number) => {
              const handleButtonClick = () => {
                if (button.text.toLowerCase().includes('schedule')) {
                  window.open('https://calendly.com/mohamed-projectmocha/30min', '_blank', 'noopener,noreferrer');
                } else {
                  handleCtaClick();
                }
              };
              
              return (
              <button 
                key={index} 
                  onClick={handleButtonClick}
                className={`animate-element element-hidden ${button.type === 'primary' ? 'btn bg-brown-700 text-white hover:bg-brown-800' : 'btn bg-brown-800 text-white hover:bg-brown-900'} w-full sm:w-auto px-6 py-3 text-sm sm:text-base rounded-full touch-manipulation`}
              >
                {button.text} <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              );
            })}
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
            <button onClick={handleCtaClick} className="animate-element element-hidden btn bg-brown-600 text-white hover:bg-brown-700 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base touch-manipulation">
              {investing.howItWorks.ctaButton.text} <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Investment Calculator */}
      <section ref={(el) => el && sectionRefs.current.set('investmentCalculator', el)}>
        <InvestmentCalculator />
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

          <div className="relative">
            <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide">
              <div className="flex gap-4 px-4 min-w-max">
                {investing.investmentBenefits.benefits.map((benefit: any, index: number) => {
              const getCardClass = (index: number, cardType: string) => {
                  if (cardType === 'image') return 'card overflow-hidden animate-element element-hidden flex-shrink-0';
                  return index % 2 === 0 ? 'card bg-white animate-element element-hidden flex-shrink-0' : 'card bg-coffee-600 text-white animate-element element-hidden flex-shrink-0';
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
                  <div key={index} className={`${getCardClass(index, benefit.cardType)} min-w-[280px] max-w-[320px]`}>
                  {benefit.cardType === 'text' ? (
                      <div className="p-4 sm:p-5 h-full flex flex-col">
                      <div className="flex items-start mb-3">
                        <div className={getIconClass(index)}>
                          {getIcon(benefit.icon)}
                        </div>
                        <h4 className={getTitleClass(index)}>{benefit.title}</h4>
                      </div>
                      <p className={getDescriptionClass(index)}>
                        {benefit.description}
                      </p>
                    </div>
                  ) : (
                      <div className="relative h-48">
                    <img
                      src={benefit.image}
                      alt={benefit.imageAlt}
                      className="animate-element element-hidden w-full h-full object-cover"
                    />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                          <h4 className="font-bold text-sm">{benefit.title}</h4>
                        </div>
                      </div>
                  )}
                </div>
              );
            })}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {investing.investmentBenefits.benefits.map((_, index: number) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/30 transition-all duration-300 cursor-pointer hover:bg-white/50"
                  title={`View card ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Scroll Hint */}
            <div className="text-center mt-3">
              <p className="text-cream-200 text-xs animate-element element-hidden">
                ← Swipe to explore all benefits →
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investing;