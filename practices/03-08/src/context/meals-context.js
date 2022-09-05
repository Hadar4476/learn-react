import React, { useState } from "react";

const meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    amount: 1,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    amount: 1,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    amount: 1,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    amount: 1,
  },
];

const context = {
  meals: [],
  onChangeAmount: () => {},
};

const MealsContext = React.createContext(context);

export const MealsContextProvider = (props) => {
  const { children } = props;

  const [mealsState, setMeals] = useState(meals);

  const changeAmountHandler = (id, amount) => {
    setMeals((prevState) => {
      const updatedObject = [...prevState];
      const mealInMeals = updatedObject.findIndex((m) => m.id === id);
      updatedObject[mealInMeals].amount = amount;
      return [...updatedObject];
    });
  };

  return (
    <MealsContext.Provider
      value={{
        meals: mealsState,
        onChangeAmount: changeAmountHandler,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
