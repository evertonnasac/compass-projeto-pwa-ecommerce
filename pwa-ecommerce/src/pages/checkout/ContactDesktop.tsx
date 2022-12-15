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
import { Breadcrumbs, ItemProp as ItemsBreacrumbs  } from "../../components/tabs/Breadcrumbs";
import { AccordianPayment } from "./AccordianPayment";
import { IUser } from "./Checkout";

const StyleContainer = styled.main`  

    width: 98%;
    margin: 15px auto ; 
    
    @media (max-width: 899px){
        display: none ;
    }

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
const itensBreadcrumbs : ItemsBreacrumbs[] = [
    {
        item: "Home",
        link: "/home"
    },
    {
        item: "Checkout",
        link: ""
    }
]

interface Props {
    user : IUser
    handleUser : (e : React.ChangeEvent<HTMLInputElement>) => void
    setUser :  React.Dispatch<React.SetStateAction<IUser>>
}

export const ContactDesktop = ({user, handleUser, setUser} : Props) => {

    const {getBag} = useContext(Context)
    let bag = getBag()

    return(
        <StyleContainer>
            <Breadcrumbs itens={itensBreadcrumbs}/>
            <StyleTitle>Checkout</StyleTitle>
            <MainContent>
                <AccordianContainer>
                    <AccordianContact handleUser={handleUser} setUser={setUser} user={user}/>
                    <AccordianPayment user={user} />
                </AccordianContainer>
                <SumaryContainer>
                    <OrderSumary bagCurrent={bag}/>
                    <Datails bagCurrent={bag}/>
                </SumaryContainer>
            </MainContent>
        </StyleContainer>
    )
 
}