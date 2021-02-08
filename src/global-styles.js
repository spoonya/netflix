import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #000;
    color: #333;
    font-size: 1.6rem;
    height: 100%;
  }

  input {
    font: inherit;
    border: none;
    outline: none;
    background: none;
  }

  input[type='button'] {
    padding: 0;
    cursor: pointer;
  }

  button {
    font: inherit;
    padding: 0;
    cursor: pointer;
    color: inherit;
    border: none;
    outline: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyles;
