import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Question } from "../components/Question copy";
import { ReactComponent as AppIcon } from "../icons/app_icon.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

export const SeeAnswers = () => {
  const {
    state: { qArr, ansArr, masterAnsArr, returnObj },
  } = useLocation();
    console.log("returnObj:", returnObj);
  const [currentQ, setCurrentQ] = useState(0);
  const [show, setShow] = useState(false);
  const handleQuestionChange = (val) => {
    setCurrentQ((previous) => {
      if (previous + val === qArr.length || previous + val < 0) {
        return previous;
      } else {
        return previous + val;
      }
    });
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleCurrentQuestion = (val) => {
    if (val <= qArr.length) {
      setCurrentQ(val);
      setShow(false);
    }
  };
  const conditionForCss = (val) => {
    if (val === currentQ) {
      // console.log("currentQ:", currentQ);
      return "border border-info text-center bg-secondary  text-light";
    } else {
      return "border border-info text-center ";
    }
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/mockTestList",{state : {obj : returnObj}});
  };
  console.log('returnObj:', returnObj)
  return (
    <>
      <div>SeeAnswers</div>
      <div className="p-2 mb-2 mt-1 mx-2 bg-body rounded text-start d-flex justify-content-between">
        <div>
          {currentQ + 1} of {qArr.length}
        </div>
        <div>+1 -0.25</div>
      </div>
      <Question
        questionObj={qArr[currentQ]}
        // setAnsArr={setAnsArr}
        currentQ={currentQ}
        ansArr={ansArr}
        masterAnsArr={masterAnsArr}
      />
      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <div className="d-flex p-1 justify-content-around">
          <div>* Answred</div>
          <div># Unanswer</div>
          <div className="bg-secondary text-light">Active</div>
        </div>
        <Offcanvas.Body>
          <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
            {qArr.map((q, i) => {
              return (
                <li
                  style={{ width: "20%", display: "inline-block" }}
                  className={conditionForCss(i)}
                  onClick={() => handleCurrentQuestion(i)}
                >
                  {ansArr["q" + i] ? "* " : "# "}
                  {i + 1}
                </li>
              );
            })}
          </ul>
          {/* <Button
            variant="primary"
            onClick={handleNavigate}
          >
            Home
          </Button> */}
        </Offcanvas.Body>
      </Offcanvas>
      <div className="d-flex justify-content-between mb-3 mx-2 fixed-bottom">
        <div
          onClick={() => handleQuestionChange(-1)}
          className="text-primary"
          disabled={currentQ === 0}
        >
          {"< Previous"}
        </div>
        <div>|</div>
        <div onClick={handleShow} className="">
          <AppIcon />
        </div>
        <div>|</div>
        <div
          onClick={() =>
            currentQ + 1 === qArr.length
              ? handleNavigate()
              : handleQuestionChange(1)
          }
          className="text-primary me-2"
        >
          {currentQ + 1 === qArr.length ? "Home" : "Next >"}
        </div>
      </div>
    </>
  );
};
