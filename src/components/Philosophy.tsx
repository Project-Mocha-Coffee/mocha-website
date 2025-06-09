import React from 'react';
import { Coins, Leaf, BarChart4 } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="section bg-coffee-800 text-cream-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-cream-50 mb-6 fade-in">Our Philosophy: Ethical Luxury</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-8 fade-in"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center">
                <Coins className="h-8 w-8 text-coffee-800" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-serif text-center mb-4">Tangible Assets & Passive Income</h3>
            <p className="text-cream-100 text-center">
              Each coffee tree represents a real-world, land-backed asset—unlike volatile paper investments, these living trees yield harvests that translate directly into returns. Beginning in Year 3, you'll see annual payouts straight into your account, with options to reinvest for compounding growth.
            </p>
          </div>
          
          <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-forest-500 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-cream-50" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-serif text-center mb-4">A Greener Future</h3>
            <p className="text-cream-100 text-center">
              We pay our farmers above-market rates—on average 40% higher than local coffee prices—ensuring that prosperity flows back to the people who nurture these lands. By integrating biodiversity data research and smart water-conservation systems, we safeguard the delicate ecosystems that sustain our trees.
            </p>
          </div>
          
          <div className="fade-in" style={{ transitionDelay: '0.4s' }}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-cream-50 flex items-center justify-center">
                <BarChart4 className="h-8 w-8 text-coffee-800" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-serif text-center mb-4">Innovation at Every Turn</h3>
            <p className="text-cream-100 text-center">
              From satellite-enabled geotagging to track the wellbeing of your plot, to organic certifications that guarantee ethical sourcing, our commitment is unwavering. Soon, IoT sensors will deliver live yield metrics—cherry prices, harvest volumes, and moisture levels—straight to your dashboard.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute left-0 w-full overflow-hidden" style={{ height: '120px', transform: 'translateY(100%)' }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0,50 C150,150 350,0 500,50 L500,150 L0,150 Z" style={{ stroke: 'none', fill: '#F5F0E5' }}></path>
        </svg>
      </div>
    </section>
  );
};

export default Philosophy;