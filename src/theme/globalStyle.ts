import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend+Deca:wght@100..900&display=swap');
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

        @media (max-width: 1000px){
            overflow-x: hidden;
        }
    }

`;
