import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

import mealsImage from "../../assets/images/meals.jpg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals-image" />
      </div>
    </Fragment>
  );
};

export default Header;
