import styled from "styled-components";
import iconAdd from "../../../public/icons-appbar/add.png"
import iconMenu from "../../../public/icons-appbar/menu.png"
import iconNotify from "../../../public/icons-appbar/notification.png"
import iconSearch from "../../../public/icons-appbar/search.png"
import { colours } from "../../UI/colours";




const StyleAppBar = styled.header` 
    width : 100%;
    height: 56px ;

    display: flex ;
    align-items: center ;
    justify-content: space-evenly ;
    background-color: ${colours.white} ;

    img{
        width: 17px;
        height: 17px ;
        cursor: pointer;
    }

    span {
        width: 50%;
        height: 56px ;
        line-height: 56px ;
        color: ${colours.primary} ;

    }

`
export const AppBar = () => {
    return(
        <StyleAppBar>
            <img src= {iconMenu} alt= {"incone menu"} />
            <span>Home</span>
            <img src= {iconAdd} alt= {"incone adicionar"} />
            <img src= {iconSearch} alt= {"incone search"} />
            <img src= {iconNotify} alt= {"incone notificação"} />
        </StyleAppBar>
    )
}