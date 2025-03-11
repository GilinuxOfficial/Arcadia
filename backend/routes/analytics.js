const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// Get analytics data
router.get('/', analyticsController.getAnalytics);

module.exports = router;
