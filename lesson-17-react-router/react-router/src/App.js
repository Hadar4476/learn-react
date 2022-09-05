import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import TheHeader from "./components/TheHeader/TheHeader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import "./App.css";

const App = () => {
  const products = [
    {
      id: "p1",
      title: "Product #1",
    },
    {
      id: "p2",
      title: "Product #2",
    },
    {
      id: "p3",
      title: "Product #3",
    },
  ];

  return (
    <div className="App">
      <TheHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" component={Welcome} />
          <Route
            exact
            path="/products"
            render={() => <Products products={products} />}
          />
          <Route
            path="/products/:id"
            render={() => <ProductDetail products={products} />}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
