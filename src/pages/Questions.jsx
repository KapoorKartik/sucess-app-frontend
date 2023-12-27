import React, { useState } from "react";

export const Questions = () => {
  const [time,setTimer] = useState();
  return (
    <>
      <nav className="navbar navbar-light bg-primary rounded liner-gradient mb-2 mx-2">
        <div className="container-fluid text-white">
        HP JOA IT
        </div>
      </nav>
      <div className="shadow p-2 mb-2 mt-1 mx-2 bg-body rounded text-start d-flex justify-content-between">
        <div>1 of 70</div>
        <div>Timer 00:00:00</div>
        <div>+1 -0.25</div>
      </div>
    </>
  );
};
