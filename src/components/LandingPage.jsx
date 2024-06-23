import React from 'react';

const LandingPage = ({ onStartChat }) => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Chat App</h1>
      <p>Click below to start chatting!</p>
      <button onClick={onStartChat}>Start Chat</button>
    </div>
  );
};

export default LandingPage;
