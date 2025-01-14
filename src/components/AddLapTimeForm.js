import React, { useState } from 'react';

const AddLapTimeForm = ({ updateLapTimes }) => {
  const [carName, setCarName] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [milliseconds, setMilliseconds] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the form fields are filled out
    if (!carName || !minutes || !seconds || !milliseconds) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new lap time object
    const newLapTime = {
      carName,
      lapTime: `${minutes}:${seconds}.${milliseconds}`,
    };

    // Retrieve existing lap times from localStorage (if any)
    const storedLapTimes = JSON.parse(localStorage.getItem('lapTimes')) || [];
    
    // Add the new lap time to the existing lap times
    const updatedLapTimes = [...storedLapTimes, newLapTime];

    // Update lap times in state and localStorage
    updateLapTimes(updatedLapTimes);
    
    // Reset form fields
    setCarName('');
    setMinutes('');
    setSeconds('');
    setMilliseconds('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-lap-time-form">
      <h2>Add Lap Time</h2>
      <div className="input-group">
        <label>Car Name</label>
        <input
          type="text"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          placeholder="Enter car name"
          required
        />
      </div>
      <div className="time-picker">
        <div className="time-input-group">
          <label>Minutes</label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="MM"
            required
          />
        </div>
        <div className="time-input-group">
          <label>Seconds</label>
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            placeholder="SS"
            required
          />
        </div>
        <div className="time-input-group">
          <label>Milliseconds</label>
          <input
            type="number"
            value={milliseconds}
            onChange={(e) => setMilliseconds(e.target.value)}
            placeholder="MS"
            required
          />
        </div>
      </div>
      <button type="submit" className="submit-button">Add Lap Time</button>
    </form>
  );
};

export default AddLapTimeForm;
