import React from "react";

const Button = (props) => {
  const { number, text, emitClick } = props;

  console.log(`Button #${number} RUNNING`);

  return <button onClick={emitClick}>{text}</button>;
};

export default React.memo(Button); // Check console to see if Button RUNNING is displayed
