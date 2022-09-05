import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../../store";

import classes from "./CartButton.module.css";

const { cart: actions } = globalActions;

const CartButton = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = items.reduce((acc, i) => acc + i.amount, 0);

  const onToggleCartModal = () => {
    dispatch(actions.toogleCart());
  };

  return (
    <button className={classes.button} onClick={onToggleCartModal}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
