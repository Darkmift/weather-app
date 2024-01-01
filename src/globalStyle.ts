import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  body {
    /* font-family: 'Montserrat', sans-serif !important; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // You can add more global styles here
`;

export default GlobalStyle;
