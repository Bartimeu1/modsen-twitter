import { createGlobalStyle, css, styled } from 'styled-components';

interface IFlexMixin {
  align?: string;
  justify?: string;
  direction?: string;
  wrap?: string;
}

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSize.xs};
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
    font-family: ${({ theme }) => theme.fontFamily.primary};
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    transition: background 0.3s ease;
  }

  #root {
    height: 100%;
  }

  button {
    background-color: inherit;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fontFamily.primary};
  }

  input {
    font-family: ${({ theme }) => theme.fontFamily.primary};
  }

  a {
    text-decoration: none;
  }
`;

export const FlexMixin = ({
  align = 'stretch',
  justify = 'flex-start',
  direction = 'row',
  wrap = 'nowrap',
}: IFlexMixin = {}) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
`;

export const Container = styled.div`
  ${FlexMixin({ justify: 'space-between' })}

  margin: 0 auto;
  padding: 20px;
  width: 100%;
  max-width: 1640px;
`;
