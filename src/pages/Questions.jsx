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
  const [review, setReview] = useState({ q0: false });
  console.log("review:", review);
  const [currentQ, setCurrentQ] = useState(0);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
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
    setAnsArr({ ...ansArr, [key]: "" });
  };

  const handleReview = () => {
    setReview({ ...review, [key]: !review[key] });
  };

  const handleSubmit = () => {
    console.log("submit is clicked");
  };
  console.log('ansArr:', ansArr)
  const conditionForCss = (val) => {
    if (val === currentQ) {
      console.log('currentQ:', currentQ)
      return "border border-info text-center bg-secondary"
    }else if (review["q"+val]) {
      return "border border-danger text-center bg-info"
    }else {
      return  "border border-info text-center "
    }

  }
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
        <div>{/* Timer <Timer timeInSec={50} /> */}</div>
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
              ? handleSubmit()
              : handleQuestionChange(1)
          }
          className="text-primary"
        >
          {currentQ + 1 === qArr.length ? "Submit" : "Next >"}
        </div>
      </div>
      {/* {ansArr.map((ans) =>  <div>{ans}</div>)} */}

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      {/* <Modal show={show} onHide={handleClose} placement="bottom">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <div className="d-flex p-1 justify-content-around">
          <div>Answred</div>
          <div>Unanswer</div>
        </div>
        <div className="d-flex justify-content-around">
          <div>Marked</div>
          <div>Active</div>
        </div>
        <Offcanvas.Body>
          
          {/*
        <div className="row">
               <div className={review["q"+0] === true ? "col border border-info bg-info" : "col border border-danger bg-danger"} onClick={()=>handleCurrentQuestion(0)}>{0}</div>
              </div> */}
          {/* {qArr.map((ele, i) =>{
            if ((i)%5 === 0){
            return  <div className="row">
              <div className={review["q"+i] === true ? "col border border-info bg-info" : "col border border-danger"} onClick={()=>handleCurrentQuestion(i)}>{i}</div>
              <div className="col border border-danger" onClick={()=>handleCurrentQuestion(i+1)}>{i+1}</div>
              <div className="col border border-danger" onClick={()=>handleCurrentQuestion(i+2)}>{i+2}</div>
              <div className="col border border-danger" onClick={()=>handleCurrentQuestion(i+3)}>{i+3}</div>
              <div className="col border border-danger" onClick={()=>handleCurrentQuestion(i+4)}>{i+4}</div> 
            </div>
            }
          })}
        */}
       
          {/* <div className="row">
            <div className="col border border-danger">1</div>
            <div className="col  border border-danger">2</div>
            <div className="col  border border-danger">3</div>
            <div className="col  border border-danger">4</div>
            <div className="col  border border-danger">5</div>
          </div>
          <div className="row">
            <div className="col  border border-danger bg-info">6</div>
            <div className="col  border border-danger" onClick={()=>handleCurrentQuestion(6)}>7</div>
            <div className="col  border border-danger">8</div>
            <div className="col  border border-danger">9</div>
            <div className="col  border border-danger">10</div>
          </div>
          <div className="row">
            <div className="col  border border-danger">11</div>
            <div className="col  border border-danger">12</div>
            <div className="col  border border-danger">13</div>
            <div className="col  border border-danger">14</div>
            <div className="col  border border-danger">15</div>
          </div>
          <div className="row">
            <div className="col  border border-danger" onClick={()=>handleCurrentQuestion(15)}>16</div>
            <div className="col  border border-danger">17</div>
            <div className="col  border border-danger">18</div>
            <div className="col  border border-danger">19</div>
            <div className="col  border border-danger">20</div>
          </div> */}
          <ul style={{listStyleType : "none", margin : "0", padding : "0"}}>
           {qArr.map((q, i)=>{
            return <li style={{width : "20%", display : "inline-block"}} className={conditionForCss(i)} onClick={()=>handleCurrentQuestion(i)}>{ansArr["q"+i] ? "* " : "# "}{i+1}</li>
           })}
           </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

/* 
  for(var i = 0; i < questions.length; i++){
    if ()
  }
*/
