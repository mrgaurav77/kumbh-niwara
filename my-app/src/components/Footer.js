import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Kumbh<span className="text-saffron-500">Niwara</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for safe and comfortable accommodation during the sacred Kumbh Mela in Nashik.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-saffron-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-saffron-400 transition-colors text-sm">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-saffron-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors text-sm">Safety Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors text-sm">Cancellation Options</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-gray-400 hover:text-white transition-colors">
                <MapPin className="mr-3 text-saffron-500 flex-shrink-0" size={18} />
                <span>MG Road, Panchavati, <br/>Nashik, Maharashtra 422003</span>
              </li>
              <li className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="mr-3 text-saffron-500 flex-shrink-0" size={18} />
                <span>+91 800 123 4567</span>
              </li>
              <li className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="mr-3 text-saffron-500 flex-shrink-0" size={18} />
                <span>support@kumbhniwara.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} KumbhNiwara Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm">English (IN)</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">INR ₹</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
