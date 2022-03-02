import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;800&display=swap');
html{
    font-size: 100%;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
body{
    background-color: ${({ theme, dark }) => theme[`${dark}`].bg};
    transition:background-color .3s ease-out;
}
ul{
    list-style:none;
}
`;
export default GlobalStyle;
