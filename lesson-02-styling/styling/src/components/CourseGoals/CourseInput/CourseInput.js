import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.scss";

const CourseInput = (props) => {
  const { onAddGoal } = props;
  const { FormControl, Invalid } = styles;

  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = ({ target }) => {
    const { value } = target;

    if (value.trim().length) {
      setIsValid(true);
    }

    setEnteredValue(value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredValue.trim().length) {
      setIsValid(false);
      return;
    }

    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${FormControl} ${!isValid && Invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
