import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem/QuoteItem";

import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, sortBy) => {
  return quotes.sort((curr, next) => {
    if (sortBy === "asc") {
      return curr.id > next.id ? 1 : -1;
    } else {
      return curr.id < next.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const { quotes } = props;

  const history = useHistory();
  const { pathname, search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const sortBy = queryParams.get("sortBy");

  const onSortQuotes = () => {
    const sortByQuery = sortBy === "asc" ? "desc" : "asc";

    // alternative syntax:
    // history.push({
    //   pathname,
    //   search: `?sortBy${sortByQuery}`,
    // });

    history.push(`${pathname}?sortBy=${sortByQuery}`);
  };

  const sortedQuotes = sortQuotes(quotes, sortBy);

  const quoteElements = sortedQuotes.map((quote) => (
    <QuoteItem
      key={quote.id}
      id={quote.id}
      author={quote.author}
      text={quote.text}
    />
  ));

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onSortQuotes}>
          Sort {sortBy === "asc" ? "Descending" : "Ascending "}
        </button>
      </div>
      <ul className={classes.list}>{quoteElements}</ul>
    </Fragment>
  );
};

export default QuoteList;
