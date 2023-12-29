import React, { useEffect, useState } from "react";
import Timer from "../components/Timer";
import { useLocation, useParams } from "react-router-dom";
import { Question } from "../components/Question";

export const Questions = () => {
  const { mockId } = useParams();
  const [qArr , setQarr] = useState([]);
  // console.log("mockID:", mockId);

  const getQuestionsByMockId = (mockId) => {
    let arrOne = [
      {
        question: "Who invented blub",
        options: ["kartik", "depanshu", "aman", "dhiman"],
      },
      {
        question: "Who invented election",
        options: ["kartik", "depanshu", "aman", "dhiman"],
      },
      {
        question: "Who invented coding",
        options: ["kartik", "depanshu", "aman", "dhiman"],
      },
    ];
    if (mockId === "m1") {
      setQarr(arrOne);
    }
  };

  useEffect(() => getQuestionsByMockId(mockId), []);
  return (
    <>
      <nav className="navbar navbar-light bg-primary liner-gradient mb-2 mx-0">
        <div className="container-fluid text-white">HP JOA IT</div>
      </nav>
      <div className="p-2 mb-2 mt-1 mx-2 bg-body rounded text-start d-flex justify-content-between">
        <div>1 of 70</div>
        <div>
          {/* Timer <Timer timeInSec={50} /> */}
        </div>
        <div>+1 -0.25</div>
      </div>
      <Question />
    </>
  );
};
