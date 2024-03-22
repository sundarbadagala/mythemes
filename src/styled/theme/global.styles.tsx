import { createGlobalStyle } from "styled-components";

interface IProps {
  $isDark: boolean;
}

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    transition: all 0.3s linear;
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.text};
    font-family: 'Roboto', sans-serif;
  }
  button{
    border: ${({ $isDark }: IProps) =>
      $isDark ? `1px solid #ffffff` : "1px solid #000000"};
    color: ${({ $isDark }) => ($isDark ? "#ffffff" : "#000000")};
    background: none;
    padding: 6px 8px;
    border-radius: 6px;
  }
`;
