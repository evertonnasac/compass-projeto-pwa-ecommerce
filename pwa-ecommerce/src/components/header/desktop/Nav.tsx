
import {Link} from "react-router-dom"
import {ItemsMenuContainer as Style} from "./styles"
import {itensNavHeader} from "../itensMenu"




export const Nav =  () => {
    return(
        <Style>
            {itensNavHeader.map((item, index) =>   
                <Link to={ index < 2 ? "/category?name="+item : "/home"}>
                    <span key={index}>{item}</span>
                </Link>)}
        </Style>
    )
}
