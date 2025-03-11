const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

// Get list of available games
router.get('/', gamesController.getGames);

// Play a game (dummy logic)
router.post('/play', gamesController.playGame);

module.exports = router;
