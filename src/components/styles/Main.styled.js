import styled from "styled-components"

export const StyledAside= styled.aside`
    width: 30%;
    background-color: ${props => props.bg ? props.bg :"pink" };
    color: ${props => props.fg ? props.fg : "black"};
    padding: 1em;
    input {
        min-width: 50px;
    }
`

export const StyledMain = styled.main`
    width: 70%;
    /* background-color: yellowgreen; */
    background-color: ${props => props.bg ? props.bg :"yellowgreen" };
    color: ${props => props.fg ? props.fg : "black"};
    padding: 1em;
`

export const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    /* border: 1px solid red; */
    input {
        display: block;
    }
    
`