import React from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/Quotes/QuoteForm/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const onAddQuote = (quoteData) => {
    console.log(quoteData);

    history.push("/");
  };

  return <QuoteForm onAddQuote={onAddQuote} />;
};

export default NewQuote;
