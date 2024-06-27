import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import ChatComponent from './ChatComponent';
import ActivityDashboard from './ActivityDashboard';
import '../styles/App.css';
import { generateToken, messaging } from '../notifications/firebase';
import { onMessage } from "firebase/messaging";

function App() {
  const [showChat, setShowChat] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);

  const handleStartChat = () => {
    setShowChat(true);
  };

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Router>
      <div className="App">
        <button className="toggle-button" onClick={toggleNav}>
          ☰
        </button>
        <nav className={navVisible ? 'visible' : ''}>
          <ul>
            <li>
              <Link to="/" onClick={toggleNav}>Home</Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={toggleNav}>Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route 
            exact 
            path="/" 
            element={
              !showChat ? (
                <LandingPage onStartChat={handleStartChat} />
              ) : (
                <ChatComponent setShowChat={setShowChat} />
              )
            }
          />
          <Route path="/dashboard" element={<ActivityDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
