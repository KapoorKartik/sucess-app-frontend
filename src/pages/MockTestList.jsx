import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getData } from "../services/httpServices";
import Swal from "sweetalert2";

export const MockTestList = () => {
  const { state } = useLocation();
  const [mockTestDataArr, setMockTestDataArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const obj = state?.obj || {};
  console.log("obj:", obj);

  const fetchAllMockTest = async () => {
    setIsLoading(true)
    const data = await getData("/exam-data/1");
    setIsLoading(false)
    setMockTestDataArr(data?.res);
  };

  useEffect(() => fetchAllMockTest, []);
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    if (e.tag === "paid") {
      Swal.fire("", "Pay 29 monthly to access all mock tests", "info");
    } else {
      navigate("/mockTest", { state: obj });
    }
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
        {isLoading ? "...Loading" : null}
        {mockTestDataArr?.map((ele, ind) => {
          if (ele.tag === "free") {
            return (
              <div
                key={ele.mockId}
                className="shadow p-2 mt-1 mx-1 bg-body rounded text-start mb-2 d-flex"
              >
                <div className="flex-grow-1 border-0">
                  <div>{ele.test}</div>
                  <div className="text-muted" style={{ fontSize: "11px" }}>
                    Duration: {ele?.time / 60}hrs
                  </div>
                </div>
                <div onClick={() => handleNavigate(ele)}>
                  <img
                    src="https://img.icons8.com/small/25/long-arrow-right.png"
                    className="rounded-circle border-0 me-2"
                    alt="exploerBtn"
                  ></img>
                </div>
              </div>
            );
          }
        })}

        <div className="fw-bold mt-1 ">Test Schedule</div>
        {isLoading ? "...Loading" : null}
        {mockTestDataArr?.map((ele, ind) => {
          if (ele.tag === "paid") {
            return (
              <div
                key={ele.mockId}
                className="shadow p-2 mt-1 mx-1 bg-body rounded text-start mb-2 d-flex"
              >
                <div className="flex-grow-1 border-0">
                  <div>{ele?.test}</div>
                  <div className="text-muted" style={{ fontSize: "11px" }}>
                    Duration: {ele?.time / 60}hrs
                  </div>
                </div>
                <div onClick={() => handleNavigate(ele)}>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/lock--v1.png"
                    alt="lock--v1"
                  />
                </div>
              </div>
            );
          }
        })}
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
