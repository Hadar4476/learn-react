import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  const { label, value, maxValue } = props;

  let barFillHeight = "0%";

  if (maxValue) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <span className="chart-bar__label">{label}</span>
    </div>
  );
};

export default ChartBar;
