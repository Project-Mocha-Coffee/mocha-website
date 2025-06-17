import React from 'react';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="section" style={{
      backgroundImage: `linear-gradient(rgba(39, 27, 12, 0.85), rgba(39, 27, 12, 0.85)), url('https://images.pexels.com/photos/6752664/pexels-photo-6752664.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-cream-50 mb-6 fade-in">The Coffee Growth Timeline</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-8 fade-in"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="timeline-item fade-in">
            <div className="ml-8">
              <h3 className="text-xl font-serif mb-3 text-cream-50">Year 1–2: Sapling Establishment</h3>
              <p className="text-cream-100 mb-6">
                Sapling establishment phase – root development and adaptation. Our expert agronomists ensure optimal growing conditions with proper irrigation, organic fertilization, and protective care during this critical foundation period.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Growth Stage</h4>
                  <p className="text-cream-100 text-sm">Root development and adaptation</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Return</h4>
                  <p className="text-cream-100 text-sm">No yield during establishment</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Care Activities</h4>
                  <p className="text-cream-100 text-sm">Planting, irrigation, organic certification</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="ml-8">
              <h3 className="text-xl font-serif mb-3 text-cream-50">Year 3: First Harvest</h3>
              <p className="text-cream-100 mb-6">
                First harvest – expect 20% of target yield. Your coffee trees begin producing their first commercial harvest, marking the start of your investment returns with direct deposits to your account.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Growth Stage</h4>
                  <p className="text-cream-100 text-sm">First commercial harvest begins</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Return</h4>
                  <p className="text-cream-100 text-sm">20% of target yield</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Investor Benefits</h4>
                  <p className="text-cream-100 text-sm">Annual payouts begin</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item fade-in" style={{ transitionDelay: '0.4s' }}>
            <div className="ml-8">
              <h3 className="text-xl font-serif mb-3 text-cream-50">Year 5+: Peak Production</h3>
              <p className="text-cream-100 mb-6">
                Peak production – full yield capacity and maximum returns. Your coffee trees reach maturity, delivering consistent 12-18% annual returns with options to reinvest for compounding growth.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Growth Stage</h4>
                  <p className="text-cream-100 text-sm">Full maturity and peak production</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Return</h4>
                  <p className="text-cream-100 text-sm">Full yield capacity (12-18% annually)</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Sustainability</h4>
                  <p className="text-cream-100 text-sm">Maximum environmental impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;