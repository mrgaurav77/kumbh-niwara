import React from 'react';
import image from '../assets/1.jpg';
import { Home, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Host = () => {
  const navigate = useNavigate();

  const handleBecomeHost = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/become-host');
    } else {
      navigate('/login');
    }
  };
  return (
    <section id="hosts" className="py-24 relative overflow-hidden bg-white">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-saffron-50 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-lightgold blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-saffron-500 to-saffron-700 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="p-10 md:p-16 w-full md:w-3/5 text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Open your door to devotion.
            </h2>
            <p className="text-saffron-100 text-lg md:text-xl mb-8 max-w-lg">
              Earn extra income and be a part of someone's spiritual journey. List your extra room, apartment, or house during the Kumbh Mela.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-saffron-50">
                <span className="w-1.5 h-1.5 rounded-full bg-white mr-3"></span> Set your own price and availability
              </li>
              <li className="flex items-center text-saffron-50">
                <span className="w-1.5 h-1.5 rounded-full bg-white mr-3"></span> Screen guests before they arrive
              </li>
              <li className="flex items-center text-saffron-50">
                <span className="w-1.5 h-1.5 rounded-full bg-white mr-3"></span> 24/7 dedicated host support
              </li>
            </ul>

            <div>
              <button 
                onClick={handleBecomeHost}
                className="bg-white text-saffron-600 hover:bg-gray-50 flex items-center px-8 py-4 rounded-full font-bold shadow-lg transition-colors group"
              >
                <Home className="mr-2" size={20} />
                Become a Host
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/5 h-64 md:h-auto">
            <img 
              src={image} 
              alt="Nashik Host Welcome" 
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Host;
