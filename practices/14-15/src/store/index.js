import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cart";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const globalActions = {
  cart: cartSlice.actions,
};

export default store;
