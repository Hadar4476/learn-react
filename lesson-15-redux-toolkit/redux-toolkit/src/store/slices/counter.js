import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  shouldDisplay: true,
};

const increase = (state) => {
  state.counter++;
};

const increaseBy = (state, action) => {
  state.counter += action.payload;
};

const decrease = (state) => {
  state.counter--;
};

const decreaseBy = (state, action) => {
  state.counter -= action.payload;
};

const toggleDisplay = (state) => {
  state.shouldDisplay = !state.shouldDisplay;
};

// allow state mutation

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase,
    increaseBy,
    decrease,
    decreaseBy,
    toggleDisplay,
  },
});

export default counterSlice;
