import React from 'react';

const Controls = ({ sessionTime, breakTime, setSessionTime, setBreakTime }) => {
  const incrementSession = () => setSessionTime((s) => s + 1);
  const decrementSession = () => setSessionTime((s) => Math.max(1, s - 1));
  const incrementBreak = () => setBreakTime((b) => b + 1);
  const decrementBreak = () => setBreakTime((b) => Math.max(1, b - 1));

  return (
    <div id="controls">
      <div>
        <h3>Break Length</h3>
        <div className="time-selection">
          <button onClick={decrementBreak}>-</button>
          <span>{breakTime}:00</span>
          <button onClick={incrementBreak}>+</button>
        </div>
      </div>
      <div>
        <h3>Session Length</h3>
        <div className="time-selection">
          <button onClick={decrementSession}>-</button>
          <span>{sessionTime}:00</span>
          <button onClick={incrementSession}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
