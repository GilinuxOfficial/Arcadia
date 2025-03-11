import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [balance, setBalance] = useState({ arcadianTokens: 0, ducats: 0, charonBonds: 0 });

  useEffect(() => {
    axios.get('http://localhost:5000/currency/balance', { withCredentials: true })
      .then(res => setBalance(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <p>Arcadian Tokens: {balance.arcadianTokens}</p>
      <p>Ducats: {balance.ducats}</p>
      <p>Charon Bonds: {balance.charonBonds}</p>
    </div>
  );
};

export default Profile;
