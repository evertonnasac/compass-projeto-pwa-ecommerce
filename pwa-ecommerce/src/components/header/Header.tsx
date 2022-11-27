//import {StyleHeader} from "./StyleHeader"
import { NavHeader } from "./NavHeader"
import { Logo } from "./Logo"
import { ContainerSearch } from "./ContainerSearch"
import { ContainerIcons } from "./ContainerIcons"
import styled from "styled-components"


export const StyleHeader = styled.header` 
    width: 98% ;
    height: 80px;
    margin: 0 auto ;
    display: flex ;
    justify-content: space-between;
    align-items: center ;

`

export const ContainMiddle = styled.section` 
    width: 80% ;
    height: 100% ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;

`

export const Header = () => {
    return(
        <StyleHeader>
            <Logo/>
            <ContainMiddle>
                <NavHeader/>
                <ContainerSearch/>
            </ContainMiddle>
            <ContainerIcons/>
        </StyleHeader>
    )
}