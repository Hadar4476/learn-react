import React, { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../../UI/Card/Card";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";

import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const { isLoading, onAddQuote } = props;

  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const isValid = Object.keys(quote).every((k) => quote[k].trim());

  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputChangeHandler = ({ target }) => {
    const { value, name } = target;

    setQuote((prevState) => {
      const updateState = { ...prevState };
      updateState[name] = value;

      return updateState;
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    const { text, author } = quote;

    const trimmedQuoteData = {
      text: text.trim(),
      author: author.trim(),
    };

    onAddQuote(trimmedQuoteData);
    setIsSubmitting(false);
  };

  const spinnerRenderer = isLoading && (
    <div className={classes.loading}>
      <LoadingSpinner />
    </div>
  );

  const shouldTriggerPrompt = Object.keys(quote).some((k) => quote[k]);

  return (
    <Fragment>
      <Prompt
        when={!isSubmitting && shouldTriggerPrompt}
        message={(location) => "Are you sure you want to leave?"}
      />
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {spinnerRenderer}
          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              id="author"
              name="author"
              type="text"
              value={quote.author}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              name="text"
              rows="5"
              value={quote.text}
              onChange={inputChangeHandler}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button
              className="btn"
              onClick={() => setIsSubmitting(true)}
              disabled={!isValid}
            >
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
