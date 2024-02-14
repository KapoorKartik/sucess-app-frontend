import React from "react";
import { MyChart } from "../components/MyChart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SeeAnswers } from "./SeeAnswers";

export const Result = () => {
  const { state } = useLocation();
  console.log("state:", state);
  const navigate = useNavigate();
  const masterAnsArr = {
    q0: "Paris", // Capital of France
    q1: "Jane Austen", // Writer of Romeo and Juliet
    q2: "Mars", // Largest planet in our solar system
    q3: "Silver", // Element with chemical symbol 'O'
    q4: "1905", // Year Titanic sank
    q5: "Leonardo da Vinci", // Painter of the Mona Lisa
    q6: "Pound", // Currency of Japan
    q7: "Canberra", // Capital of Australia
    q8: "Alan Turing", // Known as the 'Father of Computer Science'
    q9: "12", // Square root of 144
    q10: "Mars", // Known as the 'Red Planet'
    q11: "Cherry Blossom", // National flower of Japan
    q12: "Harper Lee", // Author of 'To Kill a Mockingbird'
    q13: "1989", // Year Berlin Wall fell
    q14: "Au", // Chemical symbol for gold
    q15: "Alexander Fleming", // Discovered penicillin
    q16: "Pacific Ocean", // World's largest ocean
    q17: "Japan", // Known as the 'Land of the Rising Sun'
    q18: "Alexander Graham Bell", // Invented the telephone
    q19: "299,792 kilometers per second", // Speed of light
  };
  let k = {
    qArr: state?.qArr,
    ansArr: state?.ansArr,
    masterAnsArr: masterAnsArr,
    returnObj: state?.returnObj,
  };
    console.log("k:", k);
    const handleSeeAnswers = () => {
      navigate("/seeAnswer", { state: k });
    };
    let correctAns = 0;
    let incorrectAns = 0
      for (let i = 0; i < Object.keys(masterAnsArr).length; i++) {
        if (state?.ansArr["q" + i] === masterAnsArr["q" + i]) {
          correctAns++;
        }
      }
      incorrectAns = Object.keys(state?.ansArr).length - correctAns;
    return (
      <div className="">
        <h2>Unattemted : {state?.unattemted}</h2>
        <div className="bg-image rounded shadow">
          <div className="text-start bg-transparent py-2">
            <Link className="mt-2" to="/listing">
              <img
                className="ms-2 mt-2"
                width="28"
                height="28"
                src="https://img.icons8.com/small/28/FFFFFF/long-arrow-left.png"
                alt="backBtn"
              />
            </Link>
            <br />
            <div className="ms-2 text-light">Free Demo Test</div>
            <small className="ms-2 fw-bold text-light fs-3">Analysis</small>
          </div>
        </div>
        <div className="m-2">
          <div>Rank</div>
          <div className="fw-bold">
            <span className="text-info">1200/</span>5265
          </div>
        </div>
        <MyChart />
        <div className="mt-2 ms-2 me-2 bottom-container fw-bold">
          <div className="d-flex p-1 justify-content-between text-info">
            <div>Correct</div>
            <div>{correctAns}</div>
          </div>
          <div className="d-flex p-1 justify-content-between text-danger">
            <div>Incorrect</div>
            <div>{incorrectAns}</div>
          </div>
          <div className="d-flex p-1 justify-content-between text-primary">
            <div>Unattemped</div>
            <div>{state?.unattemted}</div>
          </div>
          <div className="d-flex p-1 justify-content-between ">
            <div>Total Score</div>
            <div>50/100</div>
          </div>
        </div>
        <div className="d-flex ms-3 me-3 navbar fixed-bottom">
          <div
            onClick={handleSeeAnswers}
            className="text-decoration-none text-light flex-grow-1 btn btn-primary fixed-bottom m-2"
          >
            See Answers
          </div>
        </div>
      </div>
    );
};
