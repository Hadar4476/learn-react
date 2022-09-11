import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const { displayState, emitClose } = props;

  return (
    <div
      className={`Backdrop Backdrop-${displayState}`}
      onClick={emitClose}
    ></div>
  );
};

export default backdrop;
