import React from "react";

import Chart from "../../Chart/Chart";

const ExpensesChart = (props) => {
  const { expenses } = props;

  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].value += expense.amount;
  }

  return <Chart chartData={chartData} />;
};

export default ExpensesChart;
