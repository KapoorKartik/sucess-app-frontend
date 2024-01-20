import React from "react";
import { Link, useLocation } from "react-router-dom";

export const MockTestList = () => {
  const { state } = useLocation();
  const obj = state?.obj || {};
  console.log("obj:", obj);
  const fakeApi = () => {
    //* this api mock the actual case api working
    //* sends the test code to fetch all the information about available mocks
    if (obj.testCode === "T1") {
    } else if (obj.testCode === "T2") {
    }
  };
  return (
    <>
      <Link className="mt-2" to="/listing">
        <img
          className="ms-2 mt-2"
          width="28"
          height="28"
          src="https://img.icons8.com/small/28/long-arrow-left.png"
          alt="backBtn"
        />
      </Link>

      <div className="ms-2 fs-4 fw-bold mt-1">{obj?.subject}</div>
      <div className="ms-2 fw-light text-muted">Validity: {obj?.validity}</div>
      <div className="shadow p-2 mt-1 mx-3 bg-body rounded text-start mb-2 d-flex">
        <div className="flex-grow-1 border">
        <div>FLT #4</div>
        <div className="text-muted" style={{fontSize : "11px"}}>Duration: 2hrs</div>
        </div>
        <img src="https://img.icons8.com/small/35/long-arrow-right.png" class="rounded-circle border" alt="exploerBtn"></img>
      </div>
    </>
  );
  /*  
    subject: 'HP Cooprative Bank',
    totalTest: '13',
    validity: '1 Months',
    isLast: false,
    testCode: 'T2 */
};
