import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
      --footer-background: #FAFAFA;
      --border-color: #DCDCDC;
      --footer-border: #D8D8D8;
      --yellow: #FAD34F;
      --text-color: #2D2D2D;
      --font-color: #3E3E3E;
  }

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow: hidden;
  }

  html{
      @media(max-width: 1080px){
          font-size: 93.75%; // 15px
      }

      @media(max-width: 720px){
          font-size: 87.5%; // 14px
      }
  }

  body{
      background: var(--background);
      -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
      font-family: 'Apercu Arabic Pro', sans-serif;
      font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
      font-weight: 600;
  }

  button{
      cursor: pointer;
  }

`;
