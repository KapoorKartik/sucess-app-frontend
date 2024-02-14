import React, { useEffect, useState } from "react";
import { Tile } from "../components/test/Tile";
import SearchBox from "../components/SearchBox";
import { Link } from "react-router-dom";
import axios from "../utils/axios";

export const ExamListing = () => {
  // let arr = [
  //   {
  //     subject: "HP JOA IT",
  //     validity: "11 Months",
  //     totalTest: "8",
  //     testCode: "T1",
  //   },
  //   {
  //     subject: "HP Cooprative Bank",
  //     validity: "1 Months",
  //     totalTest: "13",
  //     testCode: "T2",
  //   },
  //   {
  //     subject: "HP Allied Services",
  //     validity: "3 Months",
  //     totalTest: "15",
  //     testCode: "T3",
  //   },
  //   {
  //     subject: "HP Constable 2020",
  //     validity: "5 Months",
  //     totalTest: "10",
  //     testCode: "T1",
  //   },
  //   {
  //     subject: "HP Police Constable 2020",
  //     validity: "6 Months",
  //     totalTest: "12",
  //     testCode: "T1",
  //   },
  //   {
  //     subject: "HP TET (Medical)",
  //     validity: "2 Months",
  //     totalTest: "6",
  //     testCode: "T1",
  //   },
  //   {
  //     subject: "HP TET (Non-Medical)",
  //     validity: "5 Months",
  //     totalTest: "4",
  //     testCode: "T1",
  //   },
  //   {
  //     subject: "HP TET (Arts)",
  //     validity: "2 Months",
  //     totalTest: "9",
  //     testCode: "T1",
  //   },
  // ];
  const [arr, setArr] = useState([]);
  const fetchExamData = async () => {
    try {
      // const res = await axios.get("exam-list/");
      const { data } = await axios.get("http://localhost/api/exam-list/");
      setArr(data.res);
      console.log("arr:", arr);
      // console.log("data:", data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => fetchExamData, []);
  // fetchExamData()

  return (
    <>
      <div className="sticky-top  text-start d-flex bg-light py-2">
        <Link to="/">
          <img
            className="ms-2"
            width="28"
            height="28"
            src="https://img.icons8.com/small/28/0d6efd/long-arrow-left.png"
            alt="l"
          />
        </Link>
        <div className="ms-2 fw-bold text-primary">Test Series</div>
      </div>
      <SearchBox />

      {arr?.map(({ subject, validity, totalTest, testCode }, i) => {
        return (
          <Tile
            key={subject}
            subject={subject}
            validity={validity}
            totalTest={totalTest}
            testCode={testCode}
            isLast={arr.length - 1 === i} //* check if the current element is last element of the arr or not
          />
        );
      })}
    </>
  );
};
