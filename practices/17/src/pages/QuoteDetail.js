import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/Quotes/HighlightedQuote/HighlightedQuote";
import Comments from "../components/Comments/Comments";

const quotes = [
  { id: "q1", author: "Authour #1", text: "Text from quote #1" },
  { id: "q2", author: "Authour #2", text: "Text from quote #2" },
  { id: "q3", author: "Authour #3", text: "Text from quote #3" },
  { id: "q4", author: "Authour #4", text: "Text from quote #4" },
  { id: "q5", author: "Authour #5", text: "Text from quote #5" },
];

const QuoteDetail = () => {
  const { id } = useParams();
  const quote = quotes.find((q) => q.id === id);

  const { url, path } = useRouteMatch();

  if (!quote) {
    return <p>No quote found</p>;
  }

  const { text, author } = quote;

  return (
    <div>
      <HighlightedQuote text={text} author={author} />
      <Route exact path={path}>
        <div className="centered">
          <Link className="btn--flat" to={`${url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${path}/comments`} component={Comments} />
    </div>
  );
};

export default QuoteDetail;
