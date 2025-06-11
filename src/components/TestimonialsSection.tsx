import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    title: "Coffee Investment Is Something That Will Be The...",
    name: "Our Gen 1 Investors",
    location: "Nairobi, Kenya",
    thumbnail: "https://images.pexels.com/photos/1438681/pexels-photo-1438681.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    quote: "Coffee investment will be great for other people to invest and help develop Kenya's agricultural future."
  },
  {
    id: 2,
    title: "It Is Possible To Invest Not Only...",
    name: "Our Gen 1 Investors", 
    location: "Embu County, Kenya",
    thumbnail: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    quote: "I'm excited about supporting one of Kenya's most promising agricultural ventures because it's not only profitable."
  },
  {
    id: 3,
    title: "I See This As The Future, Because...",
    name: "Our Gen 1 Investors",
    location: "Nyeri County, Kenya", 
    thumbnail: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    quote: "Hello, I'm Sarah Wanjiku and I see this as the future of sustainable coffee farming in Kenya."
  },
  {
    id: 4,
    title: "If You Want To Think Outside The...",
    name: "Our Gen 1 Investors",
    location: "Mombasa, Kenya",
    thumbnail: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    quote: "If you want to be part of Kenya's agricultural revolution, this is your opportunity."
  }
];

const TestimonialsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section bg-forest-600">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="heading-primary text-white mb-2">
              Don't Take Our Word For It -
            </h2>
            <h3 className="heading-secondary text-coffee-300 mb-8">
              Here's What Our Investors Say
            </h3>
            <div className="flex justify-end">
              <button className="btn bg-forest-700 text-white hover:bg-forest-800 border-forest-700">
                View more <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`card bg-white hover:shadow-xl transition-all duration-1000 overflow-hidden ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Video Thumbnail */}
                <div className="relative">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-800 ml-1" />
                    </div>
                  </div>
                  {/* Quote overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                    <p className="text-white text-sm italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="text-coffee-600 font-bold text-sm mb-2 line-clamp-2">
                    {testimonial.title}
                  </h4>
                  <div className="space-y-1">
                    <p className="text-gray-700 font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section - Meet The People */}
          <div 
            className={`mt-16 text-center transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="card-large bg-white p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/2889685/pexels-photo-2889685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Meet the team"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-coffee-600 bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs italic">
                      "Given time and care, that small coffee tree becomes something much bigger."
                    </p>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl text-coffee-600 mb-1 font-bold">
                    Meet The People
                  </h3>
                  <h4 className="text-lg text-forest-600 mb-4 font-semibold">
                    Helping Your Coffee Trees Reach Their Full Potential
                  </h4>
                  <p className="text-gray-700 mb-4 text-sm">
                    Get to know who's taking care of your coffee trees from seed to harvest.
                  </p>
                  <button className="btn btn-primary">
                    More about us <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 