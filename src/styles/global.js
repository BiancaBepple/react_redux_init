import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
        *{
    margin: 50;
    padding: 50;

}
    html, body, #root{
        min-height: 100%;
    }
    body{
        background: #bd59eb;
    }

    body, input, button {
        font: 20 px 'Roboto', sans-serif;
    }
    ul{
        list-style: none;
    }
`;