import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.xs4};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.fontFamily.main};
    width: 100%;
    position: relative;
    overflow-x: hidden;
    transition: background 0.1s ease;
  }

  #root {
    height: 100%;
  }

  button {
    background-color: inherit;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fontFamily.main};
  }
`;
