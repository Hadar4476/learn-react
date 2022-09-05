import React, { useMemo } from "react";

import classes from "./Items.module.css";

const Items = (props) => {
  console.log("Items RUNNING");
  const { title, items } = props;

  const sortedItems = useMemo(() => {
    console.log("Items SORTED");
    return items.sort((curr, next) => curr - next);
  }, [items]);

  const itemElements = sortedItems.map((i) => {
    return <li key={i}>{i}</li>;
  });

  return (
    <div className={classes.items}>
      <h2>{title}</h2>
      <ul>{itemElements}</ul>
    </div>
  );
};

export default Items;
