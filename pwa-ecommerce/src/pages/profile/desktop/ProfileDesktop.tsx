import { MenuLateralProfile } from "./MenuLateral";
import styled from "styled-components";
import { MainContainer } from "./MainContainerProfile";

const StyleContainer = styled.section` 
    width: 100% ;
    display: flex ;
    justify-content : space-around ;

    @media (max-width : 899px){
        display: none ;
    }
`


export const ProfileDektop = () => {
    
    return (
        <StyleContainer>
            <MenuLateralProfile/>
            <MainContainer/>
        </StyleContainer>
    )
}