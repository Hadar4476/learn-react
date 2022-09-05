import React, { useContext, useEffect, useState } from "react";
import MealsContext from "../../../../../context/meals-context";
import CartContext from "../../../../../context/cart-context";

import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const { id, amount } = props;

  const { onChangeAmount } = useContext(MealsContext);
  const { cart, onAddToCart, onUpdateCartItemAmount } = useContext(CartContext);

  const [shouldDisable, setShouldDisable] = useState(false);

  const onChange = ({ target }) => {
    const { value } = target;
    onChangeAmount(id, +value);
  };

  const onSubmitAmount = (event) => {
    event.preventDefault();
    if (!amount) {
      return;
    }

    const mealInCart = cart.find((m) => m.id === id);
    if (mealInCart) {
      return onUpdateCartItemAmount(id, amount);
    }

    onAddToCart(id);
  };

  useEffect(() => {
    setShouldDisable(amount > 0);
  }, [amount]);

  return (
    <form onSubmit={onSubmitAmount}>
      <Input
        label="Amount"
        id={`amount_${id}`}
        type="number"
        value={amount}
        min="1"
        className={classes.input}
        emitOnChange={onChange}
      />
      <Button type="submit" text="+ Add" disable={!shouldDisable} />
    </form>
  );
};

export default MealItemForm;
