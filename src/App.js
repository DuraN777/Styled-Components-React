import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
//wrap Theme Provider arround components in which we want access to theme
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
  },
  mobile: "768px"
}

function App() {
  return (
    <ThemeProvider theme={theme}> { /*theme provider accepts a prop */}
      <>
        <GlobalStyles />
        <Header></Header>
        <Container>
          <h1>My first content styled with styled-components</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
