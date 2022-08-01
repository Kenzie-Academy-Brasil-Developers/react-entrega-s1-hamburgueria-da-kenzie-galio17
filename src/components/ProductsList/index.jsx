import React from "react";
import Product from "./Product";

function ProductsList({ products, setCartProducts }) {
  const liList = products.map((product) => (
    <Product
      key={product.id}
      product={product}
      setCartProducts={setCartProducts}
    />
  ));

  return <ul>{liList}</ul>;
}

export default ProductsList;
