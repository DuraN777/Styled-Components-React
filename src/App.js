import { ThemeProvider } from "styled-components";
//wrap Theme Provider arround components in which we want access to theme
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "fff",
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}> { /*theme provider accepts a prop */}
      <>
        <Header></Header>
        <Container>
          <h1>My first content styled with styled-components</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
