import React from "react";
import Button from "../../../styles/buttons";
import Container from "../../../styles/container";
import burguer from "../../../temp/assets/img/burguer.png";

function Product({ cart }) {
  return (
    <li>
      <Container>
        <figure className="image">
          <img src={burguer} alt="Hamburguer" />
        </figure>
        <section className="description">
          <section className="details">
            <h3>McShake Ovomaltine</h3>
            {!cart && <span>Sanduíches</span>}
            <strong>R$ 18.00</strong>
            {cart && <em>52</em>}
          </section>
          <section className="buttonContainer">
            {cart ? (
              <Button>Remover</Button>
            ) : (
              <Button theme="primary">Adicionar</Button>
            )}
          </section>
        </section>
      </Container>
    </li>
  );
}

export default Product;
