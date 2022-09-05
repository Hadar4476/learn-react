import { useContext } from "react";
import CartContext from "../../../context/cart-context";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, price, name, amount } = props;
  const { onIncreaseAmount, onDecreaseAmount } = useContext(CartContext);

  const fixedPrice = `$${price.toFixed(2)}`;

  const increaseAmountHandler = () => {
    onIncreaseAmount(id);
  };

  const decreaseAmountHandler = () => {
    onDecreaseAmount(id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{fixedPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={decreaseAmountHandler}>−</button>
        <button onClick={increaseAmountHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
