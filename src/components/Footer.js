import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";


const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="Huddle Logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <ul>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

          <SocialIcons />
        </Flex>
        <p>&copy; Huddle 2023. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}
 
export default Footer;