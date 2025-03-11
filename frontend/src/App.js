import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Arcade from './components/Arcade';
import Club from './components/Club';
import Chat from './components/Chat';
import Leaderboard from './components/Leaderboard';
import Payment from './components/Payment';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/arcade" element={<Arcade />} />
          <Route path="/club" element={<Club />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
