import { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import Showcase from "../../components/Showcase";
import api from "../../services/api";
import Content from "../../styles/content";

function Homepage() {
  function treatString(string) {
    return string
      .toLowerCase()
      .trim()
      .replace(/-/gi, " ")
      .replace(/á/gi, "a")
      .replace(/í/gi, "i");
  }

  const [productsData, setProductsData] = useState([]);
  const [filter, setFilter] = useState("");
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    api.get().then(({ data }) => {
      const newData = filter.length
        ? data.filter(
            ({ name, category }) =>
              treatString(name).includes(treatString(filter)) ||
              treatString(category).includes(treatString(filter))
          )
        : data;

      setProductsData(newData);
    });
  }, [filter]);

  return (
    <div>
      <Header setFilter={setFilter} />
      <Content className="principal-container">
        <Showcase
          productsData={productsData}
          setCartProducts={setCartProducts}
        />
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </Content>
    </div>
  );
}

export default Homepage;
