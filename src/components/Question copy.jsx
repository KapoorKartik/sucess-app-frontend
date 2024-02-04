import React, { useEffect } from "react";

export const Question = ({ questionObj, setAnsArr, ansArr, currentQ }) => {
  // console.log('questionObj:', questionObj)
  const q = questionObj?.question;
  const options = questionObj?.options;
  let key = "q" + currentQ;
  const handleClick = (val) => {
    // console.log("handleSubmit", val);
    setAnsArr({ ...ansArr, [key]: val });
  };
  // const type = "radio";
  let isClick = false;
  useEffect(() => {
    // You can use an interval, a button click, or any other event to change the question
    const interval = setInterval(() => {
      isClick = true;
    }, 5000);

    return () => clearInterval(interval);
  }, [currentQ]);
  isClick = true;
  return (
    <div className={`shadow p-3 mx-2 rounded ${isClick ? "custome-k" : ""}`}>
      <div className="text-start ms-2 pb-2">Question : {q}</div>
      {options?.map((option, index) => {
        return (
          <div
            key={option}
            className={
              "form-check py-2 my-2 d-flex border rounded border-danger"
            }
          >
            <input
              className="form-check-input border border-primary"
              type="radio"
              name="exampleRadios"
              id={option}
              value={option}
              onChange={(e) => handleClick(e.target.value)}
              checked={ansArr[key] === option}
              disabled
            />
            <img
              className="ms-2"
              width="20"
              height="20"
              src="https://img.icons8.com/small/20/0d6efd/long-arrow-left.png"
              alt="l"
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
