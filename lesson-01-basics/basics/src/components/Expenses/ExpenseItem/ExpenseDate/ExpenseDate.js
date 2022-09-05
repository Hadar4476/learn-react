import React from "react";
import dateUtility from "../../../../utilities/date";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const { date } = props;

  const month = dateUtility.formatDateKey(date, "month");
  const day = dateUtility.formatDateKey(date, "day");
  const year = dateUtility.formatDateKey(date, "year");

  return (
    <div className="expense-date">
      <span className="expense-date__month">{month}</span>
      <span className="expense-date__day">{day}</span>
      <span className="expense-date__year">{year}</span>
    </div>
  );
};

export default ExpenseDate;
