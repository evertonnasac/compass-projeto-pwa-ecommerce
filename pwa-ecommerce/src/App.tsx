import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Footer } from "./components/footer/Footer"
import styled from "styled-components"
import { AppBar } from "./components/mobile/AppBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {SubCategory} from "./pages/subcategory/SubCategory"
import { ProductPage } from "./pages/product-page/ProductPage"
import { ContextBag } from "./Contexts/ContexBag"
import { BagModal } from "./components/modais/bag/Bag"
import { Cart } from "./pages/cart/Cart"
import { Contact } from "./pages/contact/Contact"
import { BagMobile } from "./pages/bag-mobile/BagMobile"
import { PaymentsMobile } from "./pages/payments/PaymentsMobile"
import { Signup } from "./pages/auth/Signup"
import { Register } from "./pages/auth/Register"
import { NewUser } from "./pages/auth/NewUser"
import { Login } from "./pages/auth/Login"
import { Profile } from "./pages/profile/Profile"

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
     <ContextBag >
      <BagModal/>
        <StyleResponsive>
            <header className="header_desktop"> <Header/> </header>
            <Routes>
              <Route path="/" element = {<Signup/>}/>
              <Route path="/home" element = {<Home/>}/>
              <Route path="/login" element = {<Login/>}/>
              <Route path="/register" element = {<Register/>}/>
              <Route path="/newuser" element = {<NewUser/>}/>
              <Route path="/register" element = {<Register/>}/>
              <Route path="/profile" element = {<Profile/>}/>
              <Route path="/category" element = {<SubCategory/>}/>
              <Route path="/product" element = {<ProductPage/>}/>
              <Route path="/cart" element = {<Cart/>}/>
              <Route path="/contact" element = {<Contact/>}/>
              <Route path="/mybag" element = {<BagMobile/>}/>
              <Route path="/payment" element = {<PaymentsMobile/>}/>
            </Routes>
           
            <footer className="footer_desktop">
              <Footer/>
            </footer>
        </StyleResponsive>
        </ContextBag>
    </BrowserRouter>
  
  )
}

export default App
