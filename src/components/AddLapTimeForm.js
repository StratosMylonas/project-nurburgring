import React, { useState } from 'react';

function AddLapTimeForm({ updateLapTimes }) {
  const [carName, setCarName] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [milliseconds, setMilliseconds] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Format the lap time as MM:SS.MS
    const formattedLapTime = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}.${milliseconds.padStart(3, '0')}`;
    const newLap = { carName, lapTime: formattedLapTime };

    // Update the lap times state
    updateLapTimes((prevLapTimes) => [...prevLapTimes, newLap]);

    // Reset form fields after submitting
    setCarName('');
    setMinutes('');
    setSeconds('');
    setMilliseconds('');
  };

  // Handle input changes for minutes, seconds, and milliseconds
  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
  };

  const handleMillisecondsChange = (e) => {
    setMilliseconds(e.target.value);
  };

  // On blur, pad the values to ensure correct length
  const handleBlur = (field, setter, length) => {
    setter((prevValue) => prevValue.padStart(length, '0'));
  };

  return (
    <form className="add-lap-form" onSubmit={handleSubmit}>
      <h2>Add Lap Time</h2>
      <div>
        <input
          type="text"
          placeholder="Car Name"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          required
        />
      </div>
      <div className="time-picker">
        <input
          type="text"
          placeholder="MM"
          value={minutes}
          onChange={handleMinutesChange}
          onBlur={() => handleBlur('minutes', setMinutes, 2)}
          maxLength="2"
        />
        <input
          type="text"
          placeholder="SS"
          value={seconds}
          onChange={handleSecondsChange}
          onBlur={() => handleBlur('seconds', setSeconds, 2)}
          maxLength="2"
        />
        <input
          type="text"
          placeholder="MS"
          value={milliseconds}
          onChange={handleMillisecondsChange}
          onBlur={() => handleBlur('milliseconds', setMilliseconds, 3)}
          maxLength="3"
        />
      </div>
      <button type="submit" className="submit-button">
        Add Lap Time
      </button>
    </form>
  );
}

export default AddLapTimeForm;
