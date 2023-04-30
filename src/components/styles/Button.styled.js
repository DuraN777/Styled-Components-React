import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 50px;
  padding: 15px 60px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  background-color: ${({ bg }) => bg || "#fff" }; // pass prop, if not prop, pick white
  color: ${({ color }) => color || "#222"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`