import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What if drought affects my trees?",
    answer: "Our diversified planting and advanced irrigation ensure resilience. Plus, comprehensive crop insurance safeguards your returns against weather events, pests, and other natural risks."
  },
  {
    question: "How are local farmers compensated?",
    answer: "We partner directly with cooperatives, guaranteeing a 40% premium over local market rates, plus bonuses for exceptional harvest quality. This ensures sustainable livelihoods for farming families."
  },
  {
    question: "How do I track my investment?",
    answer: "Log into our serene dashboard to view live yield metrics, satellite imagery of your plot, quarterly harvest reports, and environmental impact summaries. You'll have complete visibility into your investment's performance."
  },
  {
    question: "When do I start receiving returns?",
    answer: "Your first returns begin in Year 3, when trees reach about 20% of their full production capacity. By Year 5, trees achieve maximum productivity and yield their full potential returns of 12-18% annually."
  },
  {
    question: "Can I visit my coffee trees?",
    answer: "Absolutely! Depending on your investment package, farm visits are either included or can be arranged for an additional fee. Experience firsthand the beauty of your coffee grove and meet the farmers who tend your investment."
  },
  {
    question: "What happens at the end of the investment term?",
    answer: "You have several options: renew your investment for another term, sell your trees to another investor through our marketplace, or convert to a profit-sharing model where you continue to earn without active management responsibilities."
  }
];

const Faq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };
  
  return (
    <section id="faq" className="section bg-cream-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-coffee-800 mb-6 fade-in">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-8 fade-in"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-cream-200 pb-4 fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button 
                className="flex justify-between items-center w-full text-left py-3"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-serif text-coffee-800">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-coffee-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-coffee-600" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="text-coffee-600 py-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center fade-in">
          <p className="text-coffee-700 mb-6">
            Still have questions? Our investment specialists are ready to help.
          </p>
          <button className="btn btn-primary">
            Contact an Advisor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;