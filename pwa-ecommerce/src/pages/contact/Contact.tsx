import styled from "styled-components";
import { colours } from "../../UI/colours";
import typography from "../../UI/typography";
import { Context } from "../../Contexts/ContexBag";
import { useContext, useEffect , useState} from "react";
import { MobileItemSheet as ProductCard } from "../../components/cards/products/MobileItemSheet";
import { Button } from "../../components/buttons/Button";
import { AccordianContact } from "./AccordianContact";
import { OrderSumary } from "./OrderDetails";
import { OrderSumary as Datails } from "../cart/OrderSumary";

const StyleContainer = styled.main`  

    width: 98%;
    margin: 15px auto ; 

`

const StyleTitle = styled.p` 
    color: ${colours.primary};
    font-size: ${typography.headingS34.fontSize};
    font-weight: ${typography.headingS34.fontWeight} ;

`

const MainContent = styled.section` 
    width: 100% ;
    display: flex ;
    justify-content: space-between ;

`

const AccordianContainer = styled.section`  
     width : 60%;

`

const SumaryContainer = styled.section`  
     width : 30%;

`

export const Contact = () => {

    const {getBag} = useContext(Context)
    let bag = getBag()

    return(
        <StyleContainer>
            <StyleTitle>Checkout</StyleTitle>
            <MainContent>
                <AccordianContainer>
                    <AccordianContact></AccordianContact>
                </AccordianContainer>
                <SumaryContainer>
                    <OrderSumary bagCurrent={bag}/>
                    <Datails bagCurrent={bag}/>
                </SumaryContainer>
            </MainContent>
        </StyleContainer>
    )
 
}