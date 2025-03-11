import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Deviant Lounge</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/arcade">Arcade</Link></li>
        <li><Link to="/club">The Inferno Club</Link></li>
        <li><Link to="/chat">The Inferno Lounge</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
