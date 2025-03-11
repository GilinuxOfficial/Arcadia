const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  stakes: { type: String }
});

module.exports = mongoose.model('Game', GameSchema);
