import { ThemeProvider } from "styled-components"
import GlobalStyle from "./components/styles/Global"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"


function App() {

  const theme = {
    primary: "#FFCC00",
    primaryShade: "#cca300",
    default: "white",
    shadeILike: "#003333",
    secondary: "#009B4D",
    secondaryLight: "#32AF70"
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
