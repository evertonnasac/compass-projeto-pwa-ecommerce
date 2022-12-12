import styled from "styled-components"
import iconBack from "../../../public/icons/back_mobile.png"
import { useNavigate } from "react-router-dom"
import { colours } from "../../UI/colours"
import typography from "../../UI/typography"

const StyleContainerBack = styled.div`  
    width: 100% ;
    height: 50px ;
    box-sizing: border-box ;
    padding-top: 20px ;
    display: none ;
    cursor: pointer;

    @media (max-width : 899px){
        display: block ;
    }

    .icon_back {
        width: 10px ;
        height: 20px ;
        margin: 0 10% 0 2%;
    }

    .title_back{
        width: 90% ;
        font-size: ${typography.headingS20.fontSize} ;
        font-weight: ${typography.headingS20.fontWeight} ;
        color: ${colours.primary} ;
    }
    
`
export const ContainerBack = ({title} : {title : string}) => {
    
    const nav = useNavigate()

    return (
        <StyleContainerBack onClick={() => nav(-1)}>
            <img src = {iconBack} className = "icon_back" />
            <span className="title_back">{title}</span>
        </StyleContainerBack>
    )
}