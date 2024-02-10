import React, { useEffect } from "react";

export const Question = ({ questionObj, ansArr, currentQ, masterAnsArr }) => {
  // console.log('questionObj:', questionObj)
  const q = questionObj?.question;
  const options = questionObj?.options;
  let key = "q" + currentQ;
  // const handleClick = (val) => {
  //   // console.log("handleSubmit", val);
  //   setAnsArr({ ...ansArr, [key]: val });
  // };
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
    <div className={`shadow p-3 mx-2 rounded`}>
      <div className="text-start ms-2 pb-2">Question : {q}</div>
      {options?.map((option, index) => {
        return (
          <div
            key={option}
            className={`form-check py-2 my-2 d-flex border rounded ${
              option === ansArr[key] &&
              ansArr[key] &&
              ansArr[key] !== masterAnsArr[key]
                ? "border-danger"
                : masterAnsArr[key] && option === masterAnsArr[key]
                ? "border-success"
                : "border-primary"
            }`}
            // three border in option one is blue for common option second is red for incorrect and green for correct option
          >
            <div className="me-2">
              {ansArr[key] === option ? (
                <span>&#9673;</span>
              ) : (
                <span>&#9711;</span>
              )}
            </div>
            <div className="flex-grow-1">{option}</div>
            <div className="me-2">
              {/* first check if the answer selected by the user is correct or not 
                  and if correct only one icon not an issue
                  but if answer select by ther user if not correct than i have to use two icons one is for 
                  correct and other is for incorrect
                    for this correct icon is easily developed 
                    like if ans arr's and master arr and that correct option 
              */}

              {option === ansArr[key] &&
              ansArr[key] &&
              ansArr[key] !== masterAnsArr[key] ? (
                <span>&#10008;</span>
              ) : masterAnsArr[key] && option === masterAnsArr[key] ? (
                <span>&#10004;</span>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};
