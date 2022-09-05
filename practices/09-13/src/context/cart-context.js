import React, { useContext, useState } from "react";

import MealsContext from "./meals-context";

const context = {
  cart: [],
  setCart: () => {},
  onAddToCart: () => {},
  onUpdateCartItemAmount: () => {},
  onIncreaseAmount: () => {},
  onDecreaseAmount: () => {},
};

const CartContext = React.createContext(context);

export const CartContextProvider = (props) => {
  const { children } = props;
  const { meals } = useContext(MealsContext);

  const [cartState, setCart] = useState([]);

  const addToCartHandler = (id) => {
    setCart((prevState) => {
      const meal = meals.find((m) => m.id === id);
      return [...prevState, { ...meal }];
    });
  };

  const updateCartItemAmountHandler = (id, amount) => {
    setCart((prevState) => {
      const updatedObject = [...prevState];
      const mealInCart = updatedObject.findIndex((m) => m.id === id);
      updatedObject[mealInCart].amount += amount;
      return [...updatedObject];
    });
  };

  const increaseAmountHandler = (id) => {
    setCart((prevState) => {
      const updatedObject = [...prevState];
      const mealInCart = updatedObject.findIndex((m) => m.id === id);
      updatedObject[mealInCart].amount++;
      return [...updatedObject];
    });
  };

  const decreaseAmountHandler = (id) => {
    setCart((prevState) => {
      const updatedObject = [...prevState];
      const mealInCart = updatedObject.findIndex((m) => m.id === id);
      updatedObject[mealInCart].amount--;

      if (!updatedObject[mealInCart].amount) {
        const filteredCart = prevState.filter((m) => m.id !== id);
        return [...filteredCart];
      }

      return [...updatedObject];
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        setCart,
        onAddToCart: addToCartHandler,
        onUpdateCartItemAmount: updateCartItemAmountHandler,
        onIncreaseAmount: increaseAmountHandler,
        onDecreaseAmount: decreaseAmountHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
