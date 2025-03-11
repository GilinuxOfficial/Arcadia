const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

// Get user currency balance
router.get('/balance', currencyController.getBalance);

// Purchase currency (dummy implementation)
router.post('/purchase', currencyController.purchaseCurrency);

module.exports = router;
