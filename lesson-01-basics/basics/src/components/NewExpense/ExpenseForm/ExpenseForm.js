import React from "react";
import dateUtility from "../../../utilities/date";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const {
    title,
    amount,
    date,
    newExpenseKeyChangeHandler,
    addNewExpenseItem,
    hideExpenseForm,
  } = props;

  const inputChangeHandler = ({ target }) => {
    const { name, value, type } = target;
    let valueToSend = value;

    if (type === "number") {
      valueToSend = +value;
    } else if (type === "date") {
      valueToSend = new Date(value);
    }

    newExpenseKeyChangeHandler(name, valueToSend);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    addNewExpenseItem();
  };

  const dateValue = date ? dateUtility.formatDate(date) : date;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateValue}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={hideExpenseForm}>Cancel</button>
        <button type="submit" disabled={!dateValue}>
          Add expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
