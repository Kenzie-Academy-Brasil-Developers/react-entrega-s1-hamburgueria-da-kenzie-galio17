import React from "react";
import Container from "../../styles/container";
import ProductsList from "../ProductsList";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";
import StyledAside from "./styles";

function Cart() {
  return (
    <StyledAside>
      <Container>
        <h2>Carrinho de compras</h2>
        {/* <EmptyCart /> */}
        <div className="cart-info">
          <ProductsList cart />
          <CartTotal />
        </div>
      </Container>
    </StyledAside>
  );
}

export default Cart;
