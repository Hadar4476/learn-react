import React, { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const { onLogin } = props;

  const user = {
    email: "",
    password: "",
  };

  const inputsValidity = {
    email: false,
    password: false,
  };

  const [userState, setUser] = useState(user);
  const [inputsValidityState, setInputsValidity] = useState(inputsValidity);
  const [isValid, setIsValid] = useState(false);

  const onInputChangeHandler = ({ target }) => {
    const { value, name } = target;

    setUser((prevState) => {
      const updatedState = { ...prevState };
      updatedState[name] = value;
      return updatedState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(userState);
  };

  const { email, password } = userState;

  // useEffect duplication because I don't want useEffect to run on every userState prop change:

  useEffect(() => {
    setInputsValidity((prevState) => {
      const updatedState = { ...prevState };
      updatedState.email = email.includes("@");

      return updatedState;
    });
  }, [email]);

  useEffect(() => {
    setInputsValidity((prevState) => {
      const updatedState = { ...prevState };
      updatedState.password = password.trim().length > 6;

      return updatedState;
    });
  }, [password]);

  useEffect(() => {
    // Simulates a situation when the data of inputs values should be used only
    // after a certain time
    const timeout = setTimeout(() => {
      const isValid = Object.keys(inputsValidityState).every(
        (key) => inputsValidityState[key]
      );

      setIsValid(isValid);
    }, 500);

    // This function will run before the above code but not when effect is first initialized
    return () => {
      clearTimeout(timeout);
    };
  }, [inputsValidityState]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            userState.email && !inputsValidityState.email && classes.invalid
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userState.email}
            onChange={onInputChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            userState.password &&
            !inputsValidityState.password &&
            classes.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userState.password}
            onChange={onInputChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!isValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
