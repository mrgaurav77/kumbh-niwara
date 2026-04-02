import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1558223637-2fb0cbba2c3e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-saffron-900/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-lg">
          Find Your Stay During <span className="text-saffron-400">Kumbh Mela</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mb-12 drop-shadow-md font-medium">
          Connecting Pilgrims with Local Hosts in Nashik for a blessed and comfortable spiritual journey.
        </p>

        {/* Search Bar - Airbnb Style */}
        <div className="bg-white rounded-full p-2 w-full max-w-4xl shadow-2xl flex flex-col md:flex-row items-center border border-gray-100">
          
          <div className="flex-1 flex items-center w-full md:w-auto hover:bg-gray-100 rounded-full py-3 px-6 cursor-pointer transition-colors border-b md:border-b-0 md:border-r border-gray-200">
            <MapPin className="text-saffron-500 mr-3" size={24} />
            <div className="text-left w-full">
              <p className="text-xs font-bold text-gray-800 tracking-wide">LOCATION</p>
              <input 
                type="text" 
                placeholder="Where in Nashik?" 
                className="w-full bg-transparent outline-none text-gray-600 text-sm truncate"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center w-full md:w-auto hover:bg-gray-100 rounded-full py-3 px-6 cursor-pointer transition-colors border-b md:border-b-0 md:border-r border-gray-200">
            <Calendar className="text-saffron-500 mr-3" size={24} />
            <div className="text-left w-full">
              <p className="text-xs font-bold text-gray-800 tracking-wide">DATE</p>
              <input 
                type="text" 
                placeholder="Check in - Check out" 
                className="w-full bg-transparent outline-none text-gray-600 text-sm truncate"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center w-full md:w-auto hover:bg-gray-100 rounded-full py-3 px-6 cursor-pointer transition-colors">
            <Users className="text-saffron-500 mr-3" size={24} />
            <div className="text-left w-full">
              <p className="text-xs font-bold text-gray-800 tracking-wide">GUESTS</p>
              <input 
                type="text" 
                placeholder="Add guests" 
                className="w-full bg-transparent outline-none text-gray-600 text-sm truncate"
              />
            </div>
          </div>

          <div className="w-full md:w-auto mt-2 md:mt-0 px-2 md:px-0">
            <button className="w-full md:w-auto bg-saffron-500 hover:bg-saffron-600 text-white p-4 md:px-8 rounded-full flex items-center justify-center transition-colors shadow-md">
              <Search size={20} className="md:mr-2" />
              <span className="font-bold hidden md:inline">Find Stay</span>
              <span className="font-bold md:hidden ml-2">Search</span>
            </button>
          </div>

        </div>

        {/* Quick Highlights underneath */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white text-sm font-medium drop-shadow-md">
          <div className="flex items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span> 100+ Verified Hosts
          </div>
          <div className="flex items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-saffron-400 mr-2"></span> Budget Friendly
          </div>
          <div className="flex items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span> Near Godavari Ghats
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
