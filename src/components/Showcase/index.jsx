import React from "react";
import ProductsList from "../ProductsList";
import StyledMain from "./styles";

function Showcase({ productsData, setCartProducts }) {
  return (
    <StyledMain>
      <ProductsList products={productsData} setCartProducts={setCartProducts} />
    </StyledMain>
  );
}

export default Showcase;
