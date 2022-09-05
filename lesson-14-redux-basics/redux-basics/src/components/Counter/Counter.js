import { useSelector, useDispatch } from "react-redux";
import actionTypes from "../../store/action-types";

import classes from "./Counter.module.css";

const { counter: actions } = actionTypes;

const Counter = () => {
  const { counter, shouldDisplay } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch({ type: actions.INCREASE });
  };

  const onIncreaseBy = () => {
    dispatch({ type: actions.INCREASE_BY, payload: 10 });
  };

  const onDecrease = () => {
    dispatch({ type: actions.DECREASE });
  };

  const onDecreaseBy = () => {
    dispatch({ type: actions.DECREASE_BY, payload: 10 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: actions.TOGGLE_DISPLAY });
  };

  const valueRenderer = shouldDisplay && (
    <div className={classes.value}>{counter}</div>
  );
  const actionRenderer = shouldDisplay && (
    <div>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onIncreaseBy}>Increase by 10</button>
      <button onClick={onDecrease}>Decrease</button>
      <button onClick={onDecreaseBy}>Decrease by 10</button>
    </div>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {valueRenderer}
      {actionRenderer}
      <button className={classes.toggle} onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
