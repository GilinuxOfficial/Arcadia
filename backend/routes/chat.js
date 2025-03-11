const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Get chat messages
router.get('/messages', chatController.getMessages);

// Post a new chat message
router.post('/message', chatController.postMessage);

module.exports = router;
