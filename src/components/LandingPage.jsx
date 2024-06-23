import React from 'react';
import '../styles/LandingPage.css'; // Ensure the CSS file is imported

const LandingPage = ({ onStartChat }) => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to Our Chat App</h1>
          <p>Click below to start chatting!</p>
          <button className="start-chat-button" onClick={onStartChat}>
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
