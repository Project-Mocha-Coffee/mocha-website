import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
    { number: "15", label: "Years of experience" },
    { number: "8", label: "Dedicated Coffee Experts" },
    { number: "1500+", label: "Satisfied Investors" },
    { number: "25000+", label: "Coffee trees managed" },
    { number: "30+", label: "Years of Projected Returns" }
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
      year: "2018",
      title: "The first trees",
      description: "In a country with a rich coffee tradition, Project Mocha founders, backed by family expertise in coffee farming, set out to establish their first plantation.",
      image: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      year: "2019 - 2021", 
      title: "The Business Grew",
      description: "Our coffee investment model gained traction as we expanded our plantations and refined our sustainable farming practices across multiple regions in Kenya.",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      year: "2022",
      title: "Project Mocha was born", 
      description: "We became ready to share our concept with the world. Our love for coffee farming was no longer something that we could keep to ourselves.",
      image: "https://images.pexels.com/photos/1695909/pexels-photo-1695909.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % journeySteps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
  };

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="min-h-screen gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="relative z-10 container-custom h-screen flex items-center">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <div 
                className={`transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-bold leading-tight">
                  About Project<br />
                  <span className="text-gold-400">Mocha</span>
                </h1>
                <p className="text-lg md:text-xl text-cream-100 max-w-3xl leading-relaxed mb-6">
                  Project Mocha is the world-first online coffee investment platform that allows 
                  you to invest in fully managed coffee plantations.
                </p>
              </div>

              <div 
                className={`flex flex-col sm:flex-row gap-3 mb-8 transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <button className="btn btn-gold">
                  Free strategy session <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="btn btn-secondary">
                  Why coffee? <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div 
                className={`transition-all duration-1000 delay-1200 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <p className="text-cream-200 italic text-base">
                  Get all the info you need for your first successful coffee investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 md:py-10 bg-cream-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-forest-600 mb-2 font-bold">Who We Are?</h2>
            <h3 className="text-lg md:text-xl text-coffee-600 mb-4 font-semibold">
              Meet The Team Behind Sustainable Growth
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`card p-4 text-center transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {member.initials}
                  </div>
                </div>
                <h4 className="text-base font-bold text-coffee-600 mb-1">{member.name}</h4>
                <p className="text-forest-600 font-medium mb-2 text-sm">{member.role}</p>
                <div className="flex justify-center gap-2">
                  <div className="w-6 h-6 bg-coffee-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">in</span>
                  </div>
                  <div className="w-6 h-6 bg-coffee-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">@</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8 md:py-10 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-forest-600 mb-2 font-bold">
              Why Invest In<br />
              <span className="text-coffee-600">Coffee?</span>
            </h2>
            <div className="max-w-3xl mx-auto mb-4">
              <p className="text-gray-600 text-sm mb-3">
                For just €200 per tree, you can be part of a thriving, 
                environmentally friendly venture that not only generates 
                steady passive income but also contributes positively to 
                our ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button className="btn btn-primary">
                  Invest now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="btn btn-secondary">
                  Schedule a call <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {statistics.map((stat, index) => (
              <div 
                key={index}
                className={`card bg-coffee-600 text-white p-3 text-center transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-xl md:text-2xl font-bold text-gold-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-cream-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Model Section */}
      <section className="py-8 md:py-10" style={{
        backgroundImage: `linear-gradient(rgba(44, 85, 48, 0.9), rgba(44, 85, 48, 0.9)), url('https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl text-white mb-2 font-bold">What We Offer</h2>
              <h3 className="text-lg md:text-xl text-gold-400 mb-4 font-semibold">
                A Unique Investment Model!
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="card bg-forest-600 text-white p-4">
                <h4 className="text-lg font-bold text-gold-400 mb-3">Long-Term Returns</h4>
                <p className="text-cream-100 mb-4 leading-relaxed text-sm">
                  Coffee plantations provide over 30 years of stability and 
                  yield. Our investment strategy focuses on sustainable 
                  agricultural practices that ensure consistent production 
                  and profitability for our investors over the long haul.
                </p>
                <button className="btn bg-coffee-600 text-white hover:bg-coffee-700">
                  Register now
                </button>
              </div>

              <div className="card bg-coffee-600 text-white p-4">
                <h4 className="text-lg font-bold text-gold-400 mb-3">Investor Priority</h4>
                <p className="text-cream-100 mb-4 leading-relaxed text-sm">
                  Profits are prioritized to first cover the expenses of 
                  investors, thereby ensuring the security of your 
                  investment. We believe in creating a transparent and 
                  trustworthy relationship with our investors, where your 
                  financial well-being is our primary concern.
                </p>
                <button className="btn bg-white text-coffee-600 hover:bg-cream-50">
                  My account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Demand Section */}
      <section className="py-8 md:py-10 bg-forest-600">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 md:p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="inline-block bg-forest-100 text-forest-600 px-2 py-1 rounded-full text-xs font-medium mb-3">
                    Continuous growth
                  </div>
                  <h3 className="text-lg md:text-xl text-coffee-600 mb-3 font-semibold">
                    Historically, Coffee Has Always Been In High Demand And Short Supply
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    With coffee demand growing yearly and a stable supply, the market price of 
                    coffee is very consistent, making it an ideal long-term investment opportunity.
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors">
                      <ChevronLeft className="w-3 h-3" />
                    </button>
                    <span className="text-coffee-600 font-medium text-sm">1 / 6</span>
                    <button className="w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors">
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Coffee beans"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 md:py-10 bg-cream-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-coffee-600 mb-4 font-bold">What Drives Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`card p-4 transition-all duration-1000 ${
                  index % 2 === 0 ? 'bg-white' : 
                  index === 1 || index === 5 ? 'bg-forest-600 text-white' : 
                  'bg-coffee-600 text-white'
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                    index % 2 === 0 ? 'bg-coffee-100' : 'bg-white/20'
                  }`}>
                    <span className="text-lg">{value.icon}</span>
                  </div>
                  <h4 className={`text-base font-bold ${
                    index % 2 === 0 ? 
                    (index === 0 ? 'text-coffee-600' : index === 2 ? 'text-forest-600' : 'text-coffee-600') : 
                    'text-white'
                  }`}>
                    {value.title}
                  </h4>
                </div>
                <p className={`leading-relaxed text-xs ${
                  index % 2 === 0 ? 'text-gray-600' : 'text-white/90'
                }`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-8 md:py-10 bg-forest-600">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="card-large p-4 md:p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl text-forest-600 mb-2 font-bold">
                    Impact And Benefits Of
                  </h2>
                  <h3 className="text-lg md:text-xl text-coffee-600 mb-3 font-semibold">
                    Coffee Farming
                  </h3>
                  <h4 className="text-base font-bold text-gray-700 mb-3">
                    How We Contribute to Nature and Community:
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                    Coffee farming offers a wide range of environmental and community benefits that 
                    make it a powerful choice for sustainable investment.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    By investing in coffee plantations, you are not only securing your financial future 
                    but also contributing positively to the planet and local communities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="btn btn-primary">
                      Invest now <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button className="btn btn-secondary">
                      Explore plantation <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Coffee farming impact"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="w-12 h-12 bg-coffee-600 bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white italic text-sm">
                      "because this is the first mutual"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-8 md:py-10 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-forest-600 mb-2 font-bold">Explore</h2>
            <h3 className="text-lg md:text-xl text-coffee-600 mb-4 font-semibold">
              The Project Mocha Journey
            </h3>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={prevSlide}
                className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center text-white hover:bg-forest-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center text-white hover:bg-forest-700 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {journeySteps.map((step, index) => (
                <div 
                  key={index}
                  className={`card p-4 transition-all duration-500 ${
                    index === currentSlide ? 'scale-105 shadow-xl' : 'opacity-70'
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-32 object-cover rounded-xl mb-3"
                  />
                  <div className="text-xl font-bold text-forest-600 mb-1">{step.year}</div>
                  <h4 className="text-base font-bold text-coffee-600 mb-2">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-8 md:py-10 bg-cream-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Coffee culture"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-forest-600 mb-4 font-bold">
                  Culture And Opportunity
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                  At Project Mocha, we foster a company culture that balances business success with 
                  an eco-friendly mindset. Our team is dedicated to advancing both our business and the 
                  communities we serve. Employees have the chance to engage in events, showcase their 
                  work, and make a meaningful impact in society.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  Our mission is to make the rich tradition of coffee cultivation accessible to everyone, 
                  catering to both small and mid-sized investors. We offer an innovative approach to 
                  agro-investing that emphasizes sustainability and community involvement.
                </p>
                <button className="btn btn-primary">
                  Invest now <ArrowRight className="ml-2 h-4 w-4" />
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