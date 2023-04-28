import styled from "styled-components";
// this styled header I bring to Header component

// var StyledName = styled.tag 
export const StyledHeader = styled.header`
  background-color: ${ (props) => props.bg}; //passing props for style.
  padding: 40px;

  /* Like in SASS we can nest styles */
  h1 {
    color: #fff;
  }
`