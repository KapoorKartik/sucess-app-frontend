import React, { useEffect, useState } from "react";
import Timer from "../components/Timer";
import { useLocation, useParams } from "react-router-dom";
import { Question } from "../components/Question";

export const Questions = () => {
  const { mockId } = useParams();
  const [qArr, setQarr] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
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
  const handleQuestionChange = (val) => {
    setCurrentQ((previous) => {
      if (previous + val === qArr.length || previous + val < 0) {
        console.log("this is last Question");
        return previous;
      } else {
        return previous + val;
      }
    });
  };

  /* 
  length = 3
  currentQ = 0
  handleQuestionChange(1)
  currentQ = 1
  handleQuestionChange(2)
  currentQ = 2
  handleQuestionChange(3)
  no need to change currentQ
*/
  return (
    <>
      <nav className="navbar navbar-light bg-primary liner-gradient mb-2 mx-0">
        <div className="container-fluid text-white">HP JOA IT</div>
      </nav>
      <div className="p-2 mb-2 mt-1 mx-2 bg-body rounded text-start d-flex justify-content-between">
        <div>{currentQ + 1} of 70</div>
        <div>{/* Timer <Timer timeInSec={50} /> */}</div>
        <div>+1 -0.25</div>
      </div>
      <Question questionObj={qArr[currentQ]} />
      <div class="d-flex justify-content-between mt-2">
        <button
          onClick={() => handleQuestionChange(-1)}
          type="button"
          class="btn btn-primary"
          disabled={currentQ === 0}
        >
          Previous
        </button>
        <button
          onClick={() => handleQuestionChange(1)}
          type="button"
          class="btn btn-primary"
        >
          {currentQ + 1 === qArr.length ? "Submit" : "Save and Next"}
        </button>
      </div>
    </>
  );
};
