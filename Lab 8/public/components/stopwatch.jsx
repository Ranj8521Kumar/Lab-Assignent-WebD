import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{formatTime(timer)}</p>
      <div>
        {!isActive && !isPaused && (
          <button onClick={handleStart}>Start</button>
        )}
        {isActive && (
          <button onClick={handlePause}>Pause</button>
        )}
        {(!isActive || isPaused) && timer !== 0 && (
          <button onClick={handleReset}>Reset</button>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
