import React, { useState } from 'react';
import './App.scss';
import Controls from './components/Controls';
import Session from './components/Session';

function App() {
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <div id="App">
      <h1>Pomodoro Clock 🍅</h1>
      <Controls
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
      />
      <Session sessionTime={sessionTime} breakTime={breakTime} />
    </div>
  );
}

export default App;
