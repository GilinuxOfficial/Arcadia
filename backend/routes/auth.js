const express = require('express');
const router = express.Router();
const passport = require('passport');

// Initiate Discord authentication
router.get('/discord', passport.authenticate('discord'));

// Discord callback URL after authentication
router.get('/discord/callback', passport.authenticate('discord', {
  failureRedirect: '/'
}), (req, res) => {
  // Successful authentication, redirect to home.
  res.redirect('/');
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
