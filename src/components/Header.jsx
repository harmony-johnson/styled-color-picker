import { StyledHeader } from "./styles/Header.styled"
import { useState } from "react"
import Form from "./Form"

export default function Header() {
    const [colorTheme, setColorTheme] = useState(
        JSON.parse(localStorage.getItem("headerTheme")) || ''
    )

    const getColorTheme = (theme) => {
        if (theme.bgColor || theme.textColor) {
            localStorage.setItem("headerTheme", JSON.stringify(theme))
            setColorTheme(theme) 
        }
    }
    return (
        <StyledHeader className="styled-header" bg={colorTheme.bgColor} fg={colorTheme.textColor}>
            <h1>Prime</h1>
            <div>
                <Form onSubmit={getColorTheme}/>
            </div>
        </StyledHeader>
    )
}