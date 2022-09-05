import React from "react";

import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  const { text, author } = props;

  return (
    <figure className={classes.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
