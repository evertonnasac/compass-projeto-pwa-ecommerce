import { Header } from "./components/header"
import { Home } from "./pages/home/Home"
import { Footer } from "./components/footer/Footer"
import styled from "styled-components"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {SubCategory} from "./pages/subcategory/SubCategory"
import { ProductPage } from "./pages/product-page/ProductPage"
import { ContextBag } from "./Contexts/ContexBag"
import { BagModal } from "./components/modais/bag/Bag"
import { Cart } from "./pages/cart/Cart"
import { Checkout } from "./pages/checkout/Checkout"
import { BagMobile } from "./pages/bag-mobile/BagMobile"
import { PaymentsMobile } from "./pages/checkout/PaymentsMobile"
import { Signup } from "./pages/auth/Signup"
import { Register } from "./pages/auth/Register"
import { NewUser } from "./pages/auth/NewUser"
import { Login } from "./pages/auth/Login"
import { Profile } from "./pages/profile/Profile"
import { OrderMobile } from "./pages/order-mobile/OrderMobile"
import { Wishlist } from "./pages/wishlist/WishList"
import { NotFound } from "./components/not-found/NotFound"
import { CategoriesMobile } from "./pages/categories/CategoriesMobile"
import { ContainerCarousel } from "./components/carousel"


const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;

`


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
      <Header/> 
      <ContainerCarousel cols={1} autoPlay = {2000} loop = {true} items={[<Box></Box>, <Box></Box>, <Box></Box>]}/>
        <StyleResponsive>
          <Routes>
              <Route path="/" element = {<Signup/>}/>
              <Route path="/home" element = {<Home/>}/>
              <Route path="/login" element = {<Login/>}/>
              <Route path="/register" element = {<Register/>}/>
              <Route path="/newuser" element = {<NewUser/>}/>
              <Route path="/profile" element = {<Profile/>}/>
              <Route path="/category" element = {<SubCategory/>}/>
              <Route path="/product" element = {<ProductPage/>}/>
              <Route path="/cart" element = {<Cart/>}/>
              <Route path="/checkout" element = {<Checkout/>}/>
              <Route path="/mybag" element = {<BagMobile/>}/>
              <Route path="/payment" element = {<PaymentsMobile/>}/>
              <Route path="/myorders" element = {<OrderMobile/>}/>
              <Route path="/wishlist" element = {<Wishlist/>}/>
              <Route path="/notfound" element = {<NotFound/>}/>
              <Route path="/categories" element = {<CategoriesMobile/>}/>
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
