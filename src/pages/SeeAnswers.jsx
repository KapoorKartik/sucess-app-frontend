import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Question } from "../components/Question copy";

export const SeeAnswers = () => {
  const { state } = useLocation();
  const [currentQ, setCurrentQ] = useState(0);
  const handleQuestionChange = (val) => {
    setCurrentQ((previous) => {
      if (previous + val === state?.qArr.length || previous + val < 0) {
        return previous;
      } else {
        return previous + val;
      }
    });
  };
  // useEffect(() => {
  //   setVisited({ ...visited, [key]: true });
  // }, [currentQ]);
  console.log("state:", state);
  return (
    <>
      <div>SeeAnswers</div>
      <Question
        questionObj={state?.qArr[currentQ]}
        // setAnsArr={setAnsArr}
        currentQ={currentQ}
        ansArr={state?.ansArr}
        masterAnsArr={state?.masterAnsArr}
      />
      <div className="d-flex justify-content-between mb-3 mx-2 fixed-bottom">
        <div
          onClick={() => handleQuestionChange(-1)}
          className="text-primary"
          disabled={currentQ === 0}
        >
          {"< Previous"}
        </div>
        {/* <div>|</div>
        <div onClick={handleShow} className="">
          <AppI />
        </div> */}
        <div>|</div>
        <div
          onClick={() =>
            currentQ + 1 === state?.qArr.length
              ? handleSubmit()
              : handleQuestionChange(1)
          }
          className="text-primary"
        >
          {currentQ + 1 === state?.qArr.length ? "Submit" : "Next >"}
        </div>
      </div>
    </>
  );
};
