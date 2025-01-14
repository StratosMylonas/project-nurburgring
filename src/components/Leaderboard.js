import React, { useState } from 'react';

const Leaderboard = ({ lapTimes, updateLapTimes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingLapTime, setEditingLapTime] = useState(null);
  const [carName, setCarName] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [milliseconds, setMilliseconds] = useState('');

  const handleDelete = (index) => {
    const updatedLapTimes = lapTimes.filter((_, i) => i !== index);
    updateLapTimes(updatedLapTimes); // Update state and localStorage
  };

  const handleEdit = (lapTime, index) => {
    if (lapTime && lapTime.lapTime) {
      setIsEditing(true);
      setEditingLapTime(index);
      setCarName(lapTime.carName);
  
      // Safely split lapTime string (mm:ss.MS format)
      const [mins, secsMillis] = lapTime.lapTime.split(':');
      if (secsMillis) {
        const [secs, ms] = secsMillis.split('.');
        setMinutes(mins.padStart(2, '0'));
        setSeconds(secs.padStart(2, '0'));
        setMilliseconds(ms.padStart(2, '0'));
      } else {
        setSeconds('00');
        setMilliseconds('00');
      }
    } else {
      resetEditForm();
    }
  };
  
  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedLapTimes = [...lapTimes];
    updatedLapTimes[editingLapTime] = {
      carName,
      lapTime: `${minutes}:${seconds}.${milliseconds}`,
    };
    updateLapTimes(updatedLapTimes); // Update state and localStorage
    resetEditForm();
  };

  const resetEditForm = () => {
    setIsEditing(false);
    setEditingLapTime(null);
    setCarName('');
    setMinutes('');
    setSeconds('');
    setMilliseconds('');
  };

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <ul className="leaderboard">
        {lapTimes.map((lapTime, index) => (
          <li key={index} className="leaderboard-item">
            <div className="position">{index + 1}</div>
            <div className="car-name">{lapTime.carName}</div>
            <div className="lap-time">{lapTime.lapTime}</div>
            <div className="actions">
              <button onClick={() => handleEdit(lapTime, index)}>
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button onClick={() => handleDelete(index)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isEditing && (
        <form onSubmit={handleSaveEdit} className="edit-form">
          <div>
            <label>Car Name:</label>
            <input
              type="text"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Lap Time:</label>
            <div className="time-picker">
              <input
                type="text"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                required
                placeholder="Min"
              />
              <span>:</span>
              <input
                type="text"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                required
                placeholder="Sec"
              />
              <span>.</span>
              <input
                type="text"
                value={milliseconds}
                onChange={(e) => setMilliseconds(e.target.value)}
                required
                placeholder="MS"
              />
            </div>
          </div>
          <button type="submit">Save Edit</button>
          <button type="button" onClick={resetEditForm}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Leaderboard;
