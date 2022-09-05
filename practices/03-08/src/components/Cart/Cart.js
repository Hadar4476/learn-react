import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const { emitCloseModal } = props;
  const { cart } = useContext(CartContext);

  const [cartTotalPriceState, setCartTotalPrice] = useState(0);
  const fixedTotalPrice = cartTotalPriceState.toFixed(2);

  useEffect(() => {
    const cartTotalPrice = cart.reduce(
      (acc, m) => (acc += m.amount * m.price),
      0
    );
    setCartTotalPrice(cartTotalPrice);
  }, [cart]);

  const onOrderItems = () => {
    if (!cartTotalPriceState) {
      return;
    }

    console.log("Ordering...");
  };

  const emitCloseModalHandler = () => {
    emitCloseModal();
  };

  const cartItemElements = cart.map((m) => {
    return (
      <CartItem
        key={m.id}
        id={m.id}
        price={m.price}
        name={m.name}
        amount={m.amount}
      />
    );
  });

  return (
    <Modal emitCloseModal={emitCloseModalHandler}>
      <div className={classes["cart-items"]}>{cartItemElements}</div>
      <div className={classes.total}>
        <h2>Total Amount</h2>
        <h2>${fixedTotalPrice}</h2>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={emitCloseModalHandler}
        >
          Close
        </button>
        <button
          className={classes.button}
          onClick={onOrderItems}
          disabled={!cartTotalPriceState}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
