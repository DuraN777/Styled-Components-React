import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader bg="red">  {/* Replace <header> tag with styled-component  StyledHeader */}
      <h1>Hubble</h1>
    </StyledHeader>
  );
}
 
export default Header;