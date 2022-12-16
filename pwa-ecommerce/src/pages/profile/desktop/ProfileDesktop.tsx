import { MenuLateralProfile } from "./MenuLateral";
import styled from "styled-components";
import { MainContainer } from "./MainContainerProfile";
import { useState } from "react";

const StyleContainer = styled.section` 
    width: 100% ;
    display: flex ;
    justify-content : space-around ;

    @media (max-width : 899px){
        display: none ;
    }
`


export const ProfileDektop = () => {

    const [itemSelected, setItemSelected] = useState("Personal Information")
    
    return (
        <StyleContainer>
            <MenuLateralProfile itemSelected={itemSelected} setItemSelected = {setItemSelected}/>
            <MainContainer itemSelected={itemSelected}/>
        </StyleContainer>
    )
}