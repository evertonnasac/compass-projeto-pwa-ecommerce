//import {StyleHeader} from "./StyleHeader"
import { NavHeader } from "./NavHeader"
//import { HeaderPartial } from "./HeaderPartial"
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

    @media (max-width: 899px){
        justify-content: flex-start;
        gap: 8%;
    }
`

export const HeaderPartial = styled.section` 
    width: 45% ;
    height: 100% ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;


`


export const Header = () => {
    return(
        <StyleHeader>
            <HeaderPartial>
                <Logo/>
                <NavHeader/>
            </HeaderPartial>
            <HeaderPartial>
                <ContainerSearch/>
                <ContainerIcons/>
            </HeaderPartial>
        </StyleHeader>
    )
}