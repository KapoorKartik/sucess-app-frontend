import React, { useEffect, useState } from "react";

export const Question = ({ questionObj, setAnsArr, ansArr, currentQ }) => {
  // console.log('questionObj:', questionObj)
  const q = questionObj?.ques;
  const options = questionObj?.options;
  let key = "q" + currentQ;
  const handleClick = (val) => {
    // console.log("handleSubmit", val);
    setAnsArr({ ...ansArr, [key]: val });
  };
  // const type = "radio";
  // let isClick = false;

  const [isVisible, setIsVisible] = useState(false);
  const handleClickCss = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000); // After 2 seconds, fade out
  };
  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  }, [currentQ]);
  return (
    <div
      className={`shadow p-3 mx-2 rounded ${
        isVisible ? "custome-effects" : null
      }`}
    >
      <div className="text-start ms-2 pb-2 border-info border-bottom">
        Question : {q}
      </div>
      {options?.map((option, index) => {
        return (
          <div
            key={option}
            className={"form-check mx-3 py-2 d-flex border-0 border-info"}
          >
            <input
              className="form-check-input border border-primary"
              type="radio"
              name="exampleRadios"
              id={option}
              value={option}
              onChange={(e) => handleClick(e.target.value)}
              checked={ansArr[key] === option}
            />
            <label
              className="form-check-label ps-2 flex-grow-1 text-start"
              for={option}
            >
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};
