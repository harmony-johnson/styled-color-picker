import { StyledFooter } from "./styles/Footer.styled"
import Form from "./Form"
import { useState } from "react"

export default function Footer() {
    const [colorTheme, setColorTheme] = useState(
        JSON.parse(localStorage.getItem("footerTheme")) || ''
    )

    const getColorTheme = (theme) => {
        if (theme.bgColor || theme.textColor) {
            localStorage.setItem("footerTheme", JSON.stringify(theme))
            setColorTheme(theme) 
        }
    }

    return (
        <StyledFooter className="styled-footer" bg={colorTheme.bgColor} fg={colorTheme.textColor}>
            <Form onSubmit={getColorTheme}/>
        </StyledFooter>
    )
}