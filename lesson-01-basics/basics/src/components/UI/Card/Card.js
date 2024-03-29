import React from "react";

import "./Card.css";

const Card = (props) => {
  const { children, className } = props;

  const classes = ["card", className].join(" ");

  return <div className={classes}>{children}</div>;
};

export default Card;
