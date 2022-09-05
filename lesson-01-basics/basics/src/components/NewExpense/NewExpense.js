import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const { addNewExpenseItem } = props;

  const newExpense = {
    title: "",
    amount: "",
    date: "",
  };

  const [newExpenseState, setNewExpense] = useState(newExpense);

  const [shouldDisplayFormState, setShouldDisplayForm] = useState(false);

  const newExpenseKeyChangeHandler = (key, value) => {
    setNewExpense((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const addNewExpenseItemHandler = () => {
    addNewExpenseItem(newExpenseState);
    setNewExpense(newExpense);
    hideExpenseForm();
  };

  const hideExpenseForm = () => {
    setShouldDisplayForm(false);
  };

  const displayExpenseForm = () => {
    setShouldDisplayForm(true);
  };

  const expenseFormContent = shouldDisplayFormState ? (
    <ExpenseForm
      title={newExpenseState.title}
      amount={newExpenseState.amount}
      date={newExpenseState.date}
      newExpenseKeyChangeHandler={newExpenseKeyChangeHandler}
      addNewExpenseItem={addNewExpenseItemHandler}
      hideExpenseForm={hideExpenseForm}
    />
  ) : (
    <button className="new-expense__actions" onClick={displayExpenseForm}>
      Add new expense
    </button>
  );

  return <div className="new-expense">{expenseFormContent}</div>;
};

export default NewExpense;
