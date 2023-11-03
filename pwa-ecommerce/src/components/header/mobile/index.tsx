import iconAdd from "/icons-appbar/add.png"
import iconMenu from "/icons-appbar/menu.png"
import iconNotify from "/icons-appbar/notification.png"
import iconSearch from "/icons-appbar/search.png"
import { MenuLateral } from "./MenuLateral"
import { useState } from "react"
import {StyleAppBarMobile} from "./styles"

export const AppBarMobile = () => {

    const[openMenuLateral, setOpenMenuLateral] = useState(false)

    const handleClick = () => {
        setOpenMenuLateral(open => !open)
    }

    return(
        <StyleAppBarMobile>
            <MenuLateral open = {openMenuLateral}/>
            <img src= {iconMenu} alt= {"incone menu"} onClick={handleClick} />
            <span>Home</span>
            <img src= {iconAdd} alt= {"incone adicionar"} />
            <img src= {iconSearch} alt= {"incone search"} />
            <img src= {iconNotify} alt= {"incone notificação"} />
        </StyleAppBarMobile>
    )
}