import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import theme from './theme';
const { colors } = theme;

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    line-height: 1.3;
    font-size: 1.1rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${colors.primaryGrey};
    background-color:  #f8f8f8;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover,
    &:focus {
      outline: none;
    }
  }

  button {
    border: 0;

    &:focus {
      outline: none;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`
export default GlobalStyle;
