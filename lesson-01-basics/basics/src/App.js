import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expensesState, setExpenses] = useState(expenses);

  const deleteExpenseItem = (id) => {
    setExpenses((prevState) => {
      return prevState.filter((e) => e.id !== id);
    });
  };

  const addNewExpenseItem = (item) => {
    setExpenses((prevState) => {
      const id = "e" + (prevState.length + 1);
      const newItem = {
        id,
        ...item,
      };
      return [...prevState, newItem];
    });
  };

  return (
    <div>
      <NewExpense addNewExpenseItem={addNewExpenseItem} />
      <Expenses
        expenses={expensesState}
        deleteExpenseItem={deleteExpenseItem}
      />
    </div>
  );
};

export default App;
