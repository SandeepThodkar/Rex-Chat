// src/api/index.js
export const fetchUserActivityData = async () => {
    return {
      activeUsers: [
        { date: '2024-06-01', count: 150 },
        { date: '2024-06-02', count: 200 },
        { date: '2024-06-03', count: 250 },
      ],
      messagesSent: [
        { date: '2024-06-01', count: 300 },
        { date: '2024-06-02', count: 400 },
        { date: '2024-06-03', count: 500 },
      ],
      userEngagement: [
        { activity: 'Login', count: 200 },
        { activity: 'Message Sent', count: 150 },
        { activity: 'Profile Update', count: 50 },
      ],
    };
  };
  