import React from "react";

import Timer from "./Timer";

const data = [
  {
    key: "age",
    label: "Current Age",
    value: <Timer startingTime={new Date("2001-08-26T03:08:00")} />,
  },
  {
    key: "experince",
    label: "Experience",
    value: <Timer startingTime={new Date("2019-03-10T09:24:00")} />,
  },
  {
    key: "current location",
    label: "Current Location",
    value: "Faridabad, Haryana INDIA",
  },
];

export default data;
