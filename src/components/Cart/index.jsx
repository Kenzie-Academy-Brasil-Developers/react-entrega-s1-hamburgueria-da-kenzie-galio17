import React from "react";
import Container from "../../styles/container";
import ProductsList from "../ProductsList";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";
import StyledAside from "./styles";

function Cart({ cartProducts, setCartProducts }) {
  return (
    <StyledAside>
      <Container>
        <h2>Carrinho de compras</h2>
        {cartProducts.length ? (
          <div className="cart-info">
            <ProductsList
              products={cartProducts}
              setCartProducts={setCartProducts}
            />
            <CartTotal
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          </div>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </StyledAside>
  );
}

export default Cart;
