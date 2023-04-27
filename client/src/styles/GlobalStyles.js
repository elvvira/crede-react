import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  h2{
    margin: 2px;
  }
  p{
    font-size: 0.8rem;
    margin: 12px;
    margin-left: 0;
  }
  img{
    display: block;
    max-width: 100%;
    width: 20px;
    
  }
  body{
    margin: 0;
    font-family: sans-serif;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  button{
    text-decoration:none;
    border-style: solid;
	border-color: transparent;
  background-color: transparent;

  }
`;

export { GlobalStyles };
