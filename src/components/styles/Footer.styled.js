import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${ ({theme}) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 30px;

  ul {
    list-style: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  ul li a {
    text-decoration: none;
    color: #fff;
  }

  p {
    text-align: right;
  }

  @media(max-width: ${ ({theme}) => theme.mobile}) {
    text-align: center;

    ul {
      padding: 0;
    }
  }
`