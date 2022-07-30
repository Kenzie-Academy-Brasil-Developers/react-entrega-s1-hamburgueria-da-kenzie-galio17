import React from "react";
import Button from "../../../styles/buttons";

function CartTotal() {
  return (
    <section className="cart-details">
      <div>
        <h4>Total</h4>
        <strong>R$ 40,00</strong>
      </div>
      <Button theme="secondary">Remover Todos</Button>
    </section>
  );
}

export default CartTotal;
