import React from "react";
import ReactDOM from "react-dom/client";
import { MealsContextProvider } from "./context/meals-context";
import { CartContextProvider } from "./context/cart-context";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MealsContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </MealsContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
