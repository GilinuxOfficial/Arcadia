import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Arcade = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/games')
      .then(res => setGames(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="arcade">
      <h2>Arcade Games</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <h3>{game.name}</h3>
            <p>{game.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Arcade;
