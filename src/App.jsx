import Homepage from "./pages/Homepage";
import StyledHomepage from "./pages/Homepage/styles";
import Global from "./styles/global";

function App() {
  return (
    <StyledHomepage>
      <Global />
      <Homepage />
    </StyledHomepage>
  );
}

export default App;
