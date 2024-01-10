import React, { useEffect, useState } from "react";
import Timer from "../components/Timer";
import { useLocation, useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { ReactComponent as AppI } from "../icons/app_icon.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export const Questions = () => {
  const { mockId } = useParams();
  const [qArr, setQarr] = useState([]);
  const [ansArr, setAnsArr] = useState({});
  const [review, setReview] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [show, setShow] = useState();
  const [showModal, setShowModal] = useState(false);
  const [timeInSec, setTimeInSec] = useState();
  const [visited, setVisited] = useState({});
  const handleClose = () => setShow(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShow = () => setShow(true);
  let key = "q" + currentQ;

  // console.log("mockID:", mockId);

  const getQuestionsByMockId = (mockId) => {
    let questionsArray = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
          "William Shakespeare",
          "Jane Austen",
          "Charles Dickens",
          "Mark Twain",
        ],
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Mars"],
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Helium"],
      },
      {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1920", "1931"],
      },
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Leonardo da Vinci",
          "Vincent van Gogh",
          "Pablo Picasso",
          "Claude Monet",
        ],
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yen", "Euro", "Dollar", "Pound"],
      },
      {
        question: "What is the capital of Australia?",
        options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
      },
      {
        question: "Who is known as the 'Father of Computer Science'?",
        options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Ada Lovelace"],
      },
      {
        question: "What is the square root of 144?",
        options: ["12", "10", "8", "14"],
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the national flower of Japan?",
        options: ["Cherry Blossom", "Rose", "Tulip", "Orchid"],
      },
      {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: [
          "Harper Lee",
          "J.K. Rowling",
          "George Orwell",
          "Ernest Hemingway",
        ],
      },
      {
        question: "In which year did the Berlin Wall fall?",
        options: ["1989", "1991", "1975", "1995"],
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
      },
      {
        question: "Who discovered penicillin?",
        options: [
          "Alexander Fleming",
          "Marie Curie",
          "Louis Pasteur",
          "Joseph Lister",
        ],
      },
      {
        question: "What is the world's largest ocean?",
        options: [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
        ],
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["Japan", "China", "South Korea", "Vietnam"],
      },
      {
        question: "Who invented the telephone?",
        options: [
          "Alexander Graham Bell",
          "Thomas Edison",
          "Nikola Tesla",
          "Guglielmo Marconi",
        ],
      },
      {
        question: "What is the speed of light?",
        options: [
          "299,792 kilometers per second",
          "150,000 kilometers per second",
          "200,000 kilometers per second",
          "250,000 kilometers per second",
        ],
      },
      {
        question: "What is the world's largest ocean?",
        options: [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
        ],
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["Japan", "China", "South Korea", "Vietnam"],
      },
      {
        question: "Who invented the telephone?",
        options: [
          "Alexander Graham Bell",
          "Thomas Edison",
          "Nikola Tesla",
          "Guglielmo Marconi",
        ],
      },
      {
        question: "What is the speed of light?",
        options: [
          "299,792 kilometers per second",
          "150,000 kilometers per second",
          "200,000 kilometers per second",
          "250,000 kilometers per second",
        ],
      },
    ];

    if (mockId === "m1") {
      setQarr(questionsArray);
      setTimeInSec(10);
      // setVisited(qArr.length - 1 )
    }
  };
  useEffect(() => getQuestionsByMockId(mockId), []);
  const handleQuestionChange = (val) => {
    setCurrentQ((previous) => {
      if (previous + val === qArr.length || previous + val < 0) {
        return previous;
      } else {
        return previous + val;
      }
    });
  };
  useEffect(() => {
    setVisited({ ...visited, [key]: true });
  }, [currentQ]);

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

  const handleCurrentQuestion = (val) => {
    if (val <= qArr.length) {
      setCurrentQ(val);
      setShow(false);
    }
  };
  const handleClearResponse = () => {
    // Create a copy of the current state
    const updatedAnsArr = { ...ansArr };
    // Remove the specified key
    delete updatedAnsArr[key];
    // Update the state with the modified object
    setAnsArr(updatedAnsArr);
  };

  const handleReview = () => {
    setReview({ ...review, [key]: !review[key] });
  };

  const handleSubmit = () => {
    console.log("submit is clicked");
  };
  console.log("ansArr:", ansArr);
  const conditionForCss = (val) => {
    if (val === currentQ) {
      console.log("currentQ:", currentQ);
      return "border border-info text-center bg-secondary  text-light";
    } else if (review["q" + val]) {
      return "border border-danger text-center bg-info";
    } else {
      return "border border-info text-center ";
    }
  };

  const timerOver = () => {
    // alert("Time is Over");
    setShowModal(true);
  };
  console.log('qArr?.length - Object.keys(visited)?.length:', qArr?.length - Object.keys(visited)?.length)
  console.log('visited:', visited)
  console.log('qArr?.length:', qArr?.length)

  return (
    <>
      <nav className="navbar navbar-light bg-primary liner-gradient mb-2 mx-0">
        <div className="container-fluid text-white">HP JOA IT</div>
      </nav>
      {/* <div>{review[key] ? "Marked for review" : null}</div> */}
      <div className="p-2 mb-2 mt-1 mx-2 bg-body rounded text-start d-flex justify-content-between">
        <div>
          {currentQ + 1} of {qArr.length}
        </div>
        <div>
          Time{" "}
          {timeInSec ? (
            <Timer timeInSec={timeInSec} timerOver={timerOver} />
          ) : (
            "...loading"
          )}
        </div>
        <div>+1 -0.25</div>
      </div>

      <Question
        questionObj={qArr[currentQ]}
        setAnsArr={setAnsArr}
        currentQ={currentQ}
        ansArr={ansArr}
      />
      <div className="d-flex justify-content-start mt-3 mx-2">
        <div
          onClick={handleClearResponse}
          className="border border-primary text-primary rounded-pill p-2 me-2"
          style={{ fontSize: "12px" }}
        >
          Clear Response
        </div>
        <div
          onClick={handleReview}
          className="border border-primary text-primary rounded-pill p-2"
          style={{ fontSize: "12px" }}
        >
          {review[key] === true ? "Unmarked for review" : "Marked for review"}
        </div>
      </div>

      {/* {ansArr.map((ans) =>  <div>{ans}</div>)} */}

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex p-1 justify-content-between text-info">
            <div>Answered</div>
            <div>{Object.keys(ansArr).length}</div>
          </div>
          <div className="d-flex p-1 justify-content-between text-danger">
            <div>Unanswered</div>
            <div>{qArr.length - Object.keys(ansArr).length}</div>
          </div>
          <div className="d-flex p-1 justify-content-between text-warning">
            <div>Mark For Review</div>
            <div>{Object.keys(review).length}</div>
          </div>
          <div className="d-flex p-1 justify-content-between">
            <div>Not Visited</div>
            <div>{qArr?.length - Object.keys(visited)?.length}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleCloseModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <div className="d-flex p-1 justify-content-around">
          <div>* Answred</div>
          <div># Unanswer</div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="bg-info">Marked</div>
          <div className="bg-secondary">Active</div>
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
          <AppI />
        </div>
        <div>|</div>
        <div
          onClick={() =>
            currentQ + 1 === qArr.length
              ? timerOver()
              : handleQuestionChange(1)
          }
          className="text-primary"
        >
          {currentQ + 1 === qArr.length ? "Submit" : "Next >"}
        </div>
      </div>
    </>
  );
};

/* 
  for(var i = 0; i < questions.length; i++){
    if ()
  }
*/
