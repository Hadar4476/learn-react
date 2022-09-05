import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const { label, type, value, name, isValid, onInputChangeHandler } = props;

  return (
    <div
      className={`${classes.control} ${value && !isValid && classes.invalid}`}
    >
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onInputChangeHandler}
      />
    </div>
  );
};

export default Input;
