import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, Shield, ArrowLeft, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError('You are not logged in.');
        setLoading(false);
        // Optionally redirect to login immediately:
        // navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch profile');
        }

        setProfileData(data);
      } catch (err) {
        setError(err.message);
        if (err.message.includes('token') || err.message === 'Not authorized, no token') {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-saffron-500"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-saffron-600 to-saffron-800 z-0 rounded-b-3xl shadow-lg"></div>

      <div className="max-w-3xl mx-auto relative z-10 pt-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors mr-4 backdrop-blur-sm shadow-sm text-white">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
            My Profile
          </h1>
        </div>

        {error ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-red-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Authentication Error</h2>
            <p className="text-red-500 mb-6">{error}</p>
            <Link to="/login" className="inline-flex items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-saffron-500 hover:bg-saffron-600 transition-colors">
              Go to Login
            </Link>
          </div>
        ) : (
          profileData && (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Header profile section */}
              <div className="px-6 py-8 sm:p-10 border-b border-gray-100 bg-gradient-to-br from-orange-50 to-white flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="h-24 w-24 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 border-4 border-white shadow-md">
                  <User className="h-12 w-12" />
                </div>
                <div className="text-center sm:text-left pt-2">
                  <h2 className="text-3xl font-bold text-gray-900">{profileData.name}</h2>
                  <p className="text-sm font-medium text-saffron-600 uppercase tracking-wide mt-1 bg-saffron-50 inline-block px-3 py-1 rounded-full">{profileData.role} Account</p>
                </div>
              </div>

              {/* Details section */}
              <div className="px-6 py-6 sm:p-10">
                <h3 className="text-lg leading-6 font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Account Details
                </h3>

                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                    <dt className="text-sm font-medium text-gray-500 flex items-center mb-1">
                      <Mail className="h-4 w-4 mr-2 text-saffron-500" /> Email Address
                    </dt>
                    <dd className="mt-1 text-base text-gray-900 font-medium">{profileData.email}</dd>
                  </div>

                  <div className="sm:col-span-1 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                    <dt className="text-sm font-medium text-gray-500 flex items-center mb-1">
                      <Shield className="h-4 w-4 mr-2 text-saffron-500" /> Role Status
                    </dt>
                    <dd className="mt-1 text-base text-gray-900 font-medium capitalize">{profileData.role}</dd>
                  </div>

                  <div className="sm:col-span-2 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                    <dt className="text-sm font-medium text-gray-500 flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-2 text-saffron-500" /> Joined On
                    </dt>
                    <dd className="mt-1 text-base text-gray-900 font-medium">
                        {new Date(profileData.createdAt).toLocaleDateString('en-US', {
                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                        })}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100 flex justify-end space-x-3">
                <button 
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 border border-red-200 rounded-lg shadow-sm text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Profile;
