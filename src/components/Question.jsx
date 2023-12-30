import React, { useState } from "react";

export const Question = ({ questionObj ,setAnsArr , ansArr, currentQ}) => {
  // console.log('questionObj:', questionObj)
  const q = questionObj?.question;
  const options = questionObj?.options;
  const handleClick = (val) => {
    console.log("handleSubmit", val);
    setAnsArr({...ansArr,[q]: val});
  };
  const type = "radio";
  return (
    <>
      <div className="text-start ms-2 pb-2">Question : {q}</div>
      {options?.map((option, index) => {
        return (
          <div
            key={option}
            className={
              index === 0
                ? "form-check mx-3  border-primary d-flex"
                : "form-check mx-3 border-top  border-primary d-flex"
            }
          >
            <input
              className="form-check-input border border-primary"
              type="radio"
              name="exampleRadios"
              id={option}
              value={option}
              onChange={(e)=> handleClick(e.target.value)}
              checked={ansArr[q] === option}
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
    </>
  );
};
