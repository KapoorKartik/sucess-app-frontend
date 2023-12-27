// import React, { useState, useEffect } from 'react';
// let  timer
// const Timer = () => {
//   const [seconds, setSeconds] = useState(60); // Set the initial time in seconds

//   useEffect(() => {
//     timer = setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds - 1);
//     }, 1000);

//     // Cleanup function to clear the interval when the component is unmounted
//     return () => clearInterval(timer);
//   }, []); // Empty dependency array means the effect runs once on mount

// //   useEffect(() => {
// //     if (seconds === 0) {
// //       // Handle timer completion, e.g., display a message or trigger another action
// //       clearInterval(timer);
// //     }
// //   }, [seconds]);

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


import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 60 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        if (newSeconds < 0) {
          const newMinutes = prevTime.minutes - 1;
          if (newMinutes < 0) {
            const newHours = prevTime.hours - 1;
            return { hours: newHours, minutes: 59, seconds: 59 };
          }
          return { hours: prevTime.hours, minutes: newMinutes, seconds: 59 };
        }
        return { ...prevTime, seconds: newSeconds };
      });
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []); // Empty dependency array means the effect runs once on mount

  const formatTimeComponent = (timeComponent) => (timeComponent < 10 ? `0${timeComponent}` : timeComponent);

  return (
    <div>
      <h1>
        Timer: {formatTimeComponent(time.hours)}:{formatTimeComponent(time.minutes)}:{formatTimeComponent(time.seconds)}
      </h1>
    </div>
  );
};

export default Timer;
