import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Host from './components/Host';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Host />
      <Footer />
    </div>
  );
}

export default App;
