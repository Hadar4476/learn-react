import React, { useContext } from "react";
import MealsContext from "../../../context/meals-context";

import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";

import classes from "./AvailableMeals.module.css";

const AvailiableMeals = () => {
  const { meals } = useContext(MealsContext);

  const mealsElements = meals.map((m) => {
    return (
      <MealItem
        key={m.id}
        id={m.id}
        name={m.name}
        description={m.description}
        price={m.price}
        amount={m.amount}
      />
    );
  });

  return (
    <Card className={classes.meals}>
      <ul>{mealsElements}</ul>
    </Card>
  );
};

export default AvailiableMeals;
