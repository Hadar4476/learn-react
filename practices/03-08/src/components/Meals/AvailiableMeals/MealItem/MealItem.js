import React from "react";

import MealItemForm from "./MealItemForm/MealItemForm";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { id, name, description, price, amount } = props;

  return (
    <li className={classes.meal}>
      <div className={classes["meal-info"]}>
        <h3 className={classes.name}>{name}</h3>
        <span className={classes.description}>{description}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <MealItemForm id={id} amount={amount} />
    </li>
  );
};

export default MealItem;
