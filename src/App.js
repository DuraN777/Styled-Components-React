import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
//wrap Theme Provider arround components in which we want access to theme
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Content from "./Content";
import Card from "./components/Card";
import Footer from "./components/Footer";


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
          {Content.map((item, index) => (
            <Card key={index} item={item}></Card>
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
