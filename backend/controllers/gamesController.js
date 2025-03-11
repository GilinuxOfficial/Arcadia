exports.getGames = (req, res) => {
  // Return available games, e.g., Poker Table and Arcade Mini-games
  const games = [
    { id: 1, name: 'Poker Table', description: 'Exclusive to The Inferno Club', stakes: 'Customizable' },
    { id: 2, name: 'Arcade Runner', description: 'Mini-game with a classic arcade feel', stakes: 'Fun' }
  ];
  res.json(games);
};

exports.playGame = (req, res) => {
  // Dummy game play logic; update user stats, etc.
  const { gameId } = req.body;
  res.json({ success: true, message: `Played game with id ${gameId}` });
};
