import React from 'react';
import { Shield, CloudRain, Award } from 'lucide-react';

const RiskMitigation: React.FC = () => {
  return (
    <section className="section bg-cream-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-coffee-800 mb-6 fade-in">Risk Mitigation & Trust</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-8 fade-in"></div>
          <p className="text-coffee-700 fade-in">
            We understand that investing your capital requires trust. That's why we've implemented comprehensive safeguards to protect your investment at every stage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-cream-100 p-8 fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-coffee-600 flex items-center justify-center">
                <Shield className="h-8 w-8 text-cream-50" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-serif text-center mb-4 text-coffee-800">Diversified Locations</h3>
            <p className="text-coffee-600 text-center">
              Plantations in multiple climate zones for stability. We strategically distribute our coffee farms across different regions to minimize risk and ensure consistent returns.
            </p>
          </div>
          
          <div className="bg-cream-100 p-8 fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-coffee-600 flex items-center justify-center">
                <CloudRain className="h-8 w-8 text-cream-50" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-serif text-center mb-4 text-coffee-800">Insurance Coverage</h3>
            <p className="text-coffee-600 text-center">
              Full crop coverage for peace of mind. Every investment is protected against natural disasters, weather events, and other unforeseen circumstances that could affect your returns.
            </p>
          </div>
          
          <div className="bg-cream-100 p-8 fade-in" style={{ transitionDelay: '0.4s' }}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-coffee-600 flex items-center justify-center">
                <Award className="h-8 w-8 text-cream-50" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-serif text-center mb-4 text-coffee-800">Certified Standards</h3>
            <p className="text-coffee-600 text-center">
              USDA Organic, Fair Trade, Rainforest Alliance. Our certifications guarantee ethical cultivation, fair farmer treatment, and complete traceability from seedling to export.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center fade-in">
          <div className="bg-gold-100 p-6 rounded-lg inline-block">
            <h3 className="text-xl font-serif text-coffee-800 mb-2">Join Our Growing Community</h3>
            <p className="text-coffee-600 text-lg font-semibold">Join 1,250+ investors since 2022</p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-coffee-700 p-8 md:p-12 text-cream-50 shadow-md fade-in">
            <h3 className="text-2xl font-serif mb-6 text-center">Transparency and Accountability</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-xl mb-4 text-gold-400">Live Monitoring</h4>
                <p className="text-cream-100 mb-4">
                  Our IoT-powered monitoring system provides real-time updates on your trees' health, soil conditions, and weather patterns. Access your dashboard anytime to see exactly how your investment is growing.
                </p>
                <button className="btn bg-transparent text-cream-50 border border-cream-50 hover:bg-cream-50 hover:text-coffee-800">
                  View Demo Dashboard
                </button>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-4 text-gold-400">Transparent Reporting</h4>
                <ul className="space-y-3 text-cream-100">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-gold-400 mt-2 mr-2"></div>
                    <span>Quarterly Financial Updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-gold-400 mt-2 mr-2"></div>
                    <span>Annual Sustainability Audits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-gold-400 mt-2 mr-2"></div>
                    <span>Harvest Quality Reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-gold-400 mt-2 mr-2"></div>
                    <span>Carbon Offset Documentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-gold-400 mt-2 mr-2"></div>
                    <span>Community Impact Assessments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskMitigation;