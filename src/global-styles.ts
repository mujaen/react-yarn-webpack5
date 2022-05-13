import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    font-size: 16px;
    color: #000;
    word-break: normal;
    word-wrap: break-word;
  }
  
  //TODO Font-Face 추가
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;