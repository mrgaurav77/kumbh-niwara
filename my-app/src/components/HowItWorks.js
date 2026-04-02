import React from 'react';
import { Search, Map, CheckCircle, Navigation } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Search Accommodation',
      description: 'Enter your preferred dates, location near the ghats, and number of guests to find the perfect stay.',
      icon: <Search className="text-saffron-500" size={32} />,
    },
    {
      id: 2,
      title: 'Choose a Host',
      description: 'Browse through verified local listings. Compare prices, amenities, and read reviews from previous pilgrims.',
      icon: <Map className="text-saffron-500" size={32} />,
    },
    {
      id: 3,
      title: 'Book Your Stay',
      description: 'Securely book your accommodation. Receive instant confirmation and directions to your local host.',
      icon: <CheckCircle className="text-saffron-500" size={32} />,
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-saffron-600 uppercase mb-2">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">How KumbhNivas Works</h3>
          <p className="mt-4 text-lg text-gray-500">
            Your sacred journey deserves a peaceful stay. We've made it simple to find and book your accommodation in just three easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              
              <div className="w-32 h-32 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center mb-8 relative transition-transform hover:-translate-y-2 duration-300">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-saffron-500 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                  {step.id}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-500 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-saffron-600 hover:bg-saffron-700 transition-colors">
            <Navigation className="mr-2" size={20} />
            Explore Stays Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
