import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
export const MockTest = () => {
  const { state } = useLocation();
  console.log("state:", state);
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/mockTestList", { state: { obj: state } }); //* why stuch strcture because of my strcture in mock test listing page
  };

  const handleNavigate = ()=>{
    navigate("/questions",{state : state});
  }

  return (
    <>
      {/* <img height={"100px"} width={"100%"} src={bg} alt="background"/> */}
      <div className="bg-image rounded m-2 shadow">
        <div className="text-start bg-transparent py-2">
          <div className="mt-2" onClick={handleBackBtn}>
            <img
              className="ms-2"
              width="28"
              height="28"
              src="https://img.icons8.com/small/28/FFFFFF/long-arrow-left.png"
              alt="l"
            />
          </div>
          <div className="ms-2 fw-bold text-light">{state?.subject}</div>
          <small className="ms-2 text-light">Instructions</small>
        </div>
      </div>
      <hr />

      <div className="d-flex justify-content-around text-start">
        <small className="fw-light text-muted">
          {state?.time}
          <br></br> Minutes
        </small>
        <small className="fw-light text-muted">
          {state?.question}
          <br></br> Questions
        </small>
        <small className="fw-light text-muted">
          {state?.marks}
          <br></br> Marks
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
      <div className="d-flex bottom-container ms-3 me-3 navbar fixed-bottom">
        <div className="text-decoration-none text-light flex-grow-1 btn btn-primary fixed-bottom m-2" onClick={handleNavigate}>
          Start
        </div>
      </div>
    </>
  );
};
