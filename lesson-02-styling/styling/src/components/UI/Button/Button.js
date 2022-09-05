import React from "react";

import styles from "./Button.module.scss";

const Button = (props) => {
  const { type, onClick, children } = props;
  const { Button } = styles;

  return (
    <button type={type} className={Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
