import React, { useState } from "react";

import ProductItem from "./ProductItem/ProductItem";

import classes from "./Products.module.css";

const products = [
  {
    id: "p1",
    title: "Product one",
    price: 6,
    description: "This is product one",
  },
  {
    id: "p2",
    title: "Product two",
    price: 9,
    description: "This is product two",
  },
  {
    id: "p3",
    title: "Product three",
    price: 4,
    description: "This is product three",
  },
  {
    id: "p4",
    title: "Product four",
    price: 8,
    description: "This is product four",
  },
];

const Products = () => {
  const [productsState] = useState(products);

  const productItemElements = productsState.map((i) => (
    <ProductItem
      key={i.id}
      id={i.id}
      title={i.title}
      price={i.price}
      description={i.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItemElements}</ul>
    </section>
  );
};

export default Products;
