import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { getData } from "../services/httpServices";

export const MockTestList = () => {
  const { state } = useLocation();
  const [mockTestDataArr,setMockTestDataArr] = useState([])
  const obj = state?.obj || {};
  console.log("obj:", obj);

  const fetchAllMockTest = async () => {
    const data  = await getData("/exam-data/1");
    console.log("data:", data);
    setMockTestDataArr(data?.result?.tests);
  };

  useEffect(() => fetchAllMockTest, []);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/mockTest", { state: obj });
  };
  return (
    <>
      <div className="mx-3">
        <Link className="mt-2" to="/listing">
          <img
            className="ms-2 mt-2"
            width="28"
            height="28"
            src="https://img.icons8.com/small/28/long-arrow-left.png"
            alt="backBtn"
          />
        </Link>

        <div className="fs-4 fw-bold mt-1">{obj?.subject}</div>
        <div className="fw-light text-muted">Validity: {obj?.validity}</div>
        <div className="fw-bold mt-1 ">Free Demo Test</div>
        <div className="shadow p-2 mt-1 mx-1 bg-body rounded text-start mb-2 d-flex">
          <div className="flex-grow-1 border-0">
            <div>Free Demo Test</div>
            <div className="text-muted" style={{ fontSize: "11px" }}>
              Duration: 2hrs
            </div>
          </div>
          <div onClick={handleNavigate}>
            {/* <Link to='/mockTest/m1'> */}
            <img
              src="https://img.icons8.com/small/25/long-arrow-right.png"
              class="rounded-circle border-0 me-2"
              alt="exploerBtn"
            ></img>
            {/* </Link> */}
          </div>
        </div>

        <div className="fw-bold mt-1 ">Test Schedule</div>
        <div className="shadow p-2 mt-1 mx-1 bg-body rounded text-start mb-2 d-flex">
          <div className="flex-grow-1 border-0">
            <div>FLT #4</div>
            <div className="text-muted" style={{ fontSize: "11px" }}>
              Duration: 2hrs
            </div>
          </div>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/lock--v1.png"
            alt="lock--v1"
          />
        </div>
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
