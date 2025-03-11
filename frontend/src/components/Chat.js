import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = () => {
    axios.get('http://localhost:5000/chat/messages')
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  };

  const sendMessage = () => {
    axios.post('http://localhost:5000/chat/message', { username: 'Anonymous', message: input })
      .then(() => {
        setInput('');
        fetchMessages();
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="chat">
      <h2>The Inferno Lounge Chat</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}:</strong> {msg.message} <em>({new Date(msg.timestamp).toLocaleTimeString()})</em>
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
