module.exports = {
  discord: {
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL
  },
  sessionSecret: process.env.SESSION_SECRET || 'supersecret',
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/deviantlounge'
};
