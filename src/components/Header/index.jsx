import Container from "../../styles/container";
import Content from "../../styles/content";
import InputSearch from "./InputSearch";
import Logo from "../Logo";
import StyledHeader from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Content className="content">
          <Logo />
          <InputSearch />
        </Content>
      </Container>
    </StyledHeader>
  );
}

export default Header;
