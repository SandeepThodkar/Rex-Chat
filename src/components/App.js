import React, { useState } from 'react';
import LandingPage from './LandingPage';
import ChatComponent from './ChatComponent';
import '../styles/App.css'; // Adjust the path as per your project structure

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
  };

  return (
    <div className="App">
      {!showChat ? (
        <LandingPage onStartChat={handleStartChat} />
      ) : (
        <ChatComponent />
      )}
    </div>
  );
}

export default App;
