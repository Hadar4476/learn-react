import { createStore } from "redux"; // for using just Redux without Toolkit
import actionTypes from "./action-types";

const { counter: actions } = actionTypes;

const initialStore = {
  counter: 0,
  shouldDisplay: true,
};

const counterReducer = (state = initialStore, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actions.INCREASE_BY:
      return {
        ...state,
        counter: state.counter + payload,
      };
    case actions.DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actions.DECREASE_BY:
      return {
        ...state,
        counter: state.counter - payload,
      };
    case actions.TOGGLE_DISPLAY:
      return {
        ...state,
        shouldDisplay: !state.shouldDisplay,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
