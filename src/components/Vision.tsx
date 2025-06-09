import React from 'react';
import { Sprout, Globe, Leaf } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section id="our-vision" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-coffee-800 mb-6 fade-in heading-primary">A Vision Rooted in Embu, Flourishing Worldwide</h2>
          <p className="text-gray-600 text-lg leading-relaxed fade-in">
            Founded in 2024, Project Mocha began as a heartfelt initiative in Embu, Kenya—where fertile soil and ancestral coffee traditions converge. From our pilot farm of 2,000 meticulously tended saplings, we saw more than just plants taking root; we saw communities thriving. Today, that modest beginning is blossoming into a global promise: to grow 200 million coffee trees by 2040, reimagining agroforestry with cutting-edge techniques, IoT-powered farm management, and a steadfast commitment to water conservation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-8 text-center fade-in stagger-1">
            <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-6">
              <Sprout className="h-8 w-8 text-forest-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-coffee-800 heading-secondary">Sustainable Growth</h3>
            <p className="text-gray-600">
              Each tree planted strengthens the ecosystem, providing habitats for wildlife and improving soil health for generations to come.
            </p>
          </div>
          
          <div className="card p-8 text-center fade-in stagger-2">
            <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-gold-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-coffee-800 heading-secondary">Global Impact</h3>
            <p className="text-gray-600">
              Our farms span across prime coffee-growing regions, creating a diverse portfolio that's resilient to regional challenges.
            </p>
          </div>
          
          <div className="card p-8 text-center fade-in stagger-3">
            <div className="w-16 h-16 rounded-full bg-coffee-100 flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-8 w-8 text-coffee-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-coffee-800 heading-secondary">Ethical Luxury</h3>
            <p className="text-gray-600">
              We combine premium coffee production with fair compensation practices, ensuring that luxury and ethics go hand in hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;