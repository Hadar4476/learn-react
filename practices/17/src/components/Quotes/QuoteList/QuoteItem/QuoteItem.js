import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  const { id, text, author } = props;

  const { path } = useRouteMatch();

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link className="btn" to={`${path}/${id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
