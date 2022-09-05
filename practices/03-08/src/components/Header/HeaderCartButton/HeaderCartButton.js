import React, { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../../../context/cart-context";

import Cart from "../../Cart/Cart";
import CartIcon from "../../UI/CartIcon/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const [cartItemsAmountState, setCartItemsAmount] = useState(0);
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);
  const [shouldBump, setShouldBump] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const cartItemsAmount = cart.reduce((acc, m) => acc + m.amount, 0);
    setCartItemsAmount(cartItemsAmount);
    setShouldBump(true);

    setTimeout(() => {
      setShouldBump(false);
    }, 300);
  }, [cart]);

  const displayModal = () => {
    setShouldDisplayModal(true);
  };

  const closeModal = () => {
    setShouldDisplayModal(false);
  };

  const cartRenderer = shouldDisplayModal && (
    <Cart emitCloseModal={closeModal} />
  );

  return (
    <Fragment>
      <div className={classes.button} onClick={displayModal}>
        <CartIcon className={classes.icon} />
        <span>Your Cart</span>
        <span className={`${classes.badge} ${shouldBump && classes.bump}`}>
          {cartItemsAmountState}
        </span>
      </div>
      {cartRenderer}
    </Fragment>
  );
};

export default HeaderCartButton;
