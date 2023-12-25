import React from "react";
import { Tile } from "./Tile";
import SearchBox from "../SearchBox";

export const Test = () => {
  const arr = [
    { subject: "HP joa it", validity: "11 Months", totalTest: "8" },
    { subject: "HP Cooprative Bank", validity: "11 Months", totalTest: "13" },
    { subject: "HP Allied Services", validity: "11 Months", totalTest: "15" },
    { subject: "HP Constable 2020", validity: "11 Months", totalTest: "10" },
    {
      subject: "HP Police Constable 2020",
      validity: "11 Months",
      totalTest: "12",
    },
    { subject: "HP TET (Medical)", validity: "11 Months", totalTest: "6" },
    { subject: "HP TET (Non-Medical)", validity: "11 Months", totalTest: "4" },
    { subject: "HP TET (Arts)", validity: "11 Months", totalTest: "9" },
    { subject: "HP joa it", validity: "11 Months", totalTest: "12" },
  ];
  return (
    <>
      <SearchBox />

      {arr?.map(({ subject, validity, totalTest }, i) => {
        //  console.log('item:', item)
        return (
          <Tile
            subject={subject}
            validity={validity}
            totalTest={totalTest}
            isLast={arr.length - 1 === i}
          />
        );
      })}
    </>
  );
};
