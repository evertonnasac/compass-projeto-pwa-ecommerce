import styled from "styled-components";
import { Orders } from "../../../components/orders/Orders";


const StyleContainer = styled.section` 
    width: 65% ;

`

export const MainContainer = () => {
    return (
        <StyleContainer>
            <Orders/>
        </StyleContainer>
    )
}