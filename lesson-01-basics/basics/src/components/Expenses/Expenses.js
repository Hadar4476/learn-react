import React, { useState } from "react";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = (props) => {
  const { expenses, deleteExpenseItem } = props;

  const [selectedYearState, setSelectedYear] = useState("2020");

  const selectYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === selectedYearState
  );

  const expensesElements = filteredExpenses.map((e) => {
    return (
      <ExpenseItem
        key={e.id}
        id={e.id}
        date={e.date}
        title={e.title}
        amount={e.amount}
        deleteExpenseItem={deleteExpenseItem}
      />
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter
          selectedYear={selectedYearState}
          selectYear={selectYear}
        />
        {expensesElements.length ? expensesElements : <p>No expenses found.</p>}
      </Card>
    </div>
  );
};

export default Expenses;
