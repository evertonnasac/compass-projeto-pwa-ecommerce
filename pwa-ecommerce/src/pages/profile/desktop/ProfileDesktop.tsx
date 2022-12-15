import { MenuLateralProfile } from "./MenuLateral";
import styled from "styled-components";

const StyleContainer = styled.section` 
    width: 100% ;

    @media (max-width : 899px){
        display: none ;
    }
`

export const ProfileDektop = () => {
    
    return (
        <StyleContainer>
            <MenuLateralProfile/>
        </StyleContainer>
    )
}