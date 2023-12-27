import React from "react";
import { Tile } from "./Tile";
import SearchBox from "../SearchBox";

export const Test = () => {
  const arr = [
    { subject: "HP JOA IT", validity: "11 Months", totalTest: "8" },
    { subject: "HP Cooprative Bank", validity: "1 Months", totalTest: "13" },
    { subject: "HP Allied Services", validity: "3 Months", totalTest: "15" },
    { subject: "HP Constable 2020", validity: "5 Months", totalTest: "10" },
    {
      subject: "HP Police Constable 2020",
      validity: "6 Months",
      totalTest: "12",
    },
    { subject: "HP TET (Medical)", validity: "2 Months", totalTest: "6" },
    { subject: "HP TET (Non-Medical)", validity: "5 Months", totalTest: "4" },
    { subject: "HP TET (Arts)", validity: "2 Months", totalTest: "9" },
  ];
  return (
    <>
    <div className="sticky-top  text-start d-flex bg-light py-2">
      <img className="ms-2" width="28" height="28" src="https://img.icons8.com/small/28/0d6efd/long-arrow-left.png" alt="l"/>
      <div className="ms-2 fw-bold text-primary">Test Series</div>
    </div>
      <SearchBox />

      {arr?.map(({ subject, validity, totalTest }, i) => {
        return (
          <Tile
          key={subject}
            subject={subject}
            validity={validity}
            totalTest={totalTest}
            isLast={arr.length - 1 === i} //* check if the current element is last element of the arr or not
          />
        );
      })}
    </>
  );
};
