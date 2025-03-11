const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['purchase', 'bonus'], required: true },
  amount: { type: Number, required: true },
  currency: { type: String, enum: ['arcadianTokens', 'ducats'], required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
