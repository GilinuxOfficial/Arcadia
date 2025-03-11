const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  discriminator: { type: String },
  avatar: { type: String },
  email: { type: String },
  arcadianTokens: { type: Number, default: 100 },
  ducats: { type: Number, default: 50 },
  charonBonds: { type: Number, default: 0 },
  gameStats: {
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('User', UserSchema);
