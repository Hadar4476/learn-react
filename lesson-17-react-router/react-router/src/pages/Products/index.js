import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { products } = props;

  const productElements = products.map((p) => (
    <li key={p.id}>
      <Link to={`/products/${p.id}`}>{p.title}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Products page</h1>
      <ul>{productElements}</ul>
    </div>
  );
};

export default Products;
