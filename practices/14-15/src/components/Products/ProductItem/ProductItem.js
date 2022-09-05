import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../../store";

import Card from "../../UI/Card/Card";

import classes from "./ProductItem.module.css";

const { cart: actions } = globalActions;

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      amount: 1,
    };

    dispatch(actions.addProduct(product));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
