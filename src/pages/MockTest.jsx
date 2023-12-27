import React from "react";
export const MockTest = () => {
  return (
    <>
      {/* <img height={"100px"} width={"100%"} src={bg} alt="background"/> */}
      <div className="bg-image rounded m-2 shadow">
        <div className="text-start bg-transparent py-2">
          <img
            className="ms-2"
            width="28"
            height="28"
            src="https://img.icons8.com/small/28/FFFFFF/long-arrow-left.png"
            alt="l"
          />
          <div className="ms-2 fw-bold text-light">HP JOA IT</div>
          <small className="ms-2 text-light">Instructions</small>
        </div>
      </div>
      <hr />

      <div className="d-flex justify-content-around text-start">
        <small className="fw-light text-muted">
          60<br></br> Minutes
        </small>
        <small className="fw-light text-muted">
          70<br></br> Questions
        </small>
        <small className="fw-light text-muted">
          70<br></br> Marks
        </small>
      </div>
      <hr />
      <div className="text-start mt-2 ms-2 text-muted">
        <div>Instructions</div>
        <ul>
          <li>This test has negative markings</li>
          <li>
            The clock will be set by server. The countdown timer in the top
            right corner of the screen will display the remaining time available
            for you to complete the exam. When the timer reaches zero, the
            examination will end by itself.
          </li>
        </ul>
      </div>
      <div className="d-flex mb-3 ms-3 me-3 navbar fixed-bottom" >
        <button className="btn btn-primary flex-grow-1" type="button" >
          Start
        </button>
      </div>
    </>
  );
};
