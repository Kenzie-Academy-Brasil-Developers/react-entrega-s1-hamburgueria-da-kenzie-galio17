import Cart from "../../components/Cart";
import Header from "../../components/Header";
import Showcase from "../../components/Showcase";
import Content from "../../styles/content";

function Homepage() {
  return (
    <div>
      <Header />
      <Content className="principal-container">
        <Showcase />
        <Cart />
      </Content>
    </div>
  );
}

export default Homepage;
