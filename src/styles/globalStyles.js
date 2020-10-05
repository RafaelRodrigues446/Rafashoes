import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

const GlobalStyles = createGlobalStyle`

  * {
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-image: url(${background});
    background-position: top center;
    background-repeat: no-repeat;
    background-color: orange;
    padding-bottom: 50px;
  }

  button {
    cursor: pointer;
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
