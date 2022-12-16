import { ReactNode } from "react";
import styled from "styled-components";
import { Orders } from "../../../components/orders/Orders";
import { ContextNavTab } from "../../../Contexts/ContexNavTab";
import { Wishlist } from "../../wishlist/WishList";

/*

LIMPAR OS FORMS E OS STATES (BAGS, FORMS, FILTERS)
SETAR AS ROTAS CERTAS
PAGINA DE PROFILE
LOGOUT
CRIPTOGRAFAR O PAYMENT  
README
STORYBOOK
TITLES
PAGINA DE 404 E ITEM VAZIO
EXTRAS: MENSAGENS, CARROSEL, MODAIS
*/

const StyleContainer = styled.section` 
    width: 65% ;

`

const ComponentNull = styled.div`
    width: 0 ;
    height: 0 ;

`


interface Props {
    itemSelected: string,
    
}

export const MainContainer = ({itemSelected} : Props) => {

    let Component : any

    if(itemSelected == "My Wishlist"){
        Component = Wishlist
    }

    else if (itemSelected == "My Orders"){
        Component = Orders
    }

    else {
        Component = ComponentNull
    }


    return (
        <StyleContainer>
            <ContextNavTab>
                <Component/>
            </ContextNavTab>
        </StyleContainer>
    )
}