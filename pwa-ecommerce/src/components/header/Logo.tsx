import styled from "styled-components"
import logo from "../../../public/icons-header/logo.png"


const DivLogo = styled.div`
    width: 15% ;
    height: 25% ;

    img{
        width: 100% ;
        height: 100% ;
    }

`

export const Logo = () => {
    return (
        <DivLogo>
            <img src= {logo} alt="Logo Coral" />
        </DivLogo>
        
    )
}