import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./TheHeader.module.css";

const TheHeader = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes["link-active"]}>
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes["link-active"]}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={classes["link-active"]}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TheHeader;
