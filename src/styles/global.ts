import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${theme.colors["gray-100"]};
    color: ${theme.colors["gray-700"]};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: ${theme.fonts.text};
    font-weight: 400;
    font-size: ${theme.fontSize[10]};
    line-height: ${theme.lineHeight["1.3"]};
  }
`}`;
