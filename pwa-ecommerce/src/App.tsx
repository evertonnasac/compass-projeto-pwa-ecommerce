import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Footer } from "./components/footer/Footer"
import styled from "styled-components"
import { BottonNavigate } from "./components/mobile/BottonNavigate"
import { AppBar } from "./components/mobile/AppBar"

function App() {

  const StyleResponsive = styled.section` 
 
    @media (max-width: 899px){
      .header_desktop, .footer_desktop{
        display: none ;
      }
      .header_mobile, .nav_mobile{
        display: block ;
      }
    }

    @media (min-width: 899px){
      .header_desktop, .footer_desktop{
        display: block ;
      }
      .header_mobile, .nav_mobile{
        display: none ;
      }
    }
    
  `
  return (
    <div className="App" 
     
          style={{"width" : "100%", 
              "display":"flex", 
              "flexDirection" : "column", 
              "gap":"20px"}}>

      <StyleResponsive>
        <div className="header_desktop"> <Header/> </div>
        <div className="header_mobile"> <AppBar/> </div>
      </StyleResponsive>
      <Home/>
      <StyleResponsive>
        <div className="footer_desktop">
          <Footer/>
        </div>
        <div className="nav_mobile">
          <BottonNavigate/>
        </div>
      </StyleResponsive>
    </div>
  )
}

export default App
