import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll for journey timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % journeySteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for team carousel on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) { // Only auto-scroll on mobile/tablet
        setCurrentTeamSlide((prev) => (prev + 1) % teamMembers.length);
      }
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      name: "Samuel Mwangi",
      role: "Head Grower",
      initials: "SM",
      image: "https://images.pexels.com/photos/1438681/pexels-photo-1438681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
    {
      name: "Grace Wanjiku",
      role: "Coffee Quality Manager", 
      initials: "GW",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
    {
      name: "David Kinyua",
      role: "Co-Founder",
      initials: "DK", 
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    }
  ];

  const statistics = [
    { number: "2024", label: "Founded" },
    { number: "8", label: "Dedicated Coffee Experts" },
    { number: "1,250+", label: "Investors since 2022" },
    { number: "2,000", label: "Coffee trees (pilot)" },
    { number: "200M", label: "Trees by 2040" }
  ];

  const values = [
    {
      title: "Sustainability",
      description: "We are dedicated to creating a sustainable future, focusing on the well-being and satisfaction of our farmers and stakeholders alike. Our model promotes environmental health, setting a foundation for future generations.",
      icon: "🌱"
    },
    {
      title: "Authenticity", 
      description: "We honor our unique story with a sustainable coffee investment model, founded on transparency and trust. Authenticity in every action is our guiding principle, helping us build lasting, genuine connections with our stakeholders.",
      icon: "🎯"
    },
    {
      title: "Community",
      description: "Our investment approach empowers local communities, financial freedom, and independence, especially in challenging times. We prioritize community development at every level, enabling our stakeholders to make informed, confident decisions about their future.",
      icon: "🤝"
    },
    {
      title: "Partnership",
      description: "Together with our investors, we pursue a common goal: advancing sustainable coffee agriculture. Our vision relies on teamwork and collaboration, and we proudly walk this path alongside our community of stakeholders.",
      icon: "🔗"
    },
    {
      title: "Growth",
      description: "Just as we nurture our trees to ensure returns, we care deeply for the communities and environments where we operate. Through this commitment, we create lasting, positive impacts that support both nature and society.",
      icon: "📈"
    },
    {
      title: "Transparency",
      description: "Transparency and accountability are at the core of our business. We uphold the highest ethical standards, take responsibility for our actions, and provide clear, accurate information to foster trust and clarity in every partnership.",
      icon: "🔍"
    }
  ];

  const journeySteps = [
    {
      year: "2024",
      title: "Project Mocha Founded",
      description: "Founded with a vision to connect investors with coffee while supporting ethical, sustainable farming. Started with a small pilot in Embu, Kenya.",
      image: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      year: "2024 - 2025", 
      title: "Pilot Farm Success",
      description: "Our journey begins with bringing 2000 coffee trees from our pilot farm in Embu. Establishing sustainable farming practices and community partnerships.",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      year: "2040 Vision",
      title: "Global Expansion", 
      description: "Plan to increase to 200 million coffee trees by 2040, introduce innovative agroforestry techniques, and partner with investors worldwide.",
      image: "https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % journeySteps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
  };

  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToTeamSlide = (index: number) => {
    setCurrentTeamSlide(index);
  };

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80')`,
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
                  About Project<br />
                  <span className="text-brown-400">Mocha</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-cream-100 max-w-3xl leading-relaxed mb-4 sm:mb-6">
                  Project Mocha was founded in 2024 with a vision to connect investors with the world's most cherished crop—coffee—while supporting ethical, sustainable farming. What began as a small pilot in Embu, Kenya is growing into a global initiative that empowers communities and delivers real returns.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-cream-200 max-w-3xl leading-relaxed mb-4 sm:mb-6">
                  Our journey begins with bringing 2000 coffee trees from our pilot farm in Embu. After the first year, we plan to increase the number of coffee trees to 200 million by 2040, introduce innovative agroforestry techniques, and partner with investors worldwide. Our mission is to make coffee farming accessible, profitable, and sustainable—benefiting both our investors and the communities who grow the beans.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-cream-200 max-w-3xl leading-relaxed mb-6 sm:mb-8">
                  We pay our farmers above market rates, invest in research around the monetisation of biodiversity data, IoT sensors for farm management and invest in water conservation projects to ensure long-term environmental health.
                </p>
              </div>

              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <button className="btn btn-gold w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  Free strategy session <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="btn btn-secondary w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  Why coffee? <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div 
                className={`transition-all duration-1000 delay-1200 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <p className="text-cream-200 italic text-sm sm:text-base text-center sm:text-left">
                  Get all the info you need for your first successful coffee investment
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
            <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-2 sm:mb-3 font-bold">Who We Are?</h2>
            <h3 className="text-base sm:text-lg md:text-xl text-brown-800 mb-4 font-semibold">
              Meet The Team Behind Sustainable Growth
            </h3>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
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
                {teamMembers.map((member, index) => (
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
              {teamMembers.map((_, index) => (
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
                Swipe left or right to meet the team
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
              Why Invest In<br />
              <span className="text-brown-800">Coffee?</span>
            </h2>
            <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                For just $100 per tree, you can be part of a thriving, 
                environmentally friendly venture that not only generates 
                steady passive income but also contributes positively to 
                our ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="btn btn-primary w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  Invest now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="btn btn-secondary w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  Schedule a call <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {statistics.map((stat, index) => (
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
        backgroundImage: `linear-gradient(rgba(62, 43, 40, 0.9), rgba(62, 43, 40, 0.9)), url('https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3 font-bold">What We Offer</h2>
              <h3 className="text-base sm:text-lg md:text-xl text-brown-400 mb-4 sm:mb-6 font-semibold">
                A Unique Investment Model!
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="card bg-brown-800 text-white p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-brown-400 mb-3 sm:mb-4">Long-Term Returns</h4>
                <p className="text-cream-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Coffee plantations provide over 30 years of stability and 
                  yield. Our investment strategy focuses on sustainable 
                  agricultural practices that ensure consistent production 
                  and profitability for our investors over the long haul.
                </p>
                <button className="btn bg-brown-700 text-white hover:bg-brown-800 w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  Register now
                </button>
              </div>

              <div className="card bg-brown-700 text-white p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-brown-400 mb-3 sm:mb-4">Investor Priority</h4>
                <p className="text-cream-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Profits are prioritized to first cover the expenses of 
                  investors, thereby ensuring the security of your 
                  investment. We believe in creating a transparent and 
                  trustworthy relationship with our investors, where your 
                  financial well-being is our primary concern.
                </p>
                <button className="btn bg-white text-brown-800 hover:bg-cream-50 w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  My account
                </button>
              </div>
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
                    Continuous growth
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl text-brown-800 mb-3 sm:mb-4 font-semibold leading-tight">
                    Historically, Coffee Has Always Been In High Demand And Short Supply
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    With coffee demand growing yearly and a stable supply, the market price of 
                    coffee is very consistent, making it an ideal long-term investment opportunity.
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-700 rounded-full flex items-center justify-center text-white hover:bg-brown-800 transition-colors touch-manipulation">
                      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <span className="text-brown-800 font-medium text-sm sm:text-base">1 / 6</span>
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-700 rounded-full flex items-center justify-center text-white hover:bg-brown-800 transition-colors touch-manipulation">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&h=400&q=80"
                    alt="Coffee plantation sustainability practices"
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
            <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-800 mb-4 sm:mb-6 font-bold">What Drives Us?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`card p-4 sm:p-6 transition-all duration-1000 ${
                  index % 2 === 0 ? 'bg-white' : 
                  index === 1 || index === 5 ? 'bg-brown-800 text-white' : 
                  'bg-brown-700 text-white'
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 ${
                    index % 2 === 0 ? 'bg-brown-200' : 'bg-white/20'
                  }`}>
                    <span className="text-lg sm:text-xl">{value.icon}</span>
                  </div>
                  <h4 className={`text-base sm:text-lg font-bold ${
                    index % 2 === 0 ? 
                    (index === 0 ? 'text-brown-800' : index === 2 ? 'text-brown-700' : 'text-brown-800') : 
                    'text-white'
                  }`}>
                    {value.title}
                  </h4>
                </div>
                <p className={`leading-relaxed text-xs sm:text-sm ${
                  index % 2 === 0 ? 'text-gray-600' : 'text-white/90'
                }`}>
                  {value.description}
                </p>
              </div>
            ))}
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
                  Your Investment Grows Communities
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
                  Every coffee tree you invest in creates positive impact beyond financial returns. 
                  See how your investment supports farmers, communities, and the environment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="card bg-white p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-600 mb-2 sm:mb-3">40%</div>
                  <h4 className="text-sm sm:text-base font-bold text-brown-800 mb-2 sm:mb-3">Premium Over Market</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Premium over local coffee prices paid to farmers, ensuring fair compensation and sustainable livelihoods.
                  </p>
                </div>
                
                <div className="card bg-brown-600 text-white p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">100+</div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">School Scholarships</h4>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                    School scholarships for growers' children, investing in education and future opportunities.
                  </p>
                </div>
                
                <div className="card bg-white p-4 sm:p-6 text-center sm:col-span-2 md:col-span-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-600 mb-2 sm:mb-3">5+</div>
                  <h4 className="text-sm sm:text-base font-bold text-brown-800 mb-2 sm:mb-3">Water Systems</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Water conservation systems installed per 100 trees, supporting sustainable farming practices.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-base sm:text-lg md:text-xl text-brown-800 mb-3 sm:mb-4 font-semibold">
                    Community Impact Beyond Coffee
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    Our investment model creates lasting positive change in farming communities. 
                    We believe that sustainable returns come from sustainable practices that benefit everyone.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    By investing in coffee plantations, you're not only securing your financial future 
                    but also contributing to environmental conservation and community development.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="btn btn-primary w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                      Invest now <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button className="btn btn-secondary w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1442544213729-6a15f1611937?auto=format&fit=crop&w=600&h=400&q=80"
                    alt="Coffee farming community impact"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl sm:rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brown-700 bg-opacity-90 rounded-full flex items-center justify-center touch-manipulation">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <p className="text-white italic text-xs sm:text-sm">
                      "Supporting communities through sustainable coffee farming"
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
            <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-2 sm:mb-3 font-bold">Explore</h2>
            <h3 className="text-base sm:text-lg md:text-xl text-brown-800 mb-4 sm:mb-6 font-semibold">
              The Project Mocha Journey
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
              {journeySteps.map((step, index) => (
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
                  src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Coffee culture"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-4 sm:mb-6 font-bold">
                  Culture And Opportunity
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  At Project Mocha, we foster a company culture that balances business success with 
                  an eco-friendly mindset. Our team is dedicated to advancing both our business and the 
                  communities we serve. Employees have the chance to engage in events, showcase their 
                  work, and make a meaningful impact in society.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  Our mission is to make the rich tradition of coffee cultivation accessible to everyone, 
                  catering to both small and mid-sized investors. We offer an innovative approach to 
                  agro-investing that emphasizes sustainability and community involvement.
                </p>
                <button className="btn btn-primary w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  Invest now <ArrowRight className="ml-2 h-4 w-4" />
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
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Modern coffee processing facility"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-brown-700 mb-4 sm:mb-6 font-bold">
                  Modern Coffee Processing Facility
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  Our state-of-the-art coffee processing facility ensures that every coffee bean is treated with the utmost care and precision.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  We use the latest technology and traditional methods to produce high-quality coffee that meets the highest standards.
                </p>
                <button className="btn btn-primary w-full sm:w-auto text-sm sm:text-base py-3 px-6 touch-manipulation">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
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