import React from "react";

import ChartBar from "./ChartBar/ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const { chartData } = props;

  const values = chartData.map((i) => i.value);
  const totalMaximum = Math.max(...values);

  const chartDataElements = chartData.map((i) => {
    return (
      <ChartBar
        key={i.label}
        label={i.label}
        value={i.value}
        maxValue={totalMaximum}
      />
    );
  });

  return <div className="chart">{chartDataElements}</div>;
};

export default Chart;
