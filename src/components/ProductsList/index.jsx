import React from "react";
import Product from "./Product";

function ProductsList({ cart }) {
  return (
    <ul>
      <Product cart={cart} />
      <Product cart={cart} />
      <Product cart={cart} />
      <Product cart={cart} />
      <Product cart={cart} />
      <Product cart={cart} />
    </ul>
  );
}

export default ProductsList;
