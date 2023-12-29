// import React, { useState, useEffect } from 'react';
// let  timer;
// const Timer = () => {
//   const [seconds, setSeconds] = useState(65); // Set the initial time in seconds

//   useEffect(() => {
//     timer = setInterval(() => {
//       console.log('seconds:', seconds)
//       setSeconds(prevSeconds => prevSeconds - 1);
//     }, 1000);

//     // Cleanup function to clear the interval when the component is unmounted
//     return () => clearInterval(timer);
//   }, []); // Empty dependency array means the effect runs once on mount

//   useEffect(() => {
//     if (seconds === 0) {
//       // Handle timer completion, e.g., display a message or trigger another action
//       clearInterval(timer);
//     }
//   }, [seconds]);

//   const formatTime = () => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     /*
//     sec = 120;
//     hours = 120/3600 = 0
//     minutes = 120%3600/60 = 0
//     sec = 120 % 60 = 2 
//      */

//     return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <div>
//       <h1>Timer: {formatTime()}</h1>
//       {/* Add additional UI elements or actions as needed */}
//     </div>
//   );
// };

// export default Timer;



import React, { useState, useEffect, useRef } from 'react';

const Timer = ({timeInSec = 60}) => {
  const [seconds, setSeconds] = useState(timeInSec); // Set the initial time in seconds
  const timeRef = useRef(null);

  useEffect(() => {
   timeRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
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
    }
  }, [seconds]);

  const formatTime = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours < 10 ? '0' : ""}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
     {formatTime()}
      {/* Add additional UI elements or actions as needed */}
    </>
  );
};

export default Timer;
