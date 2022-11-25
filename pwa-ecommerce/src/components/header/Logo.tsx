import styled from "styled-components"
import logo from "../../../public/icons-header/logo.png"
import {Link} from "react-router-dom"


const DivLogo = styled.div`
    width: 15% ;
    height: 25% ;

    a{
        width: 100% ;
        height: 100% ;
        text-decoration: none ;
    }

    img{
        width: 100% ;
        height: 100% ;
    }

`

export const Logo = () => {
    return (
        <DivLogo>
            <Link to = "./"><img src= {logo} alt="Logo Coral" /></Link>
        </DivLogo>
        
    )
}