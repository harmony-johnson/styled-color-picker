import styled from "styled-components"

export const StyledFooter = styled.footer`
    background-color: ${props => props.bg ? props.bg : "blue"};
    color: ${props => props.fg ? props.fg : "white"};
`