const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  criteria: { type: String }
});

module.exports = mongoose.model('Achievement', AchievementSchema);
