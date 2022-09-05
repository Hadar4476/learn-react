import React from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card/Card";
import CartItem from "./CartItem/CartItem";

import classes from "./Cart.module.css";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  const cartItemElements = items.map((i) => (
    <CartItem
      key={i.id}
      id={i.id}
      title={i.title}
      amount={i.amount}
      price={i.price}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemElements}</ul>
    </Card>
  );
};

export default Cart;
