import React from 'react';

const partnerLogos = [
  { name: "Rainforest Alliance", logo: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Fair Trade Certified", logo: "https://images.pexels.com/photos/1684822/pexels-photo-1684822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "USDA Organic", logo: "https://images.pexels.com/photos/5473153/pexels-photo-5473153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Local Farmer Cooperatives", logo: "https://images.pexels.com/photos/2219481/pexels-photo-2219481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const Partnerships: React.FC = () => {
  return (
    <section className="section bg-cream-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-coffee-800 mb-6 fade-in">Our Partners</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-8 fade-in"></div>
          <p className="text-coffee-700 fade-in mb-4">
            We work with globally recognized partners such as the Rainforest Alliance, local farming cooperatives, and leading logistics firms to ensure quality and transparency at every step. Our partnerships ensure every bean is traceable, ethically sourced, and meets the highest environmental standards.
          </p>
          <p className="text-coffee-700 fade-in">
            Interested in partnering with us? <a href="/contact" className="text-brown-600 hover:text-brown-800 underline">Contact our partnerships team</a> to explore collaboration opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partnerLogos.map((partner, index) => (
            <div 
              key={partner.name} 
              className="bg-cream-50 p-4 shadow-md flex flex-col items-center justify-center fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-32 w-full overflow-hidden mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <span className="text-sm font-medium text-coffee-700">{partner.name}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-cream-50 p-8 md:p-12 shadow-md fade-in">
          <h3 className="text-2xl font-serif mb-8 text-coffee-800 text-center">Transparent Tracking Technology</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-coffee-100 h-48 rounded-sm flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1260&h=750&q=80"
                  alt="Business partnership meeting in coffee industry"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <h4 className="font-serif text-lg mb-2 text-coffee-800">Satellite Monitoring</h4>
              <p className="text-coffee-600">
                View your coffee plot from space with regular satellite imagery updates, allowing you to track growth patterns and land health.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-coffee-100 h-48 rounded-sm flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1260&h=750&q=80"
                  alt="Coffee industry collaboration and innovation"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <h4 className="font-serif text-lg mb-2 text-coffee-800">IoT Farm Sensors</h4>
              <p className="text-coffee-600">
                Our network of sensors monitors soil moisture, temperature, and nutrient levels, ensuring optimal growing conditions year-round.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-coffee-100 h-48 rounded-sm flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1260&h=750&q=80"
                  alt="Sustainable coffee plantation development"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <h4 className="font-serif text-lg mb-2 text-coffee-800">Blockchain Traceability</h4>
              <p className="text-coffee-600">
                Every batch of coffee is traced from planting to processing using blockchain technology, ensuring complete transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;