import React from 'react';
import Hero from '../components/Hero';
import WhyJoinCarousel from '../components/WhyJoinCarousel';
import InvestmentCalculator from '../components/InvestmentCalculator';
import InvestmentPlans from '../components/InvestmentPlans';
import AvailableOpportunities from '../components/AvailableOpportunities';
import HowItWorks from '../components/HowItWorks';
import TestimonialsSection from '../components/TestimonialsSection';
import TransparentReports from '../components/TransparentReports';
import Cta from '../components/Cta';

const Home: React.FC = () => {
  return (
    <>
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
        {/* <InvestmentPlans /> */}
      </section>
      <section id="opportunities">
        <AvailableOpportunities />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      {/* <section id="testimonials">
        <TestimonialsSection />
      </section> */}
      <section id="reports">
        <TransparentReports />
      </section>
      <section id="contact">
        <Cta />
      </section>
    </>
  );
};

export default Home; 