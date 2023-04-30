import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  gap: 30px;

  & > div,
  & > ul {
    flex: 1;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`