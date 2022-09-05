import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import useHttp from "../../hooks/use-http";

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import Input from "../UI/Input/Input";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const { emitCloseModal } = props;
  const { cart, setCart } = useContext(CartContext);

  const form = [
    {
      id: "name",
      label: "Your name",
      type: "text",
      value: "",
      isTouched: false,
      isValid: false,
      error: "Name must not be empty.",
    },
    {
      id: "address",
      label: "Your address",
      type: "text",
      value: "",
      isTouched: false,
      isValid: false,
      error: "Address must not be empty.",
    },
  ];

  const [cartTotalPriceState, setCartTotalPrice] = useState(0);
  const fixedTotalPrice = cartTotalPriceState.toFixed(2);

  const [formState, setFormState] = useState(form);
  const isFormValid = formState.every((i) => i.isValid);

  useEffect(() => {
    const cartTotalPrice = cart.reduce(
      (acc, m) => (acc += m.amount * m.price),
      0
    );
    setCartTotalPrice(cartTotalPrice);
  }, [cart]);

  const { sendRequest } = useHttp();

  const validateInput = (value, name, type) => {
    let isValid = Boolean(value);

    return isValid;
  };

  const onInputChange = ({ target }) => {
    const { value, name, type } = target;
    const trimmedValue = value.trim();

    setFormState((prevState) => {
      const updatedState = [...prevState];
      const inputIndex = updatedState.findIndex((i) => i.id === name);
      updatedState[inputIndex].value = trimmedValue;

      updatedState[inputIndex].isValid = validateInput(
        trimmedValue,
        name,
        type
      );

      return updatedState;
    });
  };

  const onInputBlur = ({ target }) => {
    const { name } = target;

    setFormState((prevState) => {
      const updatedState = [...prevState];
      const inputIndex = updatedState.findIndex((i) => i.id === name);
      updatedState[inputIndex].isTouched = true;

      return updatedState;
    });
  };

  const emitCloseModalHandler = () => {
    emitCloseModal();
  };

  const onOrderItems = (event) => {
    event.preventDefault();

    setFormState((prevState) => {
      const updatedState = prevState.map((i) => {
        return {
          ...i,
          isTouched: true,
        };
      });

      return updatedState;
    });

    if (!cartTotalPriceState || !isFormValid) {
      return;
    }

    const user = {};

    formState.forEach((i) => {
      user[i.id] = i.value;
    });

    const order = {
      user,
      items: cart,
      createDate: new Date().toISOString(),
    };

    const orderSentHandler = (data) => {
      if (data && data.name) {
        setCart([]);
        setFormState(form);
        emitCloseModalHandler();
      }
    };

    sendRequest(
      {
        url: "https://meals-shop-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: order,
      },
      orderSentHandler
    );
  };

  const cartItemElements = cart.map((m) => (
    <CartItem
      key={m.id}
      id={m.id}
      price={m.price}
      name={m.name}
      amount={m.amount}
    />
  ));

  const inputElements = formState.map((i) => {
    const shouldDisplayInputError = i.isTouched && !i.isValid;

    return (
      <Input
        key={i.id}
        label={i.label}
        id={i.id}
        type={i.type}
        value={i.value}
        isTouched={i.isTouched}
        isValid={i.isValid}
        error={i.error}
        className={`${classes["form-control"]} ${
          shouldDisplayInputError && classes.invalid
        }`}
        emitOnChange={onInputChange}
        emitOnBlur={onInputBlur}
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
      <form onSubmit={onOrderItems}>
        {inputElements}
        <div className={classes.actions}>
          <button
            type="button"
            className={classes["button--alt"]}
            onClick={emitCloseModalHandler}
          >
            Close
          </button>
          <button
            type="submit"
            className={classes.button}
            onClick={onOrderItems}
            disabled={!cartTotalPriceState || !isFormValid}
          >
            Order
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Cart;
