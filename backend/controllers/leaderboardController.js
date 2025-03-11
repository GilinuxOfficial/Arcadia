exports.getLeaderboard = (req, res) => {
  // Dummy leaderboard data
  const leaderboard = [
    { username: 'Player1', wins: 10 },
    { username: 'Player2', wins: 8 },
    { username: 'Player3', wins: 5 }
  ];
  res.json(leaderboard);
};
