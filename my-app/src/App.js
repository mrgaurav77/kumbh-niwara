import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import BecomeHost from './pages/BecomeHost';
import Accommodations from './pages/Accommodations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/become-host" element={<BecomeHost />} />
        <Route path="/accommodations" element={<Accommodations />} />
      </Routes>
    </Router>
  );
}

export default App;
