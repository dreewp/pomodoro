import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaSync } from 'react-icons/fa';

const Session = ({ sessionTime, breakTime }) => {
  const [isSession, setIsSession] = useState(true);
  const [paused, setPaused] = useState(true);
  const [sessionLeft, setSessionLeft] = useState(null);
  const [breakLeft, setBreakLeft] = useState(null);
  const interval = useRef(null);

  // Handle Intervals
  const onStart = () => {
    setSessionLeft((s) => s || sessionTime * 60);
    setBreakLeft((b) => b || breakTime * 60);

    const handleSessionInterval = () => {
      setSessionLeft((s) => {
        if (s <= 0) {
          setIsSession(false);
          onPause();
          return null;
        }

        return s - 1;
      });
    };

    const handleBreakInterval = () => {
      setBreakLeft((b) => {
        if (b <= 0) {
          setIsSession(false);
          onPause();
          return null;
        }
        return b - 1;
      });
    };

    const id = window.setInterval(() => {
      isSession ? handleSessionInterval() : handleBreakInterval();
    }, 1000);
    interval.current = id;
    setPaused(false);
  };
  const onPause = () => {
    window.clearInterval(interval.current);
    interval.current = null;
    setPaused(true);
  };
  const onRefresh = () => {
    setSessionLeft(null);
    setBreakLeft(null);
  };
  useEffect(() => onPause, []);

  // Handle Display
  const header = isSession ? 'Session' : 'Break';
  const time = isSession
    ? sessionLeft === null
      ? sessionTime * 60
      : sessionLeft
    : breakLeft === null
    ? breakTime * 60
    : breakLeft;
  const minutes = ('0' + Math.floor(time / 60)).slice(-2);
  const seconds = ('0' + Math.floor(time % 60)).slice(-2);

  return (
    <div id="session-container">
      <h4>{header}</h4>
      <div id="session">{`${minutes}:${seconds}`}</div>
      <div id="session-controls">
        {paused ? (
          <>
            <FaPlay size={32} onClick={onStart} />
            <FaSync size={32} onClick={onRefresh} />
          </>
        ) : (
          <FaPause size={32} onClick={onPause} />
        )}
      </div>
    </div>
  );
};

export default Session;
