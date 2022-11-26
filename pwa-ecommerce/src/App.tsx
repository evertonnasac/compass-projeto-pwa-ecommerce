import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Footer } from "./components/footer/Footer"
import styled from "styled-components"
import { AppBar } from "./components/mobile/AppBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {SubCategory} from "./pages/subcategory/SubCategory"
import { ProductPage } from "./pages/product-page/ProductPage"

const StyleResponsive = styled.section` 

  width: 100% ;
  margin: 0 auto ;
  display:flex ;
  flex-direction :column;

  
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

function App() {

  return (
    <BrowserRouter>
        <StyleResponsive>
          <header className="header_desktop"> <Header/> </header>
          <header className="header_mobile"> <AppBar/> </header>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/category" element = {<SubCategory/>}/>
          <Route path="/product" element = {<ProductPage/>}/>
        </Routes>
          <footer className="footer_desktop">
            <Footer/>
          </footer>
        </StyleResponsive>
    </BrowserRouter>
  
  )
}

export default App
