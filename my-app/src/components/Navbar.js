import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch(e) {}
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Hosts', href: '/#hosts' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-saffron-600' : 'text-white drop-shadow-md'}`}>
              Kumbh<span className={isScrolled ? 'text-gray-800' : 'text-saffron-300'}>Nivas</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-saffron-500 ${
                  isScrolled ? 'text-gray-600' : 'text-white drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Login/Signup Button */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className={`font-medium text-sm transition-colors ${isScrolled ? 'text-gray-800 hover:text-saffron-600' : 'text-white hover:text-saffron-200'}`}>
                  Welcome, {user.name.split(' ')[0]}
                </Link>
                <button 
                  onClick={handleLogout}
                  className={`font-medium text-sm transition-colors ${
                    isScrolled ? 'text-red-600 hover:text-red-700' : 'text-red-400 hover:text-red-300'
                  }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className={`font-medium text-sm transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-saffron-500' : 'text-white hover:text-saffron-200'
                }`}>
                  Log in
                </Link>
                <Link to="/signup" className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-all shadow-sm ${
                  isScrolled 
                    ? 'bg-saffron-500 text-white hover:bg-saffron-600' 
                    : 'bg-white text-saffron-600 hover:bg-gray-100'
                }`}>
                  <User size={16} />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled ? 'text-gray-800' : 'text-white'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-saffron-50 hover:text-saffron-600 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3 px-3">
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-left text-base font-medium text-gray-800 hover:text-saffron-600 pb-2 transition-colors"
                  >
                    Welcome, {user.name}
                  </Link>
                  <button 
                    onClick={() => { handleLogout(); setMobileMenuOpen(false); }} 
                    className="block bg-red-500 text-white px-4 py-3 rounded-md font-medium text-center w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block text-left text-base font-medium text-gray-800">
                    Log in
                  </Link>
                  <Link to="/signup" className="block bg-saffron-500 text-white px-4 py-3 rounded-md font-medium text-center w-full">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
