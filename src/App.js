import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <h1>My first content styled with styled-components</h1>
      </Container>
    </>
  );
}

export default App;
