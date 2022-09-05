import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const {
    label,
    id,
    type,
    value,
    isTouched,
    isValid,
    error,
    min,
    className,
    emitOnChange,
    emitOnBlur,
  } = props;

  const shouldDisplayInputError = isTouched && !isValid;

  const errorElement = shouldDisplayInputError && (
    <p className={classes.error}>{error}</p>
  );

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        min={min}
        onChange={emitOnChange}
        onBlur={emitOnBlur}
      />
      {errorElement}
    </div>
  );
};

export default Input;
