import { StyledAside, StyledDiv, StyledMain } from "./styles/Main.styled"
import { useState } from "react"
import Form from "./Form"

export default function Main() {
    
    const [mainColorTheme, setMainColorTheme] = useState(
        JSON.parse(localStorage.getItem("mainTheme")) || ''
    )
    const [asideColorTheme, setAsideColorTheme] = useState(
        JSON.parse(localStorage.getItem("asideTheme")) || ''
    )

    const getMainTheme = (theme) => {
        if (theme.bgColor || theme.textColor) {
            localStorage.setItem("mainTheme", JSON.stringify(theme))
            setMainColorTheme(theme) 
        }
    }
    // console.log(colorTheme)

    const getAsideTheme = (theme) => {
        if (theme.bgColor || theme.textColor) {
            localStorage.setItem("asideTheme", JSON.stringify(theme))
            setAsideColorTheme(theme) 
        }
    }

    return (
        <>
            <StyledDiv className="styled-div">

                <StyledAside bg={asideColorTheme.bgColor} fg={asideColorTheme.textColor}>
                    <Form onSubmit={getAsideTheme}/>
                </StyledAside>

                <StyledMain bg={mainColorTheme.bgColor} fg={mainColorTheme.textColor}>
                    <Form onSubmit={getMainTheme}/>
                </StyledMain>

            </StyledDiv>
        </>
    )
}