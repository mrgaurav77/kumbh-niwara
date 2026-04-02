import React from 'react';
import { Heart, Home, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-saffron-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Experience the True Spirit of Kumbh Mela
            </h2>
            <div className="w-16 h-1 bg-saffron-500 rounded-full mb-6"></div>

            <p className="text-lg text-gray-600">
              Every 12 years, millions of pilgrims gather in Nashik for the sacred Kumbh Mela. Finding a safe, comfortable, and affordable place to stay during this massive gathering has always been a challenge.
            </p>

            <p className="text-lg text-gray-600">
              <span className="font-semibold text-saffron-600">KumbhNivas</span> bridges the gap between pilgrims and local residents. We offer a platform where devotees can find temporary accommodation hosted by verified locals, ensuring a peaceful and connected spiritual journey.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                  <Heart className="text-saffron-500" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Local Hospitality</h3>
                  <p className="mt-1 text-sm text-gray-500">Experience authentic Nashik culture with welcoming hosts.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                  <Home className="text-saffron-500" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Comfortable Stays</h3>
                  <p className="mt-1 text-sm text-gray-500">Clean and hygienic rooms near the sacred Godavari ghats.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-saffron-200 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kumbha_mela_on_ghats_of_the_river_godavari_nashik.jpg/1920px-Kumbha_mela_on_ghats_of_the_river_godavari_nashik.jpg"
              alt="Pilgrims at Kumbh Mela"
              className="relative z-10 rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />

            {/* Trust Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Shield className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">100% Secure</p>
                <p className="text-xs text-gray-500">Verified properties</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
