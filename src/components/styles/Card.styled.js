import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  padding: 50px;
  box-shadow: 0 0 10px rgba(0,0,0, 0.15);
  border-radius: 20px;
  background-color: #fff;

  & .div {
    flex: 1;
  }

  img {
    width: 80%;
    margin-left: 40px;
  }

  @media(max-width: ${ ({theme}) => theme.mobile}) { // theme from App.js
    flex-direction: column;
    text-align: center;

    img {
      width: 50%;
    }
  }
`