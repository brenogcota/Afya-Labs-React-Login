import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    outline: none;
    text-decoration: none;
    border: none;
  }

  html{
    scroll-behavior: smooth;
  }

  .container{
    width: 75%;
    margin: auto;
  }

  footer{
    text-align: center;
    height: 200px;
  }

  input {
    padding: 10px 15px;
    border-radius: 4px;
  }

  input[type=submit], button {
    background: #F71755;
    color: #fff;
    text-transform: uppercase;
  }
`