import { useState, useEffect, useRef } from "react";

const Timer = ({ timeInSec, timerOver }) => {
  const [seconds, setSeconds] = useState(timeInSec); // Set the initial time in seconds
  const timeRef = useRef(null);

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        // console.log('seconds:', prevSeconds);
        return prevSeconds - 1;
      });
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(timeRef.current);
  }, []); // Empty dependency array means the effect runs once on mount

  useEffect(() => {
    // console.log('seconds:', seconds === 0)
    if (seconds === 0) {
      // Handle timeRef.current completion, e.g., display a message or trigger another action
      clearInterval(timeRef.current);
      timerOver();
    }
  }, [seconds]);

  const formatTime = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      {formatTime()}
      {/* Add additional UI elements or actions as needed */}
    </>
  );
};

export default Timer;
