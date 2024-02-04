import React from "react";
import { MyChart } from "../components/MyChart";
import { Link, useLocation } from "react-router-dom";

export const Result = () => {
    const {state} = useLocation();
    console.log('state:', state)
  return (
    <div className="">
      <h2>Unattemted : {state?.unattemted}</h2>
      <div className="bg-image rounded shadow">
        <div className="text-start bg-transparent py-2">
          <Link className="mt-2" to="/listing">
            <img
              className="ms-2 mt-2"
              width="28"
              height="28"
              src="https://img.icons8.com/small/28/FFFFFF/long-arrow-left.png"
              alt="backBtn"
            />
          </Link>
          <br />
          <div className="ms-2 text-light">Free Demo Test</div>
          <small className="ms-2 fw-bold text-light fs-3">Analysis</small>
        </div>
      </div>
      <div className="m-2">
        <div>Rank</div>
        <div className="fw-bold">
          <span className="text-info">1200/</span>5265
        </div>
      </div>
      <MyChart />
      <div className="d-flex bottom-container ms-3 me-3 navbar fixed-bottom">
        <Link
          to="/questions/m1"
          className="text-decoration-none text-light flex-grow-1 btn btn-primary fixed-bottom m-2"
        >
          See Answers
        </Link>
      </div>
    </div>
  );
};
