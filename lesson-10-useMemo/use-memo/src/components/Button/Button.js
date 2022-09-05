import React from "react";

const Button = (props) => {
  console.log("Button RUNNING");

  const { text, emitClick } = props;

  return <button onClick={emitClick}>{text}</button>;
};

export default React.memo(Button);
