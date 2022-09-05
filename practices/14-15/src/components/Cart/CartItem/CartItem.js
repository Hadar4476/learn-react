import React from "react";
import { useDispatch } from "react-redux";
import { globalActions } from "../../../store";

import classes from "./CartItem.module.css";

const { cart: actions } = globalActions;

const CartItem = (props) => {
  const { id, title, amount, price } = props;
  const dispatch = useDispatch();

  const total = amount * price;

  const onIncreaseAmount = () => {
    dispatch(actions.increaseAmount(id));
  };

  const onDecreaseAmount = () => {
    dispatch(actions.decreaseAmount(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDecreaseAmount}>-</button>
          <button onClick={onIncreaseAmount}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
