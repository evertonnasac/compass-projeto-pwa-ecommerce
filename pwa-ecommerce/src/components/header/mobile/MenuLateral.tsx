import {StyleMenuLateral, ItensMenu} from "./styles"
import {itensNavHeader} from "../itensMenu"


export const  MenuLateral = ( {open} : {open : boolean}) => {
    return(
        <StyleMenuLateral open = {open}>
            {itensNavHeader.map(item => {
                return (
                    <ItensMenu>{item}</ItensMenu>
                )
            })}
        </StyleMenuLateral>
    )
   
}