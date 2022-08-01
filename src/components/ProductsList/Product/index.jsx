import React from "react";
import Button from "../../../styles/buttons";
import Container from "../../../styles/container";

function Product({ product, setCartProducts }) {
  function addProducts() {
    setCartProducts((cartProducts) => {
      const existingProduct = cartProducts.find(
        ({ id: searchId }) => searchId === id
      );

      console.log(cartProducts);
      if (existingProduct) {
        const newData = cartProducts.filter(
          ({ id: removeId }) => removeId !== id
        );

        return [
          ...newData,
          { ...product, quantity: existingProduct.quantity + 1 },
        ];
      } else {
        return [...cartProducts, { ...product, quantity: 1 }];
      }
    });
  }

  function removeProduct() {
    setCartProducts((cartProducts) => {
      const newData = cartProducts.filter(
        ({ id: removeId }) => removeId !== id
      );

      return newData;
    });
  }

  const { id, name, category, price, img, quantity } = product;

  return (
    <li>
      <Container>
        <figure className="image">
          <img src={img} alt="Hamburguer" />
        </figure>
        <section className="description">
          <section className="details">
            <h3>{name}</h3>
            {!quantity && <span>{category}</span>}
            <strong>
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
            {quantity && <em>{quantity}</em>}
          </section>
          <section className="buttonContainer">
            {quantity ? (
              <Button onClick={removeProduct}>Remover</Button>
            ) : (
              <Button theme="primary" onClick={addProducts}>
                Adicionar
              </Button>
            )}
          </section>
        </section>
      </Container>
    </li>
  );
}

export default Product;
