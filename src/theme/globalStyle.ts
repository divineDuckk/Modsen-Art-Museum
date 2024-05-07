import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 
    p, a, h1, h2,h3,h4,h5,h6{
        letter-spacing: 0.03em;
        font-style: normal;
    }
    p,button{
        font-family: 'Inter', sans-serif;
    }
    input::placeholder{
        font-family: 'Inter', Arial, Helvetica, sans-serif;
    }
  
    h1,h2,h3,h4,h5,h6{
        font-family: 'Lexend Deca', sans-serif;
    }
    a{
        text-decoration:none;
    }
    ul{
        list-style-type: none;
    }
    body{
        max-width: 1920px;
        margin: 0 auto;
        padding: 0;
        background-color:#FAFAFA;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
       
    }   
    #root {
      height: 100vh;
    }



`;
