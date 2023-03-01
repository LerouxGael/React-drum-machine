import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        transition : linear 0.25s;
        color : ${(props) => props.theme.mainColor};
        background-color : ${(props) => props.theme.backgroundColor};
        font-family: 'Montserrat';
    }
    button{
        font-family: 'Montserrat';
        padding : 12px 20px;
        color : ${(props) => props.theme.mainColor};
        background-color : ${(props) => props.theme.backgroundColor};
        cursor :pointer;
        border : solid 1px;
        transition : linear 0.25s;
    }
    button:hover{
        background-color : ${(props) => props.theme.mainColor};
        color : ${(props) => props.theme.backgroundColor};
    }
    h1, h2, h3, h4, h5{
        letter-spacing : 2px;
    }
    h1{
        font-size : 1.6rem;
    }
    h2{
        font-size : 1.4rem;
    }
`;

export default GlobalStyle;