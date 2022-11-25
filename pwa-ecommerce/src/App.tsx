import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Footer } from "./components/footer/Footer"
import styled from "styled-components"
import { BottonNavigate } from "./components/mobile/BottonNavigate"
import { AppBar } from "./components/mobile/AppBar"
import { SubCategory } from "./pages/subcategory/Category"
import { ProductPage } from "./pages/product-page/ProductPage"


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
      <ProductPage/>
      <StyleResponsive>
        <div className="footer_desktop">
          <Footer/>
        </div>
      </StyleResponsive>
    </div>
  )
}

export default App
