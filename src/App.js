import React, { useState, useEffect } from 'react';
import './App.css';  // Make sure to import the CSS file
import Leaderboard from './components/Leaderboard';
import AddLapTimeForm from './components/AddLapTimeForm';

function App() {
  const [lapTimes, setLapTimes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on app load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Update theme preference and store it in localStorage
  const handleToggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Function to update lap times in the state
  const updateLapTimes = (newLapTimes) => {
    setLapTimes(newLapTimes);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={handleToggleMode} />
          <span className="slider"></span>
        </label>
      </div>

      <h1 className="app-title">Nürburgring Lap Times</h1>

      {/* Form to add lap time */}
      <AddLapTimeForm updateLapTimes={updateLapTimes} />

      {/* Leaderboard */}
      <Leaderboard lapTimes={lapTimes} updateLapTimes={updateLapTimes} />
    </div>
  );
}

export default App;
