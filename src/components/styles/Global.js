import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${({ theme }) => theme.default ? theme.default : "red"};
        height: 100vh;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    input {
        border: none;
        padding: .1em 1em;
        height: 30px;
        border-radius: 5px;
        margin-bottom: 1em;
        display: block;
    }

    input:focus {
        outline: 1px solid ${({ theme }) => theme.primary};
    }

    button {
        background-color: ${props => props.theme.primary};
        padding: .5em 1em;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        color: ${props => props.theme.secondary};
    }

    button:hover,
    button:focus {
        background-color: ${({ theme }) => theme.primaryShade};
    }

    .styled-header {
        height: 23vh;
    }
    .styled-footer {
        height: 27vh;
    }
    .styled-div {
        height: 50vh;
    }
    main,
    aside,
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export default GlobalStyle