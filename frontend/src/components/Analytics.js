import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics = () => {
  const [data, setData] = useState({ activeUsers: 0, totalGamesPlayed: 0, revenue: 0 });

  useEffect(() => {
    axios.get('http://localhost:5000/analytics')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="analytics">
      <h2>Analytics Dashboard</h2>
      <p>Active Users: {data.activeUsers}</p>
      <p>Total Games Played: {data.totalGamesPlayed}</p>
      <p>Revenue: ${data.revenue}</p>
    </div>
  );
};

export default Analytics;
