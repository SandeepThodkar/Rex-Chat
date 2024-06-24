import React, { useState } from 'react';
import '../styles/ChatComponent.css'; // Import your CSS file for styling

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return; // Do not send empty messages

    // Add user's message to chat
    setMessages([...messages, { text: inputMessage, fromUser: true }]);
    const userMessage = inputMessage;
    setInputMessage('');

    // Fetch AI response
    try {
      const response = await fetchChatResponse(userMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, fromUser: false },
      ]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      // Optionally, display an error message to the user
    }
  };

  const fetchChatResponse = async (userMessage) => {
    const apiKey = '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'; // Replace with your actual OpenAI API key
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo', // Specify the model name
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch AI response: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      throw new Error('Failed to fetch AI response');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.fromUser ? 'outgoing' : 'incoming'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatComponent;
