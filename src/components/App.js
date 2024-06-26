import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import ChatComponent from './ChatComponent';
import '../styles/App.css';
import { generateToken, messaging } from '../notifications/firebase';
import { onMessage } from "firebase/messaging";


function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);

  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
  };

  return (
    <div className="App">
      {!showChat ? (
        <LandingPage onStartChat={handleStartChat} />
      ) : (
        <ChatComponent setShowChat={setShowChat} />
      )}
    </div>
  );
}

export default App;
