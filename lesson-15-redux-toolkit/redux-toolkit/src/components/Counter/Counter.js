import { useSelector, useDispatch } from "react-redux";
import { globalActions } from "../../store";

import classes from "./Counter.module.css";

const { counter: actions } = globalActions;

const Counter = () => {
  const { counter, shouldDisplay } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(actions.increase());
  };

  const onIncreaseBy = () => {
    dispatch(actions.increaseBy(10));
  };

  const onDecrease = () => {
    dispatch(actions.decrease());
  };

  const onDecreaseBy = () => {
    dispatch(actions.decreaseBy(10));
  };

  const toggleCounterHandler = () => {
    dispatch(actions.toggleDisplay());
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
