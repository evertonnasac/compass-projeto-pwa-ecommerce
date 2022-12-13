import styled from "styled-components";
import { CartMobile } from "./CartMobile";
import { CartDesktop } from "./CartDesktop";


const StyleContainer = styled.main`  

    width: 98%;
    margin: 15px auto ;
    
`

export const Cart = () => {


    return(
        <StyleContainer>
         <CartDesktop/>
         <CartMobile/>
        </StyleContainer>
    )
}