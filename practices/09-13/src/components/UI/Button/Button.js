import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const { type, text, className, disable, emitOnClick } = props;

  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={emitOnClick}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
