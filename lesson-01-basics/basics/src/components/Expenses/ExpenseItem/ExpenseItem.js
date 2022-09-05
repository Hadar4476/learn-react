import React from "react";

import Card from "../../UI/Card/Card";
import ExpenseDate from "./ExpenseDate/ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { id, date, title, amount, deleteExpenseItem } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__price">${amount}</span>
      </div>
      <button onClick={() => deleteExpenseItem(id)}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
