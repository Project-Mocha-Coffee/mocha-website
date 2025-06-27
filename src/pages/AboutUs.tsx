import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import contentData from '../data/content.json';
import { ContentData, AboutUsData } from '../types/content';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const typedContentData = contentData as any;
  const aboutUsData = typedContentData.aboutUs;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll for journey timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutUsData.journey.steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [aboutUsData.journey.steps.length]);

  // Auto-scroll for team carousel on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) { // Only auto-scroll on mobile/tablet
        setCurrentTeamSlide((prev) => (prev + 1) % aboutUsData.team.members.length);
      }
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [aboutUsData.team.members.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutUsData.journey.steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutUsData.journey.steps.length) % aboutUsData.journey.steps.length);
  };

  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % aboutUsData.team.members.length);
  };

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + aboutUsData.team.members.length) % aboutUsData.team.members.length);
  };

  const goToTeamSlide = (index: number) => {
    setCurrentTeamSlide(index);
  };

  const getValueCardStyles = (index: number) => {
    if (index % 2 === 0) {
      return 'bg-white';
    } else if (index === 1 || index === 5) {
      return 'bg-brown-800 text-white';
    } else {
      return 'bg-brown-700 text-white';
    }
  };

  const getValueTextStyles = (index: number) => {
    if (index % 2 === 0) {
      return {
        titleColor: index === 0 ? 'text-brown-800' : index === 2 ? 'text-brown-700' : 'text-brown-800',
        descriptionColor: 'text-gray-600',
        iconBg: 'bg-brown-200'
      };
    } else {
      return {
        titleColor: 'text-white',
        descriptionColor: 'text-white/90',
        iconBg: 'bg-white/20'
      };
    }
  };

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('${aboutUsData.hero.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="relative z-10 container-custom px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <div 
                className={`transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 font-bold leading-tight">
                  {aboutUsData.hero.title}<br />
                  <span className="text-brown-400">{aboutUsData.hero.titleHighlight}</span>
                </h1>
                {aboutUsData.hero.descriptions.map((description: string, index: number) => (
                  <p key={index} className={`${
                    index === 0 
                      ? 'text-base sm:text-lg md:text-xl text-cream-100 max-w-3xl leading-relaxed mb-4 sm:mb-6'
                      : 'text-sm sm:text-base md:text-lg text-cream-200 max-w-3xl leading-relaxed mb-4 sm:mb-6'
                  }`}>
                    {description}
                  </p>
                ))}
              </div>

              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {aboutUsData.hero.buttons.map((button: any, index: number) => {
                  const buttonClass = button.type === 'primary' ? 'btn btn-gold' : 'btn btn-secondary';
                  
                  return (
                    <button key={index} className={`${buttonClass} w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation`}>
                      {button.text} <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                  );
                })}
              </div>

              <div 
                className={`transition-all duration-1000 delay-1200 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <p className="text-cream-200 italic text-sm sm:text-base text-center sm:text-left">
                  {aboutUsData.hero.callToAction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-100">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-2 sm:mb-3 font-bold">{aboutUsData.team.sectionTitle}</h2>
            <h3 className="text-base sm:text-lg md:text-xl text-brown-800 mb-4 font-semibold">
              {aboutUsData.team.sectionSubtitle}
            </h3>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {aboutUsData.team.members.map((member: any, index: number) => (
              <div 
                key={index}
                className={`card p-6 text-center transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-2 right-2 w-10 h-10 bg-brown-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {member.initials}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-brown-800 mb-2">{member.name}</h4>
                <p className="text-brown-700 font-medium mb-4 text-base">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <div className="w-8 h-8 bg-brown-700 rounded-full flex items-center justify-center touch-manipulation">
                    <span className="text-white text-sm">in</span>
                  </div>
                  <div className="w-8 h-8 bg-brown-700 rounded-full flex items-center justify-center touch-manipulation">
                    <span className="text-white text-sm">@</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden relative max-w-sm mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out touch-manipulation"
                style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
              >
                {aboutUsData.team.members.map((member: any, index: number) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="card p-5 sm:p-6 text-center bg-white">
                      <div className="relative mb-5">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-56 sm:h-64 object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-3 right-3 w-10 h-10 sm:w-12 sm:h-12 bg-brown-700 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          {member.initials}
                        </div>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-brown-800 mb-2 sm:mb-3">{member.name}</h4>
                      <p className="text-brown-700 font-medium mb-5 sm:mb-6 text-base sm:text-lg">{member.role}</p>
                      <div className="flex justify-center gap-4">
                        <div className="w-10 h-10 bg-brown-700 rounded-full flex items-center justify-center touch-manipulation">
                          <span className="text-white text-sm">in</span>
                        </div>
                        <div className="w-10 h-10 bg-brown-700 rounded-full flex items-center justify-center touch-manipulation">
                          <span className="text-white text-sm">@</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTeamSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={nextTeamSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brown-700 rounded-full p-3 shadow-lg transition-all duration-200 z-10 touch-manipulation"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {aboutUsData.team.members.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => goToTeamSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 touch-manipulation ${
                    index === currentTeamSlide 
                      ? 'bg-brown-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">
                {aboutUsData.team.swipeHint}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-2 sm:mb-3 font-bold">
              {aboutUsData.statistics.sectionTitle}<br />
              <span className="text-brown-800">{aboutUsData.statistics.sectionTitleHighlight}</span>
            </h2>
            <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {aboutUsData.statistics.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                {aboutUsData.statistics.buttons.map((button: any, index: number) => {
                  const buttonClass = button.type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
                  
                  return (
                    <button key={index} className={`${buttonClass} w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation`}>
                      {button.text} <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {aboutUsData.statistics.stats.map((stat: any, index: number) => (
              <div 
                key={index}
                className={`card bg-brown-800 text-white p-3 sm:p-4 md:p-6 text-center transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brown-400 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-cream-100 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Model Section */}
      <section className="py-8 sm:py-12 md:py-16" style={{
        backgroundImage: `linear-gradient(rgba(62, 43, 40, 0.9), rgba(62, 43, 40, 0.9)), url('${aboutUsData.investmentModel.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3 font-bold">{aboutUsData.investmentModel.sectionTitle}</h2>
              <h3 className="text-base sm:text-lg md:text-xl text-brown-400 mb-4 sm:mb-6 font-semibold">
                {aboutUsData.investmentModel.sectionSubtitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {aboutUsData.investmentModel.models.map((model: any, index: number) => {
                const cardClass = index === 0 ? 'card bg-brown-800 text-white' : 'card bg-brown-700 text-white';
                const buttonClass = index === 0 ? 'btn bg-brown-700 text-white hover:bg-brown-800' : 'btn bg-white text-brown-800 hover:bg-cream-50';
                
                return (
                  <div key={index} className={`${cardClass} p-4 sm:p-6`}>
                    <h4 className="text-base sm:text-lg font-bold text-brown-400 mb-3 sm:mb-4">{model.title}</h4>
                <p className="text-cream-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {model.description}
                    </p>
                    <button className={`${buttonClass} w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation`}>
                      {model.buttonText}
                </button>
              </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Demand Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-brown-800">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-block bg-brown-200 text-brown-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    {aboutUsData.coffeeDemand.badge}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl text-brown-800 mb-3 sm:mb-4 font-semibold leading-tight">
                    {aboutUsData.coffeeDemand.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {aboutUsData.coffeeDemand.description}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-700 rounded-full flex items-center justify-center text-white hover:bg-brown-800 transition-colors touch-manipulation">
                      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <span className="text-brown-800 font-medium text-sm sm:text-base">{aboutUsData.coffeeDemand.navigationInfo}</span>
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-700 rounded-full flex items-center justify-center text-white hover:bg-brown-800 transition-colors touch-manipulation">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  <img
                    src={aboutUsData.coffeeDemand.image}
                    alt={aboutUsData.coffeeDemand.imageAlt}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-100">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-800 mb-4 sm:mb-6 font-bold">{aboutUsData.values.sectionTitle}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {aboutUsData.values.valuesList.map((value: any, index: number) => {
              const styles = getValueTextStyles(index);
              return (
              <div 
                key={index}
                  className={`card p-4 sm:p-6 transition-all duration-1000 ${getValueCardStyles(index)} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 ${styles.iconBg}`}>
                    <span className="text-lg sm:text-xl">{value.icon}</span>
                  </div>
                    <h4 className={`text-base sm:text-lg font-bold ${styles.titleColor}`}>
                    {value.title}
                  </h4>
                </div>
                  <p className={`leading-relaxed text-xs sm:text-sm ${styles.descriptionColor}`}>
                  {value.description}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ethical Impact Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-brown-800">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-2 sm:mb-3 font-bold">
                  {aboutUsData.ethicalImpact.sectionTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
                  {aboutUsData.ethicalImpact.sectionDescription}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {aboutUsData.ethicalImpact.impactStats.map((stat: any, index: number) => {
                  const cardClass = stat.cardType === 'brown' ? 'card bg-brown-600 text-white' : 'card bg-white';
                  
                  return (
                    <div key={index} className={`${cardClass} p-4 sm:p-6 text-center`}>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-600 mb-2 sm:mb-3">{stat.number}</div>
                      <h4 className="text-sm sm:text-base font-bold text-brown-800 mb-2 sm:mb-3">{stat.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {stat.description}
                  </p>
                </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-base sm:text-lg md:text-xl text-brown-800 mb-3 sm:mb-4 font-semibold">
                    {aboutUsData.ethicalImpact.communityImpact.title}
                  </h3>
                  {aboutUsData.ethicalImpact.communityImpact.descriptions.map((description: string, index: number) => (
                    <p key={index} className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      {description}
                    </p>
                  ))}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {aboutUsData.ethicalImpact.communityImpact.buttons.map((button: any, index: number) => {
                      const buttonClass = button.type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
                      
                      return (
                        <button key={index} className={`${buttonClass} w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation`}>
                          {button.text} <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                      );
                    })}
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  <img
                    src={aboutUsData.ethicalImpact.communityImpact.image}
                    alt={aboutUsData.ethicalImpact.communityImpact.imageAlt}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl sm:rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brown-700 bg-opacity-90 rounded-full flex items-center justify-center touch-manipulation">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <p className="text-white italic text-xs sm:text-sm">
                      "{aboutUsData.ethicalImpact.communityImpact.videoQuote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-2 sm:mb-3 font-bold">{aboutUsData.journey.sectionTitle}</h2>
            <h3 className="text-base sm:text-lg md:text-xl text-brown-800 mb-4 sm:mb-6 font-semibold">
              {aboutUsData.journey.sectionSubtitle}
            </h3>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <button 
                onClick={prevSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-700 rounded-full flex items-center justify-center text-white hover:bg-brown-800 transition-colors touch-manipulation"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-700 rounded-full flex items-center justify-center text-white hover:bg-brown-800 transition-colors touch-manipulation"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {aboutUsData.journey.steps.map((step: any, index: number) => (
                <div 
                  key={index}
                  className={`card p-4 sm:p-6 transition-all duration-500 ${
                    index === currentSlide ? 'lg:scale-105 shadow-xl' : 'sm:opacity-70'
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-32 sm:h-40 md:h-32 object-cover rounded-xl sm:rounded-2xl mb-3 sm:mb-4"
                  />
                  <div className="text-base sm:text-lg md:text-xl font-bold text-brown-700 mb-1 sm:mb-2">{step.year}</div>
                  <h4 className="text-sm sm:text-base font-bold text-brown-800 mb-2 sm:mb-3">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-100">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src={aboutUsData.culture.image}
                  alt={aboutUsData.culture.imageAlt}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-4 sm:mb-6 font-bold">
                  {aboutUsData.culture.sectionTitle}
                </h2>
                {aboutUsData.culture.descriptions.map((description: string, index: number) => (
                  <p key={index} className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    {description}
                  </p>
                ))}
                <button className="btn btn-primary w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  {aboutUsData.culture.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Coffee Processing Facility */}
      <section className="py-8 sm:py-12 md:py-16 bg-cream-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src={aboutUsData.processingFacility.image}
                  alt={aboutUsData.processingFacility.imageAlt}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-4 sm:mb-6 font-bold">
                  {aboutUsData.processingFacility.sectionTitle}
                </h2>
                {aboutUsData.processingFacility.descriptions.map((description: string, index: number) => (
                  <p key={index} className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    {description}
                </p>
                ))}
                <button className="btn btn-primary w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  {aboutUsData.processingFacility.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 