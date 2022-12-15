import styled from "styled-components";
import { ContainerBack } from "../../components/mobile/HeaderBack";
import { Orders } from "../../components/orders/Orders";
import { ContextNavTab } from "../../Contexts/ContexNavTab";


const StyleContainer = styled.section` 
    width: 100% ;

`

const ContainerOrder = styled.div`
    width: 95% ;
    margin: 35px auto ;

`

export const OrderMobile = () => {
    
    return(
        <StyleContainer>
            <ContainerBack title="My Orders"/>
            <ContextNavTab>
                <ContainerOrder>
                    <Orders/>
                </ContainerOrder>
            </ContextNavTab>
        </StyleContainer>
    )
}