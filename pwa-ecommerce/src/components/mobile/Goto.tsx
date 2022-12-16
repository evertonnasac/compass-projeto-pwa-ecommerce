import styled from "styled-components"
import iconBack from "../../../public/icons/arrow-goto.png"
import { colours } from "../../UI/colours"
import typography from "../../UI/typography"

const StyleContainerGoto = styled.div`  
    width: 100% ;
    height: 100% ;
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
        height: 100% ;
        font-size: ${typography.paragraphR16.fontSize} ;
        font-weight: ${typography.paragraphR16.fontWeight};
        
    }
    
`
export const ContainerGoto = ({title,} : {title : string}) => {


    return (
        <StyleContainerGoto >
            <span className="title_goto">{title}</span>
            <img src = {iconBack} className = "icon_goto" />
        </StyleContainerGoto>
    )
}