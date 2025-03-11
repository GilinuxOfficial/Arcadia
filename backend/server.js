const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const passport = require('passport');
require('./config'); // Loads your configuration settings

// Import routes
const authRoutes = require('./routes/auth');
const currencyRoutes = require('./routes/currency');
const gamesRoutes = require('./routes/games');
const leaderboardRoutes = require('./routes/leaderboard');
const chatRoutes = require('./routes/chat');
const analyticsRoutes = require('./routes/analytics');

const app = express();

// Middleware setup
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'supersecret',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport for Discord authentication
app.use(passport.initialize());
app.use(passport.session());
require('./controllers/authController').initPassport(passport);

// Define routes
app.use('/auth', authRoutes);
app.use('/currency', currencyRoutes);
app.use('/games', gamesRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/chat', chatRoutes);
app.use('/analytics', analyticsRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
