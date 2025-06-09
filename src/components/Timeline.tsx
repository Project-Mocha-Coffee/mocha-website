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
                Tender is the season when young roots delve into Kenyan earth, adapting to rains and refining resilience. Our agronomists ensure each sapling thrives, with organic composts and protective shade canopies.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Growth Stage</h4>
                  <p className="text-cream-100 text-sm">Sapling rooting and leaf development</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Return</h4>
                  <p className="text-cream-100 text-sm">No yield during establishment</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Care Activities</h4>
                  <p className="text-cream-100 text-sm">Irrigation, mulching, shade management</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="ml-8">
              <h3 className="text-xl font-serif mb-3 text-cream-50">Year 3: First Harvest</h3>
              <p className="text-cream-100 mb-6">
                A gentle taste of promise—as 20% of peak yield ripens beneath the sun. Your trees transform into working assets, and your first distributions begin landing in your account, a tangible testament to careful stewardship.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Growth Stage</h4>
                  <p className="text-cream-100 text-sm">First flowering and cherry development</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Return</h4>
                  <p className="text-cream-100 text-sm">~20% of full yield potential</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Investor Benefits</h4>
                  <p className="text-cream-100 text-sm">First dividend distribution</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item fade-in" style={{ transitionDelay: '0.4s' }}>
            <div className="ml-8">
              <h3 className="text-xl font-serif mb-3 text-cream-50">Year 5+: Peak Production</h3>
              <p className="text-cream-100 mb-6">
                With lush canopies and abundant cherries, your grove reaches full strength. Now, maximum returns flow—year after tranquil year, as each harvest is meticulously processed, shipped, and sold to discerning roasters worldwide.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Growth Stage</h4>
                  <p className="text-cream-100 text-sm">Full maturity with maximum yield</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Return</h4>
                  <p className="text-cream-100 text-sm">100% yield potential (12-18% annually)</p>
                </div>
                <div className="bg-coffee-800/50 p-4 border border-coffee-700">
                  <h4 className="text-gold-400 text-sm font-medium mb-2">Sustainability</h4>
                  <p className="text-cream-100 text-sm">Carbon offset credits activate</p>
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