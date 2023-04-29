import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";

const Header = () => {
  return (
    <StyledHeader>  {/* Replace <header> tag with styled-component  StyledHeader */}
      <Container>
        <h1>Hubble</h1>
      </Container>
    </StyledHeader>
  );
}
 
export default Header;