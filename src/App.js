import React, { useState, useEffect } from 'react';
import './App.css';
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

  // Load lap times from localStorage
  useEffect(() => {
    const storedLapTimes = localStorage.getItem('lapTimes');
    if (storedLapTimes) {
      setLapTimes(JSON.parse(storedLapTimes)); // Parse JSON string back to array
    }
  }, []);

  // Update lap times in state and localStorage
  const updateLapTimes = (newLapTimes) => {
    setLapTimes(newLapTimes);
    localStorage.setItem('lapTimes', JSON.stringify(newLapTimes)); // Save updated lap times to localStorage
  };

  // Toggle theme mode and store in localStorage
  const handleToggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
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
