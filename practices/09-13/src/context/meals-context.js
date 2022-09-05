import React, { useEffect, useState } from "react";

import useHttp from "../hooks/use-http";

const context = {
  meals: [],
  onChangeAmount: () => {},
};

const MealsContext = React.createContext(context);

export const MealsContextProvider = (props) => {
  const { children } = props;

  const [mealsState, setMeals] = useState([]);
  const { sendRequest } = useHttp();

  useEffect(() => {
    const initMeals = (data) => {
      if (Object.keys(data).length) {
        const transformedMeals = [];

        for (const key in data) {
          const mealObj = {
            id: key,
            ...data[key],
          };

          transformedMeals.push(mealObj);
        }

        setMeals(transformedMeals);
      }
    };

    sendRequest(
      {
        url: "https://meals-shop-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      initMeals
    );
  }, [sendRequest]);

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
