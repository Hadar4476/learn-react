import React from "react";

import "./Modal.css";

const modal = (props) => {
  const { displayState, emitClose } = props;

  return (
    <div className={`Modal Modal-${displayState}`}>
      <h1>A Modal</h1>
      <button className="Button" onClick={emitClose}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
