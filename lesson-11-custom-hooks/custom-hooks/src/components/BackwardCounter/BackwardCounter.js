import React from "react";
import useCounter from "../../hooks/use-counter";

import Card from "../UI/Card/Card";

const BackwardCounter = () => {
  const counter = useCounter("decrease");

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
