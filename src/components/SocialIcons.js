import {FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa" //import icons from FontaAwesome
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <ul>
        <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </StyledSocialIcons>
  );
}
 
export default SocialIcons;