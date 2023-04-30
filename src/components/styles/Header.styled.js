import styled from "styled-components";
// this styled header I bring to Header component
// Since Nav and Logo tags are used only in header, I define them in Header.styled component

// var StyledName = styled.tag 
export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header}; //passing props
  padding: 40px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  @media(max-width: ${({theme}) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  max-width: 40%;
  object-fit: contain;

  @media(max-width: ${({theme}) => theme.mobile}) {
    max-width: 80%;
  }
`