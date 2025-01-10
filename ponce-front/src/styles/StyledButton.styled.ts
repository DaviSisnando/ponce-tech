import styled from "styled-components";

export const StyledButton = styled.button<{$isSecondary?: boolean}>`
  background-color: ${({ $isSecondary }) => ($isSecondary ? "white" : "black")};
  color: ${({ $isSecondary }) => ($isSecondary ? "black" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 1px 1px 0.5px 0.5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
  }
`