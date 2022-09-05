import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shouldDisplay: false,
  items: [],
};

const toogleCart = (state) => {
  state.shouldDisplay = !state.shouldDisplay;
};

const increaseAmount = (state, action) => {
  const productId = action.payload;
  const productInCart = state.items.findIndex((i) => i.id === productId);
  state.items[productInCart].amount++;
};

const decreaseAmount = (state, action) => {
  const productId = action.payload;
  const productInCart = state.items.findIndex((i) => i.id === productId);
  state.items[productInCart].amount--;

  if (!state.items[productInCart].amount) {
    state.items.splice(productInCart, 1);
  }
};

const addProduct = (state, action) => {
  const product = action.payload;
  const productInCart = state.items.findIndex((i) => i.id === product.id);

  if (productInCart >= 0) {
    state.items[productInCart].amount++;
  } else {
    state.items.push(product);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toogleCart,
    increaseAmount,
    decreaseAmount,
    addProduct,
  },
});

export default cartSlice;
