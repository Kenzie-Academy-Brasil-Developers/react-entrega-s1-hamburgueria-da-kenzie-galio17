import React from "react";
import Button from "../../../styles/buttons";

function CartTotal({ cartProducts, setCartProducts }) {
  const totalPrice = cartProducts.reduce(
    (totalPrice, { price, quantity }) => totalPrice + price * quantity,
    0
  );

  return (
    <section className="cart-details">
      <div>
        <h4>Total</h4>
        <strong>
          {totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
      <Button theme="secondary" onClick={() => setCartProducts([])}>
        Remover Todos
      </Button>
    </section>
  );
}

export default CartTotal;
