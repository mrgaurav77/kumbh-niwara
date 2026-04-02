import React from 'react';
import { ShieldCheck, IndianRupee, Users, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Affordable Stay',
      description: 'Competitive and transparent pricing set directly by the hosts. No hidden fees or massive surge charges.',
      icon: <IndianRupee className="text-white" size={24} />,
      color: 'bg-green-500',
    },
    {
      title: 'Verified Hosts',
      description: 'Every host and property goes through our strict verification process for quality and safety standards.',
      icon: <Users className="text-white" size={24} />,
      color: 'bg-blue-500',
    },
    {
      title: 'Safe and Secure',
      description: 'Your security is our priority. 24/7 support line and secure payment gateways for peace of mind.',
      icon: <ShieldCheck className="text-white" size={24} />,
      color: 'bg-saffron-500',
    },
    {
      title: 'Easy Booking',
      description: 'Instant confirmation with just a few clicks. Manage your bookings effortlessly from our app.',
      icon: <Clock className="text-white" size={24} />,
      color: 'bg-purple-500',
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose KumbhNivas?</h2>
          <div className="w-16 h-1 bg-saffron-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl shadow-inner flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
