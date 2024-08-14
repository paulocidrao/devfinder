import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

 *{
  margin:0;
  padding: 0;
  box-sizing: border-box;

 }
 body{
  background-color:${props => props.theme.colors["blue-400"]};
  color:${props => props.theme.colors["white"]};
  -webkit-font-smoothing:'antialiased';
   font: 400 1rem Roboto, sans-serif;
 }


`;



