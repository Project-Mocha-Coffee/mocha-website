import React from 'react';

const Community: React.FC = () => {
  return (
    <section className="section" style={{
      backgroundImage: `linear-gradient(rgba(44, 85, 48, 0.85), rgba(44, 85, 48, 0.85)), url('https://images.pexels.com/photos/6231772/pexels-photo-6231772.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-cream-50 mb-6 fade-in">Building Communities, One Bean at a Time</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-8 fade-in"></div>
          <p className="text-cream-100 fade-in">
            Our investors and farmers share in a vision of prosperity that extends beyond profit margins to embrace human dignity, environmental stewardship, and community empowerment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-forest-600/50 p-8 border border-forest-500 fade-in">
            <h3 className="text-xl font-serif text-gold-400 mb-4">Fair Compensation</h3>
            <p className="text-cream-100 mb-6">
              Farmers receive a 40% premium over local market rates—ensuring families flourish. Their children attend school, our scholarships paving the way for the next generation of agronomists and community leaders.
            </p>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-forest-500 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Kenyan Coffee Farmer Portrait" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <p className="text-cream-50 font-medium">James Mwangi</p>
                <p className="text-cream-200 text-sm">Coffee Farmer, Embu</p>
              </div>
            </div>
          </div>
          
          <div className="bg-forest-600/50 p-8 border border-forest-500 fade-in" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-serif text-gold-400 mb-4">Environmental Stewardship</h3>
            <p className="text-cream-100 mb-6">
              For every 100 trees planted, water conservation systems spring to life—rainwater harvesting, drip irrigation, and watershed restoration that nourish both crops and communities.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-forest-500 h-16 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?auto=format&fit=crop&w=400&h=300&q=80" 
                  alt="Water Conservation in Coffee Farming" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="bg-forest-500 h-16 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=400&h=300&q=80" 
                  alt="Coffee Plantation Biodiversity" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="bg-forest-500 h-16 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&h=300&q=80" 
                  alt="Sustainable Coffee Farming Practices" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
          
          <div className="bg-forest-600/50 p-8 border border-forest-500 fade-in" style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-xl font-serif text-gold-400 mb-4">Social Impact</h3>
            <p className="text-cream-100 mb-6">
              With each harvest, we channel resources into healthcare, education, and local infrastructure—transforming rural landscapes into vibrant, resilient societies.
            </p>
            <div className="flex justify-between text-cream-50">
              <div className="text-center">
                <span className="block text-2xl font-serif text-gold-400">16</span>
                <span className="text-sm text-cream-200">Schools Supported</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-serif text-gold-400">320+</span>
                <span className="text-sm text-cream-200">Healthcare Visits</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-serif text-gold-400">8</span>
                <span className="text-sm text-cream-200">Water Projects</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center fade-in">
          <h3 className="text-2xl font-serif text-cream-50 mb-6">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-forest-500 p-6">
              <span className="block text-3xl font-serif text-gold-400 mb-2">40%</span>
              <span className="text-cream-100">Above Market Pay</span>
            </div>
            <div className="bg-forest-500 p-6">
              <span className="block text-3xl font-serif text-gold-400 mb-2">180+</span>
              <span className="text-cream-100">Families Supported</span>
            </div>
            <div className="bg-forest-500 p-6">
              <span className="block text-3xl font-serif text-gold-400 mb-2">32K</span>
              <span className="text-cream-100">Trees Planted</span>
            </div>
            <div className="bg-forest-500 p-6">
              <span className="block text-3xl font-serif text-gold-400 mb-2">86%</span>
              <span className="text-cream-100">Water Conservation</span>
            </div>
          </div>
          <button className="btn btn-gold">
            Download Impact Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;