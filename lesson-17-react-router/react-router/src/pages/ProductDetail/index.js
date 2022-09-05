import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const { products } = props;
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  const productRenderer = product && <h2>{product.title}</h2>;

  return (
    <div>
      <h1>Product detail page</h1>
      {productRenderer}
    </div>
  );
};

export default ProductDetail;
