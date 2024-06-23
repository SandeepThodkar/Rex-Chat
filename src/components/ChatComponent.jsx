import React, { useState, useEffect, useRef } from 'react';
import '../styles/ChatComponent.css'; // Adjusted the path to point to the styles folder

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    // Establish WebSocket connection
    ws.current = new WebSocket('ws://your-websocket-url'); // Replace with your WebSocket URL

    ws.current.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, { text: message.text, incoming: true }]);
    };

    ws.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim()) {
      const message = { text: input, incoming: false };
      setMessages((prevMessages) => [...prevMessages, message]);
      ws.current.send(JSON.stringify(message));
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.incoming ? 'incoming' : 'outgoing'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
