import React, { Fragment } from "react";

import AvailiableMeals from "./AvailiableMeals/AvailiableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailiableMeals />
    </Fragment>
  );
};

export default Meals;
