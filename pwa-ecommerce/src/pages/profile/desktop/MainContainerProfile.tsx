import styled from "styled-components";
import { Orders } from "../../../components/orders/Orders";
import { ContextNavTab } from "../../../Contexts/ContexNavTab";


const StyleContainer = styled.section` 
    width: 65% ;

`

export const MainContainer = () => {
    return (
        <StyleContainer>
            <ContextNavTab>
                <Orders/>
            </ContextNavTab>
        </StyleContainer>
    )
}