import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function SignUp() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558223637-2fb0cbba2c3e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-saffron-900/40"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center items-center mb-6 relative">
          <Link to="/" className="absolute left-0 top-0 p-2 rounded-full hover:bg-white/10 transition-colors">
            <ArrowLeft className="h-6 w-6 text-white" />
          </Link>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-white drop-shadow-md tracking-tight">
            Create an Account
          </h2>
        </div>
        <p className="text-center text-sm text-gray-200 drop-shadow-sm font-medium">
          Join KumbhNiwas as a Pilgrim
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/95 backdrop-blur-md py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-white/20">
          <form className="space-y-5" action="#" method="POST">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                <div className="mt-1">
                  <input id="first-name" name="first-name" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-saffron-500 focus:border-saffron-500 sm:text-sm bg-white/80 transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                <div className="mt-1">
                  <input id="last-name" name="last-name" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-saffron-500 focus:border-saffron-500 sm:text-sm bg-white/80 transition-colors" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-saffron-500 focus:border-saffron-500 sm:text-sm bg-white/80 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <div className="mt-1">
                <input
                  id="mobileNo"
                  name="mobileNo"
                  type="number"
                  autoComplete="mobileNo"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-saffron-500 focus:border-saffron-500 sm:text-sm bg-white/80 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Create Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-saffron-500 focus:border-saffron-500 sm:text-sm bg-white/80 transition-colors"
                />
              </div>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-md text-sm font-bold text-white bg-saffron-500 hover:bg-saffron-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron-500 transition-all transform hover:scale-[1.02]"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm border-t border-gray-100 pt-6">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login" className="font-bold text-saffron-600 hover:text-saffron-700 transition-colors">
              Log in instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
