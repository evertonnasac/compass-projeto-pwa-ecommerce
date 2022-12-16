import { MenuLateralProfile } from "./MenuLateral";
import styled from "styled-components";
import { MainContainer } from "./MainContainerProfile";
import { useState } from "react";
import { Breadcrumbs } from "../../../components/tabs/Breadcrumbs";
import { Button } from "../../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

const StyleContainer = styled.section` 
    width: 100% ;
    
    @media (max-width : 899px){
        display: none ;
    }
`

const MainContent = styled.div` 
    
    width: 100% ;
    display: flex ;
    justify-content : space-around ;

`

const HeaderContent = styled.div` 
    width: 95% ;
    display: flex ;
    justify-content : space-between ;
`



const itemsBradcrumbs = [
    {
        item: "Home",
        link: "/home"
    },
    {
        item: "Profile User",
        link: "/profile"
    }
]

export const ProfileDektop = () => {

    const nav = useNavigate()

    const [itemSelected, setItemSelected] = useState("Personal Information")

    const logout = () => {
        localStorage.removeItem("bag")
        localStorage.removeItem("userPWA")
        nav("/login")
    }
    
    return (
        <StyleContainer>
            <HeaderContent>
                <Breadcrumbs itens={itemsBradcrumbs}/>
                <Button type="outline" size="sm" onclick={logout}>Logout</Button>
            </HeaderContent>
            <MainContent>
                <MenuLateralProfile itemSelected={itemSelected} setItemSelected = {setItemSelected}/>
                <MainContainer itemSelected={itemSelected}/>
            </MainContent>
        </StyleContainer>
    )
}