import React, { useEffect, useState } from "react";
import Timer from "../components/Timer";
import { useLocation, useParams } from "react-router-dom";
import { Question } from "../components/Question";

export const Questions = () => {
  const { mockId } = useParams();
  const [qArr, setQarr] = useState([]);
  const [ansArr, setAnsArr] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  // console.log("mockID:", mockId);

  console.log("ansArr:", ansArr);
  const getQuestionsByMockId = (mockId) => {
    let questionsArray = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
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
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
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
        options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Ernest Hemingway"],
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
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Joseph Lister"],
      },
      {
        question: "What is the world's largest ocean?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["Japan", "China", "South Korea", "Vietnam"],
      },
      {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
      },
      {
        question: "What is the speed of light?",
        options: ["299,792 kilometers per second", "150,000 kilometers per second", "200,000 kilometers per second", "250,000 kilometers per second"],
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
  return (
    <>
      <nav className="navbar navbar-light bg-primary liner-gradient mb-2 mx-0">
        <div className="container-fluid text-white">HP JOA IT</div>
      </nav>
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

      <div class="d-flex justify-content-between mt-2 mx-2">
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
      {/* {ansArr.map((ans) =>  <div>{ans}</div>)} */}
    </>
  );
};
