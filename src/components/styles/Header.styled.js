import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: ${props => props.bg ? props.bg : props.theme.secondary};
    color: ${props => props.fg ? props.fg : props.theme.primary};
    padding: .5em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 3rem;
    }

    h2{
        display: none;
    }
`