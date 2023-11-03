
import logo from "/icons-header/logo.png"
import {Link} from "react-router-dom"
import {Logo as Style} from "./styles"


export const Logo = () => {
    return (
        <Style>
            <Link to = "/home"><img src= {logo} alt="Logo Coral" /></Link>
        </Style>
        
    )
}