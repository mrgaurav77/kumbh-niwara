import React, { useState, useEffect } from 'react';
import { Star, MapPin, ShieldCheck, Heart, SlidersHorizontal, Search, Loader } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Accommodations = () => {
  const [stays, setStays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    const fetchStays = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/accommodations');
        if (!response.ok) {
          throw new Error('Failed to fetch stays');
        }
        const data = await response.json();
        setStays(data);
      } catch (error) {
        console.error('Error fetching stays:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStays();
  }, []);

  const filteredStays = stays.filter(stay => {
    const term = searchTerm.toLowerCase();
    const searchMatch = 
      (stay.title && stay.title.toLowerCase().includes(term)) ||
      (stay.name && stay.name.toLowerCase().includes(term)) ||
      (stay.propertyTitle && stay.propertyTitle.toLowerCase().includes(term)) ||
      (stay.location && stay.location.toLowerCase().includes(term));
      
    const stayRating = stay.rating ? parseFloat(stay.rating) : 5.0;
    const ratingMatch = stayRating >= ratingFilter;

    return searchMatch && ratingMatch;
  });

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header / Search Area */}
      <div className="bg-gradient-to-b from-[#8E9399] to-[#C9C4BF] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="w-full md:w-auto">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
              Explore <span className="text-saffron-400">Stays</span>
            </h1>
            <p className="text-gray-100 mt-3 text-lg drop-shadow-sm">Find a blessed home during your Kumbh Mela journey.</p>
          </div>

          <div className="flex w-full md:w-auto gap-3">
            <div className="relative flex-1 md:w-80">
              <input
                type="text"
                placeholder="Search location..."
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
            </div>
            <div className="flex items-center justify-center bg-white shadow-lg border-0 px-4 py-3 rounded-full transition-colors">
              <SlidersHorizontal size={18} className="text-gray-700" />
              <select 
                className="ml-2 bg-transparent border-none font-medium text-gray-700 focus:ring-0 cursor-pointer outline-none"
                value={ratingFilter}
                onChange={(e) => setRatingFilter(Number(e.target.value))}
              >
                <option value={0}>All Ratings</option>
                <option value={4}>4+ Stars</option>
                <option value={3}>3+ Stars</option>
                <option value={2}>2+ Stars</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* Main Listing Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">

        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600 font-medium">Showing {filteredStays.length} verified stays</p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader className="animate-spin text-saffron-500 mb-4" size={48} />
            <p className="text-gray-500 text-lg font-medium">Loading stays...</p>
          </div>
        ) : filteredStays.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg font-medium">No stays found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStays.map((stay) => (
              <div key={stay._id || stay.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={stay.images && stay.images.length > 0 ? (stay.images[0].startsWith('http') ? stay.images[0] : `http://localhost:5000/${stay.images[0].replace(/\\/g, '/')}`) : 'https://images.unsplash.com/photo-1558223637-2fb0cbba2c3e?w=800&auto=format&fit=crop&q=80'}
                    alt={stay.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {stay.isApproved && (
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700 flex items-center shadow-sm">
                        <ShieldCheck size={14} className="mr-1" /> Verified
                      </div>
                    )}
                  </div>

                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:text-red-500 transition-colors shadow-sm text-gray-500">
                    <Heart size={18} />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1 flex-1 pr-4" title={stay.title}>
                      {stay.title}
                    </h3>
                    <div className="flex items-center gap-1 bg-saffron-50 px-2 py-1 rounded-lg">
                      <Star size={14} className="text-saffron-500 fill-saffron-500" />
                      <span className="text-sm font-bold text-gray-800">{stay.rating || '5.0'}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500 mb-4 text-sm">
                    <MapPin size={14} className="mr-1 flex-shrink-0" />
                    <span className="truncate">{stay.location}</span>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900">₹{stay.price}</span>
                      <span className="text-sm text-gray-500"> / night</span>
                    </div>
                    <button className="bg-saffron-600 hover:bg-saffron-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm shadow-saffron-200">
                      View Details
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white border-2 border-gray-200 rounded-full font-bold text-gray-700 hover:border-saffron-500 hover:text-saffron-600 transition-colors">
            Load More Stays
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Accommodations;
