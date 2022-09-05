import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const { field, id, type, value, min, emitOnChange } = props;

  const labelText = field[0].toUpperCase() + field.slice(1, field.length);

  return (
    <div className={classes.input}>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        min={min}
        onChange={emitOnChange}
      />
    </div>
  );
};

export default Input;
