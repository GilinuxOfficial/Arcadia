// In-memory storage for chat messages (for demo purposes)
let messages = [];

exports.getMessages = (req, res) => {
  res.json(messages);
};

exports.postMessage = (req, res) => {
  const { message, username } = req.body;
  messages.push({ username, message, timestamp: new Date() });
  res.json({ success: true });
};
