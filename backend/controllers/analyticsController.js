exports.getAnalytics = (req, res) => {
  // Dummy analytics data
  const analytics = {
    activeUsers: 42,
    totalGamesPlayed: 123,
    revenue: 987.65
  };
  res.json(analytics);
};
