import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const benefits = [
  {
    title: "12-18% Average Expected Annual Returns",
    subtitle: "See, Touch, Smell, And Taste",
    description: "Your wealth grows with your trees: with 12-18% historical annual returns, this investment truly bears fruit.",
    image: "https://images.pexels.com/photos/4050359/pexels-photo-4050359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "An Investment You Can",
    subtitle: "See, Touch, Smell, And Taste", 
    description: "Unlike traditional investments you often don't understand, this one is simple: plant trees, grow fruit and sell the harvest.",
    image: "https://images.pexels.com/photos/2909083/pexels-photo-2909083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Sustainable & Ethical",
    subtitle: "Investment",
    description: "Every tree planted contributes to environmental restoration while providing fair compensation to local farmers.",
    image: "https://images.pexels.com/photos/6231772/pexels-photo-6231772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const WhyJoin: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section className="section bg-cream-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-forest-700 mb-4 fade-in heading-secondary">Why Join</h2>
          <h3 className="text-4xl font-bold text-gold-500 fade-in heading-primary">Project Mocha?</h3>
        </div>
        
        <div className="card-large p-8 md:p-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h3 className="text-3xl font-bold text-forest-700 mb-4 heading-secondary">
                {benefits[currentSlide].title}
              </h3>
              <h4 className="text-2xl font-bold text-gold-500 mb-6 heading-secondary">
                {benefits[currentSlide].subtitle}
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                {benefits[currentSlide].description}
              </p>
            </div>
            
            <div className="relative fade-in stagger-1">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={benefits[currentSlide].image}
                  alt={benefits[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-forest-600 text-white flex items-center justify-center hover:bg-forest-700 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-gold-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-forest-600 text-white flex items-center justify-center hover:bg-forest-700 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;