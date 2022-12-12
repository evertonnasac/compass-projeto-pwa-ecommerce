import styled from "styled-components"
import iconBack from "../../../public/icons/arrow-goto.png"
import { useNavigate } from "react-router-dom"
import { colours } from "../../UI/colours"
import typography from "../../UI/typography"

const StyleContainerGoto = styled.div`  
    width: 100% ;
    height: 50px ;
    box-sizing: border-box ;
    padding-top: 20px ;
    display: none ;

    display: flex ;
    justify-content: space-between ;
    cursor: pointer;


    .icon_goto {
        width: 10px ;
        height: 20px ;
       
    }

    .title_goto{
        width: 90% ;
        font-size: ${typography.headingS20.fontSize} ;
        font-weight: ${typography.headingS20.fontWeight} ;
        color: ${colours.primary};
    }
    
`
export const ContainerGoto = ({title,} : {title : string}) => {
    
    const nav = useNavigate()

    return (
        <StyleContainerGoto onClick={() => nav(-1)}>
            <span className="title_goto">{title}</span>
            <img src = {iconBack} className = "icon_goto" />
        </StyleContainerGoto>
    )
}