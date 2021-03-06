import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
html{
    font-size: 100%;
    overflow-y:scroll;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Nunito Sans', sans-serif;
}
body{
    background-color: ${({ theme, dark }) => theme[`${dark}`].bg};
    transition:background-color .25s ease-out;
}
ul{
    list-style:none;
}
`;
export default GlobalStyle;
