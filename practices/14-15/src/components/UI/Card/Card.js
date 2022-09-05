import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const { className, children } = props;

  return (
    <section className={`${classes.card} ${className}`}>{children}</section>
  );
};

export default Card;
