const User = require('../models/User');

exports.getBalance = async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
  const user = await User.findById(req.user.id);
  res.json({
    arcadianTokens: user.arcadianTokens,
    ducats: user.ducats,
    charonBonds: user.charonBonds
  });
};

exports.purchaseCurrency = async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
  // Dummy implementation: Increase balances based on request body values
  const { tokens, ducats } = req.body;
  let user = await User.findById(req.user.id);
  if (tokens) user.arcadianTokens += tokens;
  if (ducats) user.ducats += ducats;
  await user.save();
  res.json({ success: true, balance: {
    arcadianTokens: user.arcadianTokens,
    ducats: user.ducats
  }});
};
