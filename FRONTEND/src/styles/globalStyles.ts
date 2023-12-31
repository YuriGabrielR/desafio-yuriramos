import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0; 
    padding:0;

    button{
        border:none; 
        border:none;
        padding:none; 
        margin:0;
        padding:0;
        outline:none;
    }

    body{
        min-width:100vw; 
        min-height:100vh; 
        overflow-x:hidden;

        background-color: #0F0F0F;

    }

}





`;