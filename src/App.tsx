import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyJoinCarousel from './components/WhyJoinCarousel';
import InvestmentCalculator from './components/InvestmentCalculator';
import InvestmentPlans from './components/InvestmentPlans';
import AvailableOpportunities from './components/AvailableOpportunities';
import HowItWorks from './components/HowItWorks';
import TestimonialsSection from './components/TestimonialsSection';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Check if element is in viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('appear');
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-cream-50 overflow-hidden">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="why-join">
        <WhyJoinCarousel />
      </section>
      <section id="calculator">
        <InvestmentCalculator />
      </section>
      <section id="plans">
        <InvestmentPlans />
      </section>
      <section id="opportunities">
        <AvailableOpportunities />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <Cta />
      </section>
      <Footer />
    </div>
  );
}

export default App;